import {
    Transfer as TransferEvent,
} from "../generated/cUSD/ERC20"
import {
    Transaction,
    TokenDayData,
} from "../generated/schema";
import {ONE_BI, OUT_TRANSACTION_TYPE, ZERO_BD, ZERO_BI, IN_TRANSACTION_TYPE, ONE_BD} from "./utils";


export function updateTokenDayData(token: Transaction, event: TransferEvent): TokenDayData {
    let timestamp = event.block.timestamp.toI32();
    let dayStartTimestamp = timestamp - ( timestamp % 86400 );
    let tokenDayID = dayStartTimestamp.toString().concat("-").concat(event.address.toHexString());

    let tokenDayData = TokenDayData.load(tokenDayID);
    if (tokenDayData === null) {
        tokenDayData = new TokenDayData(tokenDayID);
        tokenDayData.token = token.token;
        tokenDayData.dayTimestamp = dayStartTimestamp;
        tokenDayData.dailyVolumeToken = ZERO_BD;
        tokenDayData.outDailyVolumeToken = ZERO_BD
        tokenDayData.inDailyVolumeToken = ZERO_BD
        tokenDayData.dailyGasConsumed = ZERO_BD;
        tokenDayData.outDailyGasConsumed = ZERO_BD;
        tokenDayData.inDailyGasConsumed = ZERO_BD;
        tokenDayData.dailyTxns = ZERO_BI;
        tokenDayData.outDailyTxns = ZERO_BD;
        tokenDayData.inDailyTxns = ZERO_BD;
    }

    let gasConsumed = event.transaction.gasLimit.times(event.transaction.gasPrice).toBigDecimal();
    tokenDayData.dailyVolumeToken = tokenDayData.dailyVolumeToken.plus(event.params.value.toBigDecimal());
    tokenDayData.dailyGasConsumed = tokenDayData.dailyGasConsumed.plus(gasConsumed);
    tokenDayData.dailyTxns = tokenDayData.dailyTxns.plus(ONE_BI);

    if (token.transactionType == OUT_TRANSACTION_TYPE) {
        tokenDayData.outDailyVolumeToken = tokenDayData.outDailyVolumeToken.plus(ONE_BD);
        tokenDayData.outDailyGasConsumed = tokenDayData.outDailyGasConsumed.plus(ONE_BD);
        tokenDayData.outDailyTxns = tokenDayData.outDailyTxns.plus(ONE_BD);
    } else if (token.transactionType == IN_TRANSACTION_TYPE) {
        tokenDayData.inDailyVolumeToken = tokenDayData.inDailyVolumeToken.plus(ONE_BD);
        tokenDayData.inDailyGasConsumed = tokenDayData.inDailyGasConsumed.plus(ONE_BD);
        tokenDayData.inDailyTxns = tokenDayData.inDailyTxns.plus(ONE_BD);
    }

    tokenDayData.lastUpdatedTimestamp = event.block.timestamp
    tokenDayData.save();

    return tokenDayData as TokenDayData;
}
