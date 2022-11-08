import {
    Address,
    BigDecimal,
    BigInt,
} from "@graphprotocol/graph-ts"

import {ERC20} from "../generated/MOO/ERC20";
import {ERC20NameBytes} from "../generated/MOO/ERC20NameBytes";
import {ERC20SymbolBytes} from "../generated/MOO/ERC20SymbolBytes";

import {
    User,
} from "../generated/schema";
import {
    Token as Token
} from "../generated/schema"

export let ZERO_BI = BigInt.fromI32(0);
export let ONE_BI = BigInt.fromI32(1);
export let ZERO_BD = BigDecimal.fromString("0");
export let ONE_BD = BigDecimal.fromString("1");
export let CELO_ADDRESS = "0x471EcE3750Da237f93B8E339c536989b8978a438";
export let OUT_TRANSACTION_TYPE = "OUT";
export let IN_TRANSACTION_TYPE = "IN";

export function createUser(address: Address, token: string, lastUpdatedTimestamp: BigInt): void {
    let userIdentifier = address.toHexString().concat("-").concat(token)
    let user = User.load(userIdentifier);
    if (!user) {
        user = new User(address.toHexString());
        user.user = address
        user.token = token;
    }

    user.lastUpdatedTimestamp = lastUpdatedTimestamp;
    user.save();
}

export function isNullEthValue(value: string): boolean {
    return (
        value ==
        "0x0000000000000000000000000000000000000000000000000000000000000001"
    );
}

export function fetchTokenSymbol(tokenAddress: Address): string {
    if (tokenAddress.toHexString() == CELO_ADDRESS) {
        return "CELO";
    }

    let contract = ERC20.bind(tokenAddress);
    let contractSymbolBytes = ERC20SymbolBytes.bind(tokenAddress);

    let symbolValue = "unknown";
    let symbolResult = contract.try_symbol();
    if (symbolResult.reverted) {
        let symbolResultBytes = contractSymbolBytes.try_symbol();
        if (!symbolResultBytes.reverted) {
            if (!isNullEthValue(symbolResultBytes.value.toHexString())) {
                symbolValue = symbolResultBytes.value.toString();
            }
        }
    } else {
        symbolValue = symbolResult.value;
    }

    return symbolValue;
}

export function fetchTokenName(tokenAddress: Address): string {
    if (tokenAddress.toHexString() == CELO_ADDRESS) {
        return "Celo Native Asset";
    }

    let nameValue = "unknown";
    let contract = ERC20.bind(tokenAddress);
    let contractNameBytes = ERC20NameBytes.bind(tokenAddress);
    let nameResult = contract.try_name();
    if (nameResult.reverted) {
        let nameResultBytes = contractNameBytes.try_name();
        if (!nameResultBytes.reverted) {
            if (!isNullEthValue(nameResultBytes.value.toHexString())) {
                nameValue = nameResultBytes.value.toString();
            }
        }
    } else {
        nameValue = nameResult.value;
    }

    return nameValue;
}
