// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Swap extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Swap entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Swap must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Swap", id.toString(), this);
    }
  }

  static load(id: string): Swap | null {
    return changetype<Swap | null>(store.get("Swap", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get initiator(): Bytes {
    let value = this.get("initiator");
    return value!.toBytes();
  }

  set initiator(value: Bytes) {
    this.set("initiator", Value.fromBytes(value));
  }

  get beneficiary(): Bytes {
    let value = this.get("beneficiary");
    return value!.toBytes();
  }

  set beneficiary(value: Bytes) {
    this.set("beneficiary", Value.fromBytes(value));
  }

  get srcToken(): Bytes {
    let value = this.get("srcToken");
    return value!.toBytes();
  }

  set srcToken(value: Bytes) {
    this.set("srcToken", Value.fromBytes(value));
  }

  get destToken(): Bytes {
    let value = this.get("destToken");
    return value!.toBytes();
  }

  set destToken(value: Bytes) {
    this.set("destToken", Value.fromBytes(value));
  }

  get srcAmount(): BigInt {
    let value = this.get("srcAmount");
    return value!.toBigInt();
  }

  set srcAmount(value: BigInt) {
    this.set("srcAmount", Value.fromBigInt(value));
  }

  get receivedAmount(): BigInt {
    let value = this.get("receivedAmount");
    return value!.toBigInt();
  }

  set receivedAmount(value: BigInt) {
    this.set("receivedAmount", Value.fromBigInt(value));
  }

  get expectedAmount(): BigInt {
    let value = this.get("expectedAmount");
    return value!.toBigInt();
  }

  set expectedAmount(value: BigInt) {
    this.set("expectedAmount", Value.fromBigInt(value));
  }

  get referrer(): string {
    let value = this.get("referrer");
    return value!.toString();
  }

  set referrer(value: string) {
    this.set("referrer", Value.fromString(value));
  }

  get txHash(): Bytes {
    let value = this.get("txHash");
    return value!.toBytes();
  }

  set txHash(value: Bytes) {
    this.set("txHash", Value.fromBytes(value));
  }

  get txOrigin(): Bytes {
    let value = this.get("txOrigin");
    return value!.toBytes();
  }

  set txOrigin(value: Bytes) {
    this.set("txOrigin", Value.fromBytes(value));
  }

  get txTarget(): Bytes | null {
    let value = this.get("txTarget");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set txTarget(value: Bytes | null) {
    if (!value) {
      this.unset("txTarget");
    } else {
      this.set("txTarget", Value.fromBytes(<Bytes>value));
    }
  }

  get txGasUsed(): BigInt {
    let value = this.get("txGasUsed");
    return value!.toBigInt();
  }

  set txGasUsed(value: BigInt) {
    this.set("txGasUsed", Value.fromBigInt(value));
  }

  get txGasPrice(): BigInt {
    let value = this.get("txGasPrice");
    return value!.toBigInt();
  }

  set txGasPrice(value: BigInt) {
    this.set("txGasPrice", Value.fromBigInt(value));
  }

  get blockHash(): Bytes {
    let value = this.get("blockHash");
    return value!.toBytes();
  }

  set blockHash(value: Bytes) {
    this.set("blockHash", Value.fromBytes(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class Fee extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Fee entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Fee must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Fee", id.toString(), this);
    }
  }

  static load(id: string): Fee | null {
    return changetype<Fee | null>(store.get("Fee", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get fee(): BigInt {
    let value = this.get("fee");
    return value!.toBigInt();
  }

  set fee(value: BigInt) {
    this.set("fee", Value.fromBigInt(value));
  }

  get partnerShare(): BigInt {
    let value = this.get("partnerShare");
    return value!.toBigInt();
  }

  set partnerShare(value: BigInt) {
    this.set("partnerShare", Value.fromBigInt(value));
  }

  get paraswapShare(): BigInt {
    let value = this.get("paraswapShare");
    return value!.toBigInt();
  }

  set paraswapShare(value: BigInt) {
    this.set("paraswapShare", Value.fromBigInt(value));
  }

  get txHash(): Bytes {
    let value = this.get("txHash");
    return value!.toBytes();
  }

  set txHash(value: Bytes) {
    this.set("txHash", Value.fromBytes(value));
  }

  get txOrigin(): Bytes {
    let value = this.get("txOrigin");
    return value!.toBytes();
  }

  set txOrigin(value: Bytes) {
    this.set("txOrigin", Value.fromBytes(value));
  }

  get txTarget(): Bytes | null {
    let value = this.get("txTarget");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set txTarget(value: Bytes | null) {
    if (!value) {
      this.unset("txTarget");
    } else {
      this.set("txTarget", Value.fromBytes(<Bytes>value));
    }
  }

  get txGasUsed(): BigInt {
    let value = this.get("txGasUsed");
    return value!.toBigInt();
  }

  set txGasUsed(value: BigInt) {
    this.set("txGasUsed", Value.fromBigInt(value));
  }

  get txGasPrice(): BigInt {
    let value = this.get("txGasPrice");
    return value!.toBigInt();
  }

  set txGasPrice(value: BigInt) {
    this.set("txGasPrice", Value.fromBigInt(value));
  }

  get blockHash(): Bytes {
    let value = this.get("blockHash");
    return value!.toBytes();
  }

  set blockHash(value: Bytes) {
    this.set("blockHash", Value.fromBytes(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type User must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value!.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get blockHash(): Bytes {
    let value = this.get("blockHash");
    return value!.toBytes();
  }

  set blockHash(value: Bytes) {
    this.set("blockHash", Value.fromBytes(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get joinTimestamp(): BigInt {
    let value = this.get("joinTimestamp");
    return value!.toBigInt();
  }

  set joinTimestamp(value: BigInt) {
    this.set("joinTimestamp", Value.fromBigInt(value));
  }
}

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Token entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Token must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Token", id.toString(), this);
    }
  }

  static load(id: string): Token | null {
    return changetype<Token | null>(store.get("Token", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value!.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get srcTotalAmount(): BigInt {
    let value = this.get("srcTotalAmount");
    return value!.toBigInt();
  }

  set srcTotalAmount(value: BigInt) {
    this.set("srcTotalAmount", Value.fromBigInt(value));
  }

  get receivedTotalAmount(): BigInt {
    let value = this.get("receivedTotalAmount");
    return value!.toBigInt();
  }

  set receivedTotalAmount(value: BigInt) {
    this.set("receivedTotalAmount", Value.fromBigInt(value));
  }
}

export class Paraswap extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Paraswap entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Paraswap must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Paraswap", id.toString(), this);
    }
  }

  static load(id: string): Paraswap | null {
    return changetype<Paraswap | null>(store.get("Paraswap", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get totalSrcAmount(): BigInt {
    let value = this.get("totalSrcAmount");
    return value!.toBigInt();
  }

  set totalSrcAmount(value: BigInt) {
    this.set("totalSrcAmount", Value.fromBigInt(value));
  }

  get totalReceivedAmount(): BigInt {
    let value = this.get("totalReceivedAmount");
    return value!.toBigInt();
  }

  set totalReceivedAmount(value: BigInt) {
    this.set("totalReceivedAmount", Value.fromBigInt(value));
  }

  get totalSwaps(): BigInt {
    let value = this.get("totalSwaps");
    return value!.toBigInt();
  }

  set totalSwaps(value: BigInt) {
    this.set("totalSwaps", Value.fromBigInt(value));
  }

  get totalUsers(): BigInt {
    let value = this.get("totalUsers");
    return value!.toBigInt();
  }

  set totalUsers(value: BigInt) {
    this.set("totalUsers", Value.fromBigInt(value));
  }
}
