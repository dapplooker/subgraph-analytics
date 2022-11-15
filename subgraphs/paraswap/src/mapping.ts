import { BigInt } from "@graphprotocol/graph-ts";
import {
  AugustusSwapperV2,
  Bought,
  Donation,
  FeeTaken,
  OwnershipTransferred,
  Paused,
  Swapped,
  Unpaused,
} from "../generated/AugustusSwapperV2/AugustusSwapperV2";

const ParaswapAddress = "0x9509665d015Bfe3C77AA5ad6Ca20C8Afa1d98989";

import { Fee, Swap, User, Token, Paraswap } from "../generated/schema";

export function handleBought(event: Bought): void {}

export function handleDonation(event: Donation): void {}

export function handleFeeTaken(event: FeeTaken): void {
  let entity = Fee.load(event.transaction.from.toHex());
  if (entity == null) {
    entity = new Fee(event.transaction.from.toHex());
  }

  // Entity fields can be set based on event parameters
  entity.fee = event.params.fee;
  entity.partnerShare = event.params.partnerShare;
  entity.paraswapShare = event.params.partnerShare;
  entity.txHash = event.transaction.hash;
  entity.txOrigin = event.transaction.from;
  entity.txTarget = event.transaction.to;
  entity.txGasUsed = event.receipt!.gasUsed;
  entity.txGasPrice = event.transaction.gasPrice;
  entity.blockHash = event.block.hash;
  entity.blockNumber = event.block.number;
  entity.timestamp = event.block.timestamp;

  // Entities can be written to the store with `.save()`
  entity.save();
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handlePaused(event: Paused): void {}

export function handleSwapped(event: Swapped): void {
  let paraswap = Paraswap.load(ParaswapAddress);
  if (paraswap == null) {
    paraswap = new Paraswap(ParaswapAddress);
    paraswap.totalSrcAmount = BigInt.fromI32(0);
    paraswap.totalReceivedAmount = BigInt.fromI32(0);
    paraswap.totalSwaps = BigInt.fromI32(0);
    paraswap.totalUsers = BigInt.fromI32(0);
  }

  let entity = Swap.load(event.transaction.from.toHex());
  if (entity == null) {
    let Adder = BigInt.fromI32(1);
    paraswap.totalSwaps = paraswap.totalSwaps.plus(Adder);
    entity = new Swap(event.transaction.from.toHex());
  }

  // Entity fields can be set based on event parameters
  entity.initiator = event.params.initiator;
  entity.beneficiary = event.params.beneficiary;
  entity.srcToken = event.params.srcToken;
  entity.destToken = event.params.destToken;
  entity.srcAmount = event.params.srcAmount;
  entity.receivedAmount = event.params.receivedAmount;
  entity.expectedAmount = event.params.expectedAmount;
  entity.referrer = event.params.referrer;
  entity.txHash = event.transaction.hash;
  entity.txOrigin = event.transaction.from;
  entity.txTarget = event.transaction.to;
  entity.txGasUsed = event.receipt!.gasUsed;
  entity.txGasPrice = event.transaction.gasPrice;
  entity.blockHash = event.block.hash;
  entity.blockNumber = event.block.number;
  entity.timestamp = event.block.timestamp;
  let amount1 = event.params.srcAmount;
  let amount2 = event.params.receivedAmount;
  paraswap.totalSrcAmount = paraswap.totalSrcAmount.plus(amount1);
  paraswap.totalReceivedAmount = paraswap.totalReceivedAmount.plus(amount2);
  // Entities can be written to the store with `.save()`
  entity.save();

  //User Entity
  let user = User.load(event.params.initiator.toHex());
  if (user == null) {
    let Adder = BigInt.fromI32(1);
    paraswap.totalUsers = paraswap.totalUsers.plus(Adder);
    user = new User(event.params.initiator.toHex());
    user.blockHash = event.block.hash;
    user.blockNumber = event.block.number;
    user.joinTimestamp = event.block.timestamp;
    user.address = event.params.initiator;
    user.save();
  }

  //Token Entity
  let token = Token.load(event.params.srcToken.toHex());
  if (token == null) {
    token = new Token(event.params.srcToken.toHex());
    token.address = event.params.srcToken;
    token.srcTotalAmount = event.params.srcAmount;
    token.receivedTotalAmount = event.params.receivedAmount;
  } else {
    let temp = event.params.srcAmount;
    let temp1 = event.params.receivedAmount;
    token.srcTotalAmount = token.srcTotalAmount.plus(temp);
    token.receivedTotalAmount = token.receivedTotalAmount.plus(temp1);
  }
  token.save();
  paraswap.save();
}

export function handleUnpaused(event: Unpaused): void {}
