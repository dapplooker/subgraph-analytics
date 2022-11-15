import {
  Transfer as TransferEvent,
} from "../generated/cUSD/ERC20"
import {
    Transaction as Transaction,
    Token as Token
} from "../generated/schema"
import { log } from "@graphprotocol/graph-ts";
import {
    createUser, fetchTokenName, fetchTokenSymbol, IN_TRANSACTION_TYPE, OUT_TRANSACTION_TYPE,
} from "./utils";
import {
    updateTokenDayData
} from "./dayUpdates"

let OPTICS_CELO_ADDRESS = '0x1548cf5cf7dBd93f4dA11f45fCce315573d21B60';


export function handleTransferEvent(event: TransferEvent): void {
    log.info("handleTransferEvent transaction identifier from {}, type {}", [event.params.from.toHexString(), typeof event.params.from]);
    log.info("handleTransferEvent transaction identifier to {}, type {}", [event.params.to.toHexString(), typeof event.params.to]);
    log.info("handleTransferEvent optics typeof {}, value {}", [typeof OPTICS_CELO_ADDRESS, OPTICS_CELO_ADDRESS.toString().toLowerCase()]);

    if (event.params.from.toHexString().toLowerCase() == OPTICS_CELO_ADDRESS.toString().toLowerCase() ||
        event.params.to.toHexString().toLowerCase() == OPTICS_CELO_ADDRESS.toString().toLowerCase()) {
        let token = Token.load(event.address.toHexString());
        if (!token){
            token = new Token(event.address.toHexString());
            token.symbol = fetchTokenSymbol(event.address);
            token.name = fetchTokenName(event.address);
            token.lastUpdatedTimestamp = event.block.timestamp;
            token.save();
        }

        log.info("Working on block: {}", [event.block.number.toString()]);

        let tokenTransactionIdentifier = event.transaction.hash.toHex() + "-" + event.logIndex.toString();

        log.info("This a optics token transaction, identifier = {}", [tokenTransactionIdentifier]);
        let transaction = new Transaction(tokenTransactionIdentifier);
        transaction.txHash = event.transaction.hash;
        transaction.token = token.id;
        transaction.fromAddress = event.transaction.from;
        transaction.toAddress = event.transaction.to;
        transaction.gasUsed = event.transaction.gasLimit;
        transaction.gasPrice = event.transaction.gasPrice;
        transaction.lastUpdatedTimestamp = event.block.timestamp;
        if (event.params.from.toHexString().toLowerCase() == OPTICS_CELO_ADDRESS.toString().toLowerCase()) {
            transaction.transactionType = OUT_TRANSACTION_TYPE;
        } else if (event.params.to.toHexString().toLowerCase() == OPTICS_CELO_ADDRESS.toString().toLowerCase()){
            transaction.transactionType = IN_TRANSACTION_TYPE;
        }
        transaction.from = event.params.from;
        transaction.to = event.params.to;

        transaction.value = event.params.value;
        log.info("Creating user for transaction address: {}", [event.transaction.hash.toHex()]);
        createUser(event.params.from, token.id, event.block.timestamp);
        createUser(event.params.to, token.id, event.block.timestamp);

        let tokenDayData = updateTokenDayData(transaction, event);
        tokenDayData.save();
        transaction.save();
    }
}
