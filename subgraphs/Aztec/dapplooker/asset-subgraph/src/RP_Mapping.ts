import {
  AssetAdded as AssetAddedEvent,
  AsyncDefiBridgeProcessed as AsyncDefiBridgeProcessedEvent,
  BridgeAdded as BridgeAddedEvent,
  DefiBridgeProcessed as DefiBridgeProcessedEvent,
  Deposit as DepositEvent,
  Initialized as InitializedEvent,
  OffchainData as OffchainDataEvent,
  RollupProcessed as RollupProcessedEvent,
  RollupProviderUpdated as RollupProviderUpdatedEvent,
  VerifierUpdated as VerifierUpdatedEvent,
  WithdrawError as WithdrawErrorEvent
} from "../generated/RP_/RP_"
import {} from "../generated/RP_/RP_"
import {
  AssetAdded as RP_AssetAddedEventSchema,
  AsyncDefiBridgeProcessed as RP_AsyncDefiBridgeProcessedEventSchema,
  BridgeAdded as RP_BridgeAddedEventSchema,
  DefiBridgeProcessed as RP_DefiBridgeProcessedEventSchema,
  Deposit as RP_DepositEventSchema,
  Initialized as RP_InitializedEventSchema,
  OffchainData as RP_OffchainDataEventSchema,
  RollupProcessed as RP_RollupProcessedEventSchema,
  RollupProviderUpdated as RP_RollupProviderUpdatedEventSchema,
  VerifierUpdated as RP_VerifierUpdatedEventSchema,
  WithdrawError as RP_WithdrawErrorEventSchema
} from "../generated/schema"
import {} from "../generated/schema"

export function handleAssetAddedEvent(event: AssetAddedEvent): void {
  let entity = new RP_AssetAddedEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.txHash = event.transaction.hash
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.valueTransferred = event.transaction.value
  entity.gasUsed = event.transaction.gasLimit
  entity.gasPrice = event.transaction.gasPrice
  entity.timestamp = event.block.timestamp
  entity.assetId = event.params.assetId
  entity.assetAddress = event.params.assetAddress
  entity.assetGasLimit = event.params.assetGasLimit
  entity.save()
}

export function handleAsyncDefiBridgeProcessedEvent(
  event: AsyncDefiBridgeProcessedEvent
): void {
  let entity = new RP_AsyncDefiBridgeProcessedEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.txHash = event.transaction.hash
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.valueTransferred = event.transaction.value
  entity.gasUsed = event.transaction.gasLimit
  entity.gasPrice = event.transaction.gasPrice
  entity.timestamp = event.block.timestamp
  entity.bridgeId = event.params.bridgeId
  entity.nonce = event.params.nonce
  entity.totalInputValue = event.params.totalInputValue
  entity.save()
}

export function handleBridgeAddedEvent(event: BridgeAddedEvent): void {
  let entity = new RP_BridgeAddedEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.txHash = event.transaction.hash
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.valueTransferred = event.transaction.value
  entity.gasUsed = event.transaction.gasLimit
  entity.gasPrice = event.transaction.gasPrice
  entity.timestamp = event.block.timestamp
  entity.bridgeAddressId = event.params.bridgeAddressId
  entity.bridgeAddress = event.params.bridgeAddress
  entity.bridgeGasLimit = event.params.bridgeGasLimit
  entity.save()
}

export function handleDefiBridgeProcessedEvent(
  event: DefiBridgeProcessedEvent
): void {
  let entity = new RP_DefiBridgeProcessedEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.txHash = event.transaction.hash
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.valueTransferred = event.transaction.value
  entity.gasUsed = event.transaction.gasLimit
  entity.gasPrice = event.transaction.gasPrice
  entity.timestamp = event.block.timestamp
  entity.bridgeId = event.params.bridgeId
  entity.nonce = event.params.nonce
  entity.totalInputValue = event.params.totalInputValue
  entity.totalOutputValueA = event.params.totalOutputValueA
  entity.totalOutputValueB = event.params.totalOutputValueB
  entity.result = event.params.result
  entity.errorReason = event.params.errorReason
  entity.save()
}

export function handleDepositEvent(event: DepositEvent): void {
  let entity = new RP_DepositEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.txHash = event.transaction.hash
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.valueTransferred = event.transaction.value
  entity.gasUsed = event.transaction.gasLimit
  entity.gasPrice = event.transaction.gasPrice
  entity.timestamp = event.block.timestamp
  entity.assetId = event.params.assetId
  entity.depositorAddress = event.params.depositorAddress
  entity.depositValue = event.params.depositValue
  entity.save()
}

export function handleInitializedEvent(event: InitializedEvent): void {
  let entity = new RP_InitializedEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.txHash = event.transaction.hash
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.valueTransferred = event.transaction.value
  entity.gasUsed = event.transaction.gasLimit
  entity.gasPrice = event.transaction.gasPrice
  entity.timestamp = event.block.timestamp
  entity.version = event.params.version
  entity.save()
}

export function handleOffchainDataEvent(event: OffchainDataEvent): void {
  let entity = new RP_OffchainDataEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.txHash = event.transaction.hash
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.valueTransferred = event.transaction.value
  entity.gasUsed = event.transaction.gasLimit
  entity.gasPrice = event.transaction.gasPrice
  entity.timestamp = event.block.timestamp
  entity.rollupId = event.params.rollupId
  entity.chunk = event.params.chunk
  entity.totalChunks = event.params.totalChunks
  entity.sender = event.params.sender
  entity.save()
}

export function handleRollupProcessedEvent(event: RollupProcessedEvent): void {
  let entity = new RP_RollupProcessedEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.txHash = event.transaction.hash
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.valueTransferred = event.transaction.value
  entity.gasLimit = event.transaction.gasLimit
  entity.gasPrice = event.transaction.gasPrice
  entity.timestamp = event.block.timestamp
  entity.rollupId = event.params.rollupId
  entity.sender = event.params.sender
  entity.gasUsed = event.receipt!.gasUsed
  entity.cumulativeGasUsed = event.receipt!.cumulativeGasUsed
  entity.save()
}

export function handleRollupProviderUpdatedEvent(
  event: RollupProviderUpdatedEvent
): void {
  let entity = new RP_RollupProviderUpdatedEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.txHash = event.transaction.hash
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.valueTransferred = event.transaction.value
  entity.gasUsed = event.transaction.gasLimit
  entity.gasPrice = event.transaction.gasPrice
  entity.timestamp = event.block.timestamp
  entity.providerAddress = event.params.providerAddress
  entity.valid = event.params.valid
  entity.save()
}

export function handleVerifierUpdatedEvent(event: VerifierUpdatedEvent): void {
  let entity = new RP_VerifierUpdatedEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.txHash = event.transaction.hash
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.valueTransferred = event.transaction.value
  entity.gasUsed = event.transaction.gasLimit
  entity.gasPrice = event.transaction.gasPrice
  entity.timestamp = event.block.timestamp
  entity.verifierAddress = event.params.verifierAddress
  entity.save()
}

export function handleWithdrawErrorEvent(event: WithdrawErrorEvent): void {
  let entity = new RP_WithdrawErrorEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.txHash = event.transaction.hash
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.valueTransferred = event.transaction.value
  entity.gasUsed = event.transaction.gasLimit
  entity.gasPrice = event.transaction.gasPrice
  entity.timestamp = event.block.timestamp
  entity.errorReason = event.params.errorReason
  entity.save()
}
