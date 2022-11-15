// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class RegistrySet extends ethereum.Event {
  get params(): RegistrySet__Params {
    return new RegistrySet__Params(this);
  }
}

export class RegistrySet__Params {
  _event: RegistrySet;

  constructor(event: RegistrySet) {
    this._event = event;
  }

  get registryAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Revocation extends ethereum.Event {
  get params(): Revocation__Params {
    return new Revocation__Params(this);
  }
}

export class Revocation__Params {
  _event: Revocation;

  constructor(event: Revocation) {
    this._event = event;
  }

  get identifier(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get by(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get token(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get paymentId(): Address {
    return this._event.parameters[4].value.toAddress();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get identifier(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get token(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get paymentId(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get minAttestations(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class Withdrawal extends ethereum.Event {
  get params(): Withdrawal__Params {
    return new Withdrawal__Params(this);
  }
}

export class Withdrawal__Params {
  _event: Withdrawal;

  constructor(event: Withdrawal) {
    this._event = event;
  }

  get identifier(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get token(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get paymentId(): Address {
    return this._event.parameters[4].value.toAddress();
  }
}

export class Escrow__escrowedPaymentsResult {
  value0: Bytes;
  value1: Address;
  value2: Address;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;
  value7: BigInt;
  value8: BigInt;

  constructor(
    value0: Bytes,
    value1: Address,
    value2: Address,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt,
    value7: BigInt,
    value8: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromFixedBytes(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    map.set("value8", ethereum.Value.fromUnsignedBigInt(this.value8));
    return map;
  }

  getRecipientIdentifier(): Bytes {
    return this.value0;
  }

  getSender(): Address {
    return this.value1;
  }

  getToken(): Address {
    return this.value2;
  }

  getValue(): BigInt {
    return this.value3;
  }

  getSentIndex(): BigInt {
    return this.value4;
  }

  getReceivedIndex(): BigInt {
    return this.value5;
  }

  getTimestamp(): BigInt {
    return this.value6;
  }

  getExpirySeconds(): BigInt {
    return this.value7;
  }

  getMinAttestations(): BigInt {
    return this.value8;
  }
}

export class Escrow__getVersionNumberResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt, value3: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }

  getValue0(): BigInt {
    return this.value0;
  }

  getValue1(): BigInt {
    return this.value1;
  }

  getValue2(): BigInt {
    return this.value2;
  }

  getValue3(): BigInt {
    return this.value3;
  }
}

export class Escrow extends ethereum.SmartContract {
  static bind(address: Address): Escrow {
    return new Escrow("Escrow", address);
  }

  escrowedPayments(param0: Address): Escrow__escrowedPaymentsResult {
    let result = super.call(
      "escrowedPayments",
      "escrowedPayments(address):(bytes32,address,address,uint256,uint256,uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new Escrow__escrowedPaymentsResult(
      result[0].toBytes(),
      result[1].toAddress(),
      result[2].toAddress(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toBigInt(),
      result[8].toBigInt()
    );
  }

  try_escrowedPayments(
    param0: Address
  ): ethereum.CallResult<Escrow__escrowedPaymentsResult> {
    let result = super.tryCall(
      "escrowedPayments",
      "escrowedPayments(address):(bytes32,address,address,uint256,uint256,uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Escrow__escrowedPaymentsResult(
        value[0].toBytes(),
        value[1].toAddress(),
        value[2].toAddress(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toBigInt(),
        value[8].toBigInt()
      )
    );
  }

  getReceivedPaymentIds(identifier: Bytes): Array<Address> {
    let result = super.call(
      "getReceivedPaymentIds",
      "getReceivedPaymentIds(bytes32):(address[])",
      [ethereum.Value.fromFixedBytes(identifier)]
    );

    return result[0].toAddressArray();
  }

  try_getReceivedPaymentIds(
    identifier: Bytes
  ): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getReceivedPaymentIds",
      "getReceivedPaymentIds(bytes32):(address[])",
      [ethereum.Value.fromFixedBytes(identifier)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  getSentPaymentIds(sender: Address): Array<Address> {
    let result = super.call(
      "getSentPaymentIds",
      "getSentPaymentIds(address):(address[])",
      [ethereum.Value.fromAddress(sender)]
    );

    return result[0].toAddressArray();
  }

  try_getSentPaymentIds(sender: Address): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getSentPaymentIds",
      "getSentPaymentIds(address):(address[])",
      [ethereum.Value.fromAddress(sender)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  getVersionNumber(): Escrow__getVersionNumberResult {
    let result = super.call(
      "getVersionNumber",
      "getVersionNumber():(uint256,uint256,uint256,uint256)",
      []
    );

    return new Escrow__getVersionNumberResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt()
    );
  }

  try_getVersionNumber(): ethereum.CallResult<Escrow__getVersionNumberResult> {
    let result = super.tryCall(
      "getVersionNumber",
      "getVersionNumber():(uint256,uint256,uint256,uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Escrow__getVersionNumberResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt()
      )
    );
  }

  initialized(): boolean {
    let result = super.call("initialized", "initialized():(bool)", []);

    return result[0].toBoolean();
  }

  try_initialized(): ethereum.CallResult<boolean> {
    let result = super.tryCall("initialized", "initialized():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isOwner(): boolean {
    let result = super.call("isOwner", "isOwner():(bool)", []);

    return result[0].toBoolean();
  }

  try_isOwner(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isOwner", "isOwner():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  receivedPaymentIds(param0: Bytes, param1: BigInt): Address {
    let result = super.call(
      "receivedPaymentIds",
      "receivedPaymentIds(bytes32,uint256):(address)",
      [
        ethereum.Value.fromFixedBytes(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toAddress();
  }

  try_receivedPaymentIds(
    param0: Bytes,
    param1: BigInt
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "receivedPaymentIds",
      "receivedPaymentIds(bytes32,uint256):(address)",
      [
        ethereum.Value.fromFixedBytes(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  registry(): Address {
    let result = super.call("registry", "registry():(address)", []);

    return result[0].toAddress();
  }

  try_registry(): ethereum.CallResult<Address> {
    let result = super.tryCall("registry", "registry():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  revoke(paymentId: Address): boolean {
    let result = super.call("revoke", "revoke(address):(bool)", [
      ethereum.Value.fromAddress(paymentId)
    ]);

    return result[0].toBoolean();
  }

  try_revoke(paymentId: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("revoke", "revoke(address):(bool)", [
      ethereum.Value.fromAddress(paymentId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  sentPaymentIds(param0: Address, param1: BigInt): Address {
    let result = super.call(
      "sentPaymentIds",
      "sentPaymentIds(address,uint256):(address)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toAddress();
  }

  try_sentPaymentIds(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "sentPaymentIds",
      "sentPaymentIds(address,uint256):(address)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  transfer(
    identifier: Bytes,
    token: Address,
    value: BigInt,
    expirySeconds: BigInt,
    paymentId: Address,
    minAttestations: BigInt
  ): boolean {
    let result = super.call(
      "transfer",
      "transfer(bytes32,address,uint256,uint256,address,uint256):(bool)",
      [
        ethereum.Value.fromFixedBytes(identifier),
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromUnsignedBigInt(value),
        ethereum.Value.fromUnsignedBigInt(expirySeconds),
        ethereum.Value.fromAddress(paymentId),
        ethereum.Value.fromUnsignedBigInt(minAttestations)
      ]
    );

    return result[0].toBoolean();
  }

  try_transfer(
    identifier: Bytes,
    token: Address,
    value: BigInt,
    expirySeconds: BigInt,
    paymentId: Address,
    minAttestations: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "transfer",
      "transfer(bytes32,address,uint256,uint256,address,uint256):(bool)",
      [
        ethereum.Value.fromFixedBytes(identifier),
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromUnsignedBigInt(value),
        ethereum.Value.fromUnsignedBigInt(expirySeconds),
        ethereum.Value.fromAddress(paymentId),
        ethereum.Value.fromUnsignedBigInt(minAttestations)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  withdraw(paymentId: Address, v: i32, r: Bytes, s: Bytes): boolean {
    let result = super.call(
      "withdraw",
      "withdraw(address,uint8,bytes32,bytes32):(bool)",
      [
        ethereum.Value.fromAddress(paymentId),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(v)),
        ethereum.Value.fromFixedBytes(r),
        ethereum.Value.fromFixedBytes(s)
      ]
    );

    return result[0].toBoolean();
  }

  try_withdraw(
    paymentId: Address,
    v: i32,
    r: Bytes,
    s: Bytes
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "withdraw",
      "withdraw(address,uint8,bytes32,bytes32):(bool)",
      [
        ethereum.Value.fromAddress(paymentId),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(v)),
        ethereum.Value.fromFixedBytes(r),
        ethereum.Value.fromFixedBytes(s)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get test(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get registryAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RevokeCall extends ethereum.Call {
  get inputs(): RevokeCall__Inputs {
    return new RevokeCall__Inputs(this);
  }

  get outputs(): RevokeCall__Outputs {
    return new RevokeCall__Outputs(this);
  }
}

export class RevokeCall__Inputs {
  _call: RevokeCall;

  constructor(call: RevokeCall) {
    this._call = call;
  }

  get paymentId(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RevokeCall__Outputs {
  _call: RevokeCall;

  constructor(call: RevokeCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class SetRegistryCall extends ethereum.Call {
  get inputs(): SetRegistryCall__Inputs {
    return new SetRegistryCall__Inputs(this);
  }

  get outputs(): SetRegistryCall__Outputs {
    return new SetRegistryCall__Outputs(this);
  }
}

export class SetRegistryCall__Inputs {
  _call: SetRegistryCall;

  constructor(call: SetRegistryCall) {
    this._call = call;
  }

  get registryAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetRegistryCall__Outputs {
  _call: SetRegistryCall;

  constructor(call: SetRegistryCall) {
    this._call = call;
  }
}

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get identifier(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get token(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get expirySeconds(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get paymentId(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get minAttestations(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get paymentId(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get v(): i32 {
    return this._call.inputValues[1].value.toI32();
  }

  get r(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get s(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}
