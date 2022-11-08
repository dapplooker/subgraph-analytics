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
} from "../generated/abi/abi"
import {} from "../generated/abi/abi"
import {
  AssetAdded as abiAssetAddedEventSchema,
  AsyncDefiBridgeProcessed as abiAsyncDefiBridgeProcessedEventSchema,
  BridgeAdded as abiBridgeAddedEventSchema,
  DefiBridgeProcessed as abiDefiBridgeProcessedEventSchema,
  Deposit as abiDepositEventSchema,
  Initialized as abiInitializedEventSchema,
  OffchainData as abiOffchainDataEventSchema,
  RollupProcessed as abiRollupProcessedEventSchema,
  RollupProviderUpdated as abiRollupProviderUpdatedEventSchema,
  VerifierUpdated as abiVerifierUpdatedEventSchema,
  WithdrawError as abiWithdrawErrorEventSchema
} from "../generated/schema"
import {} from "../generated/schema"

export function handleAssetAddedEvent(event: AssetAddedEvent): void {
  let entity = new abiAssetAddedEventSchema(
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
  let entity = new abiAsyncDefiBridgeProcessedEventSchema(
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
  let entity = new abiBridgeAddedEventSchema(
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
  let entity = new abiDefiBridgeProcessedEventSchema(
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
  let entity = new abiDepositEventSchema(
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
  let entity = new abiInitializedEventSchema(
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
  let entity = new abiOffchainDataEventSchema(
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
  let entity = new abiRollupProcessedEventSchema(
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
  let entity = new abiRollupProviderUpdatedEventSchema(
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
  let entity = new abiVerifierUpdatedEventSchema(
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
  let entity = new abiWithdrawErrorEventSchema(
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
