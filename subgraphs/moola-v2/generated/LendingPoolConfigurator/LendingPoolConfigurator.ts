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

export class ATokenUpgraded extends ethereum.Event {
  get params(): ATokenUpgraded__Params {
    return new ATokenUpgraded__Params(this);
  }
}

export class ATokenUpgraded__Params {
  _event: ATokenUpgraded;

  constructor(event: ATokenUpgraded) {
    this._event = event;
  }

  get asset(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get proxy(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get implementation(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class BorrowingDisabledOnReserve extends ethereum.Event {
  get params(): BorrowingDisabledOnReserve__Params {
    return new BorrowingDisabledOnReserve__Params(this);
  }
}

export class BorrowingDisabledOnReserve__Params {
  _event: BorrowingDisabledOnReserve;

  constructor(event: BorrowingDisabledOnReserve) {
    this._event = event;
  }

  get asset(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class BorrowingEnabledOnReserve extends ethereum.Event {
  get params(): BorrowingEnabledOnReserve__Params {
    return new BorrowingEnabledOnReserve__Params(this);
  }
}

export class BorrowingEnabledOnReserve__Params {
  _event: BorrowingEnabledOnReserve;

  constructor(event: BorrowingEnabledOnReserve) {
    this._event = event;
  }

  get asset(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get stableRateEnabled(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class CollateralConfigurationChanged extends ethereum.Event {
  get params(): CollateralConfigurationChanged__Params {
    return new CollateralConfigurationChanged__Params(this);
  }
}

export class CollateralConfigurationChanged__Params {
  _event: CollateralConfigurationChanged;

  constructor(event: CollateralConfigurationChanged) {
    this._event = event;
  }

  get asset(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get ltv(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get liquidationThreshold(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get liquidationBonus(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class ReserveActivated extends ethereum.Event {
  get params(): ReserveActivated__Params {
    return new ReserveActivated__Params(this);
  }
}

export class ReserveActivated__Params {
  _event: ReserveActivated;

  constructor(event: ReserveActivated) {
    this._event = event;
  }

  get asset(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class ReserveDeactivated extends ethereum.Event {
  get params(): ReserveDeactivated__Params {
    return new ReserveDeactivated__Params(this);
  }
}

export class ReserveDeactivated__Params {
  _event: ReserveDeactivated;

  constructor(event: ReserveDeactivated) {
    this._event = event;
  }

  get asset(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class ReserveDecimalsChanged extends ethereum.Event {
  get params(): ReserveDecimalsChanged__Params {
    return new ReserveDecimalsChanged__Params(this);
  }
}

export class ReserveDecimalsChanged__Params {
  _event: ReserveDecimalsChanged;

  constructor(event: ReserveDecimalsChanged) {
    this._event = event;
  }

  get asset(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get decimals(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class ReserveFactorChanged extends ethereum.Event {
  get params(): ReserveFactorChanged__Params {
    return new ReserveFactorChanged__Params(this);
  }
}

export class ReserveFactorChanged__Params {
  _event: ReserveFactorChanged;

  constructor(event: ReserveFactorChanged) {
    this._event = event;
  }

  get asset(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get factor(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class ReserveFrozen extends ethereum.Event {
  get params(): ReserveFrozen__Params {
    return new ReserveFrozen__Params(this);
  }
}

export class ReserveFrozen__Params {
  _event: ReserveFrozen;

  constructor(event: ReserveFrozen) {
    this._event = event;
  }

  get asset(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class ReserveInitialized extends ethereum.Event {
  get params(): ReserveInitialized__Params {
    return new ReserveInitialized__Params(this);
  }
}

export class ReserveInitialized__Params {
  _event: ReserveInitialized;

  constructor(event: ReserveInitialized) {
    this._event = event;
  }

  get asset(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get aToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get stableDebtToken(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get variableDebtToken(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get interestRateStrategyAddress(): Address {
    return this._event.parameters[4].value.toAddress();
  }
}

export class ReserveInterestRateStrategyChanged extends ethereum.Event {
  get params(): ReserveInterestRateStrategyChanged__Params {
    return new ReserveInterestRateStrategyChanged__Params(this);
  }
}

export class ReserveInterestRateStrategyChanged__Params {
  _event: ReserveInterestRateStrategyChanged;

  constructor(event: ReserveInterestRateStrategyChanged) {
    this._event = event;
  }

  get asset(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get strategy(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ReserveUnfrozen extends ethereum.Event {
  get params(): ReserveUnfrozen__Params {
    return new ReserveUnfrozen__Params(this);
  }
}

export class ReserveUnfrozen__Params {
  _event: ReserveUnfrozen;

  constructor(event: ReserveUnfrozen) {
    this._event = event;
  }

  get asset(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class StableDebtTokenUpgraded extends ethereum.Event {
  get params(): StableDebtTokenUpgraded__Params {
    return new StableDebtTokenUpgraded__Params(this);
  }
}

export class StableDebtTokenUpgraded__Params {
  _event: StableDebtTokenUpgraded;

  constructor(event: StableDebtTokenUpgraded) {
    this._event = event;
  }

  get asset(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get proxy(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get implementation(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class StableRateDisabledOnReserve extends ethereum.Event {
  get params(): StableRateDisabledOnReserve__Params {
    return new StableRateDisabledOnReserve__Params(this);
  }
}

export class StableRateDisabledOnReserve__Params {
  _event: StableRateDisabledOnReserve;

  constructor(event: StableRateDisabledOnReserve) {
    this._event = event;
  }

  get asset(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class StableRateEnabledOnReserve extends ethereum.Event {
  get params(): StableRateEnabledOnReserve__Params {
    return new StableRateEnabledOnReserve__Params(this);
  }
}

export class StableRateEnabledOnReserve__Params {
  _event: StableRateEnabledOnReserve;

  constructor(event: StableRateEnabledOnReserve) {
    this._event = event;
  }

  get asset(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class VariableDebtTokenUpgraded extends ethereum.Event {
  get params(): VariableDebtTokenUpgraded__Params {
    return new VariableDebtTokenUpgraded__Params(this);
  }
}

export class VariableDebtTokenUpgraded__Params {
  _event: VariableDebtTokenUpgraded;

  constructor(event: VariableDebtTokenUpgraded) {
    this._event = event;
  }

  get asset(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get proxy(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get implementation(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class LendingPoolConfigurator extends ethereum.SmartContract {
  static bind(address: Address): LendingPoolConfigurator {
    return new LendingPoolConfigurator("LendingPoolConfigurator", address);
  }
}

export class ActivateReserveCall extends ethereum.Call {
  get inputs(): ActivateReserveCall__Inputs {
    return new ActivateReserveCall__Inputs(this);
  }

  get outputs(): ActivateReserveCall__Outputs {
    return new ActivateReserveCall__Outputs(this);
  }
}

export class ActivateReserveCall__Inputs {
  _call: ActivateReserveCall;

  constructor(call: ActivateReserveCall) {
    this._call = call;
  }

  get asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ActivateReserveCall__Outputs {
  _call: ActivateReserveCall;

  constructor(call: ActivateReserveCall) {
    this._call = call;
  }
}

export class BatchInitReserveCall extends ethereum.Call {
  get inputs(): BatchInitReserveCall__Inputs {
    return new BatchInitReserveCall__Inputs(this);
  }

  get outputs(): BatchInitReserveCall__Outputs {
    return new BatchInitReserveCall__Outputs(this);
  }
}

export class BatchInitReserveCall__Inputs {
  _call: BatchInitReserveCall;

  constructor(call: BatchInitReserveCall) {
    this._call = call;
  }

  get input(): Array<BatchInitReserveCallInputStruct> {
    return this._call.inputValues[0].value.toTupleArray<
      BatchInitReserveCallInputStruct
    >();
  }
}

export class BatchInitReserveCall__Outputs {
  _call: BatchInitReserveCall;

  constructor(call: BatchInitReserveCall) {
    this._call = call;
  }
}

export class BatchInitReserveCallInputStruct extends ethereum.Tuple {
  get aTokenImpl(): Address {
    return this[0].toAddress();
  }

  get stableDebtTokenImpl(): Address {
    return this[1].toAddress();
  }

  get variableDebtTokenImpl(): Address {
    return this[2].toAddress();
  }

  get underlyingAssetDecimals(): i32 {
    return this[3].toI32();
  }

  get interestRateStrategyAddress(): Address {
    return this[4].toAddress();
  }

  get underlyingAsset(): Address {
    return this[5].toAddress();
  }

  get treasury(): Address {
    return this[6].toAddress();
  }

  get incentivesController(): Address {
    return this[7].toAddress();
  }

  get underlyingAssetName(): string {
    return this[8].toString();
  }

  get aTokenName(): string {
    return this[9].toString();
  }

  get aTokenSymbol(): string {
    return this[10].toString();
  }

  get variableDebtTokenName(): string {
    return this[11].toString();
  }

  get variableDebtTokenSymbol(): string {
    return this[12].toString();
  }

  get stableDebtTokenName(): string {
    return this[13].toString();
  }

  get stableDebtTokenSymbol(): string {
    return this[14].toString();
  }

  get params(): Bytes {
    return this[15].toBytes();
  }
}

export class ConfigureReserveAsCollateralCall extends ethereum.Call {
  get inputs(): ConfigureReserveAsCollateralCall__Inputs {
    return new ConfigureReserveAsCollateralCall__Inputs(this);
  }

  get outputs(): ConfigureReserveAsCollateralCall__Outputs {
    return new ConfigureReserveAsCollateralCall__Outputs(this);
  }
}

export class ConfigureReserveAsCollateralCall__Inputs {
  _call: ConfigureReserveAsCollateralCall;

  constructor(call: ConfigureReserveAsCollateralCall) {
    this._call = call;
  }

  get asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get ltv(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get liquidationThreshold(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get liquidationBonus(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class ConfigureReserveAsCollateralCall__Outputs {
  _call: ConfigureReserveAsCollateralCall;

  constructor(call: ConfigureReserveAsCollateralCall) {
    this._call = call;
  }
}

export class DeactivateReserveCall extends ethereum.Call {
  get inputs(): DeactivateReserveCall__Inputs {
    return new DeactivateReserveCall__Inputs(this);
  }

  get outputs(): DeactivateReserveCall__Outputs {
    return new DeactivateReserveCall__Outputs(this);
  }
}

export class DeactivateReserveCall__Inputs {
  _call: DeactivateReserveCall;

  constructor(call: DeactivateReserveCall) {
    this._call = call;
  }

  get asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class DeactivateReserveCall__Outputs {
  _call: DeactivateReserveCall;

  constructor(call: DeactivateReserveCall) {
    this._call = call;
  }
}

export class DisableBorrowingOnReserveCall extends ethereum.Call {
  get inputs(): DisableBorrowingOnReserveCall__Inputs {
    return new DisableBorrowingOnReserveCall__Inputs(this);
  }

  get outputs(): DisableBorrowingOnReserveCall__Outputs {
    return new DisableBorrowingOnReserveCall__Outputs(this);
  }
}

export class DisableBorrowingOnReserveCall__Inputs {
  _call: DisableBorrowingOnReserveCall;

  constructor(call: DisableBorrowingOnReserveCall) {
    this._call = call;
  }

  get asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class DisableBorrowingOnReserveCall__Outputs {
  _call: DisableBorrowingOnReserveCall;

  constructor(call: DisableBorrowingOnReserveCall) {
    this._call = call;
  }
}

export class DisableReserveStableRateCall extends ethereum.Call {
  get inputs(): DisableReserveStableRateCall__Inputs {
    return new DisableReserveStableRateCall__Inputs(this);
  }

  get outputs(): DisableReserveStableRateCall__Outputs {
    return new DisableReserveStableRateCall__Outputs(this);
  }
}

export class DisableReserveStableRateCall__Inputs {
  _call: DisableReserveStableRateCall;

  constructor(call: DisableReserveStableRateCall) {
    this._call = call;
  }

  get asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class DisableReserveStableRateCall__Outputs {
  _call: DisableReserveStableRateCall;

  constructor(call: DisableReserveStableRateCall) {
    this._call = call;
  }
}

export class EnableBorrowingOnReserveCall extends ethereum.Call {
  get inputs(): EnableBorrowingOnReserveCall__Inputs {
    return new EnableBorrowingOnReserveCall__Inputs(this);
  }

  get outputs(): EnableBorrowingOnReserveCall__Outputs {
    return new EnableBorrowingOnReserveCall__Outputs(this);
  }
}

export class EnableBorrowingOnReserveCall__Inputs {
  _call: EnableBorrowingOnReserveCall;

  constructor(call: EnableBorrowingOnReserveCall) {
    this._call = call;
  }

  get asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get stableBorrowRateEnabled(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class EnableBorrowingOnReserveCall__Outputs {
  _call: EnableBorrowingOnReserveCall;

  constructor(call: EnableBorrowingOnReserveCall) {
    this._call = call;
  }
}

export class EnableReserveStableRateCall extends ethereum.Call {
  get inputs(): EnableReserveStableRateCall__Inputs {
    return new EnableReserveStableRateCall__Inputs(this);
  }

  get outputs(): EnableReserveStableRateCall__Outputs {
    return new EnableReserveStableRateCall__Outputs(this);
  }
}

export class EnableReserveStableRateCall__Inputs {
  _call: EnableReserveStableRateCall;

  constructor(call: EnableReserveStableRateCall) {
    this._call = call;
  }

  get asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class EnableReserveStableRateCall__Outputs {
  _call: EnableReserveStableRateCall;

  constructor(call: EnableReserveStableRateCall) {
    this._call = call;
  }
}

export class FreezeReserveCall extends ethereum.Call {
  get inputs(): FreezeReserveCall__Inputs {
    return new FreezeReserveCall__Inputs(this);
  }

  get outputs(): FreezeReserveCall__Outputs {
    return new FreezeReserveCall__Outputs(this);
  }
}

export class FreezeReserveCall__Inputs {
  _call: FreezeReserveCall;

  constructor(call: FreezeReserveCall) {
    this._call = call;
  }

  get asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class FreezeReserveCall__Outputs {
  _call: FreezeReserveCall;

  constructor(call: FreezeReserveCall) {
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

  get provider(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class SetPoolPauseCall extends ethereum.Call {
  get inputs(): SetPoolPauseCall__Inputs {
    return new SetPoolPauseCall__Inputs(this);
  }

  get outputs(): SetPoolPauseCall__Outputs {
    return new SetPoolPauseCall__Outputs(this);
  }
}

export class SetPoolPauseCall__Inputs {
  _call: SetPoolPauseCall;

  constructor(call: SetPoolPauseCall) {
    this._call = call;
  }

  get val(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class SetPoolPauseCall__Outputs {
  _call: SetPoolPauseCall;

  constructor(call: SetPoolPauseCall) {
    this._call = call;
  }
}

export class SetReserveFactorCall extends ethereum.Call {
  get inputs(): SetReserveFactorCall__Inputs {
    return new SetReserveFactorCall__Inputs(this);
  }

  get outputs(): SetReserveFactorCall__Outputs {
    return new SetReserveFactorCall__Outputs(this);
  }
}

export class SetReserveFactorCall__Inputs {
  _call: SetReserveFactorCall;

  constructor(call: SetReserveFactorCall) {
    this._call = call;
  }

  get asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get reserveFactor(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetReserveFactorCall__Outputs {
  _call: SetReserveFactorCall;

  constructor(call: SetReserveFactorCall) {
    this._call = call;
  }
}

export class SetReserveInterestRateStrategyAddressCall extends ethereum.Call {
  get inputs(): SetReserveInterestRateStrategyAddressCall__Inputs {
    return new SetReserveInterestRateStrategyAddressCall__Inputs(this);
  }

  get outputs(): SetReserveInterestRateStrategyAddressCall__Outputs {
    return new SetReserveInterestRateStrategyAddressCall__Outputs(this);
  }
}

export class SetReserveInterestRateStrategyAddressCall__Inputs {
  _call: SetReserveInterestRateStrategyAddressCall;

  constructor(call: SetReserveInterestRateStrategyAddressCall) {
    this._call = call;
  }

  get asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get rateStrategyAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class SetReserveInterestRateStrategyAddressCall__Outputs {
  _call: SetReserveInterestRateStrategyAddressCall;

  constructor(call: SetReserveInterestRateStrategyAddressCall) {
    this._call = call;
  }
}

export class UnfreezeReserveCall extends ethereum.Call {
  get inputs(): UnfreezeReserveCall__Inputs {
    return new UnfreezeReserveCall__Inputs(this);
  }

  get outputs(): UnfreezeReserveCall__Outputs {
    return new UnfreezeReserveCall__Outputs(this);
  }
}

export class UnfreezeReserveCall__Inputs {
  _call: UnfreezeReserveCall;

  constructor(call: UnfreezeReserveCall) {
    this._call = call;
  }

  get asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UnfreezeReserveCall__Outputs {
  _call: UnfreezeReserveCall;

  constructor(call: UnfreezeReserveCall) {
    this._call = call;
  }
}

export class UpdateATokenCall extends ethereum.Call {
  get inputs(): UpdateATokenCall__Inputs {
    return new UpdateATokenCall__Inputs(this);
  }

  get outputs(): UpdateATokenCall__Outputs {
    return new UpdateATokenCall__Outputs(this);
  }
}

export class UpdateATokenCall__Inputs {
  _call: UpdateATokenCall;

  constructor(call: UpdateATokenCall) {
    this._call = call;
  }

  get input(): UpdateATokenCallInputStruct {
    return changetype<UpdateATokenCallInputStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class UpdateATokenCall__Outputs {
  _call: UpdateATokenCall;

  constructor(call: UpdateATokenCall) {
    this._call = call;
  }
}

export class UpdateATokenCallInputStruct extends ethereum.Tuple {
  get asset(): Address {
    return this[0].toAddress();
  }

  get treasury(): Address {
    return this[1].toAddress();
  }

  get incentivesController(): Address {
    return this[2].toAddress();
  }

  get name(): string {
    return this[3].toString();
  }

  get symbol(): string {
    return this[4].toString();
  }

  get implementation(): Address {
    return this[5].toAddress();
  }

  get params(): Bytes {
    return this[6].toBytes();
  }
}

export class UpdateStableDebtTokenCall extends ethereum.Call {
  get inputs(): UpdateStableDebtTokenCall__Inputs {
    return new UpdateStableDebtTokenCall__Inputs(this);
  }

  get outputs(): UpdateStableDebtTokenCall__Outputs {
    return new UpdateStableDebtTokenCall__Outputs(this);
  }
}

export class UpdateStableDebtTokenCall__Inputs {
  _call: UpdateStableDebtTokenCall;

  constructor(call: UpdateStableDebtTokenCall) {
    this._call = call;
  }

  get input(): UpdateStableDebtTokenCallInputStruct {
    return changetype<UpdateStableDebtTokenCallInputStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class UpdateStableDebtTokenCall__Outputs {
  _call: UpdateStableDebtTokenCall;

  constructor(call: UpdateStableDebtTokenCall) {
    this._call = call;
  }
}

export class UpdateStableDebtTokenCallInputStruct extends ethereum.Tuple {
  get asset(): Address {
    return this[0].toAddress();
  }

  get incentivesController(): Address {
    return this[1].toAddress();
  }

  get name(): string {
    return this[2].toString();
  }

  get symbol(): string {
    return this[3].toString();
  }

  get implementation(): Address {
    return this[4].toAddress();
  }

  get params(): Bytes {
    return this[5].toBytes();
  }
}

export class UpdateVariableDebtTokenCall extends ethereum.Call {
  get inputs(): UpdateVariableDebtTokenCall__Inputs {
    return new UpdateVariableDebtTokenCall__Inputs(this);
  }

  get outputs(): UpdateVariableDebtTokenCall__Outputs {
    return new UpdateVariableDebtTokenCall__Outputs(this);
  }
}

export class UpdateVariableDebtTokenCall__Inputs {
  _call: UpdateVariableDebtTokenCall;

  constructor(call: UpdateVariableDebtTokenCall) {
    this._call = call;
  }

  get input(): UpdateVariableDebtTokenCallInputStruct {
    return changetype<UpdateVariableDebtTokenCallInputStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class UpdateVariableDebtTokenCall__Outputs {
  _call: UpdateVariableDebtTokenCall;

  constructor(call: UpdateVariableDebtTokenCall) {
    this._call = call;
  }
}

export class UpdateVariableDebtTokenCallInputStruct extends ethereum.Tuple {
  get asset(): Address {
    return this[0].toAddress();
  }

  get incentivesController(): Address {
    return this[1].toAddress();
  }

  get name(): string {
    return this[2].toString();
  }

  get symbol(): string {
    return this[3].toString();
  }

  get implementation(): Address {
    return this[4].toAddress();
  }

  get params(): Bytes {
    return this[5].toBytes();
  }
}