import {
  ExchangeProviderAdded as ExchangeProviderAddedEvent,
  ExchangeProviderRemoved as ExchangeProviderRemovedEvent,
  ReserveSet as ReserveSetEvent,
  Swap as SwapEvent,
  TradingLimitConfigured as TradingLimitConfiguredEvent
} from "../generated/C_/C_"
import {} from "../generated/C_/C_"
import {
  C_ExchangeProviderAddedEvent as C_ExchangeProviderAddedEventSchema,
  C_ExchangeProviderRemovedEvent as C_ExchangeProviderRemovedEventSchema,
  C_ReserveSetEvent as C_ReserveSetEventSchema,
  C_SwapEvent as C_SwapEventSchema,
  C_TradingLimitConfiguredEvent as C_TradingLimitConfiguredEventSchema
} from "../generated/schema"
import {} from "../generated/schema"

export function handleExchangeProviderAddedEvent(
  event: ExchangeProviderAddedEvent
): void {
  let entity = new C_ExchangeProviderAddedEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.txHash = event.transaction.hash
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.valueTransferred = event.transaction.value
  entity.gasLimit = event.transaction.gasLimit
  entity.gasPrice = event.transaction.gasPrice
  entity.blockTimestamp = event.block.timestamp
  entity.exchangeProvider = event.params.exchangeProvider
  entity.save()
}

export function handleExchangeProviderRemovedEvent(
  event: ExchangeProviderRemovedEvent
): void {
  let entity = new C_ExchangeProviderRemovedEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.txHash = event.transaction.hash
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.valueTransferred = event.transaction.value
  entity.gasLimit = event.transaction.gasLimit
  entity.gasPrice = event.transaction.gasPrice
  entity.blockTimestamp = event.block.timestamp
  entity.exchangeProvider = event.params.exchangeProvider
  entity.save()
}

export function handleReserveSetEvent(event: ReserveSetEvent): void {
  let entity = new C_ReserveSetEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.txHash = event.transaction.hash
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.valueTransferred = event.transaction.value
  entity.gasLimit = event.transaction.gasLimit
  entity.gasPrice = event.transaction.gasPrice
  entity.blockTimestamp = event.block.timestamp
  entity.newAddress = event.params.newAddress
  entity.prevAddress = event.params.prevAddress
  entity.save()
}

export function handleSwapEvent(event: SwapEvent): void {
  let entity = new C_SwapEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.txHash = event.transaction.hash
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.valueTransferred = event.transaction.value
  entity.gasLimit = event.transaction.gasLimit
  entity.gasPrice = event.transaction.gasPrice
  entity.blockTimestamp = event.block.timestamp
  entity.exchangeProvider = event.params.exchangeProvider
  entity.exchangeId = event.params.exchangeId
  entity.trader = event.params.trader
  entity.tokenIn = event.params.tokenIn
  entity.tokenOut = event.params.tokenOut
  entity.amountIn = event.params.amountIn
  entity.amountOut = event.params.amountOut
  entity.save()
}

export function handleTradingLimitConfiguredEvent(
  event: TradingLimitConfiguredEvent
): void {
  let entity = new C_TradingLimitConfiguredEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.txHash = event.transaction.hash
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.valueTransferred = event.transaction.value
  entity.gasLimit = event.transaction.gasLimit
  entity.gasPrice = event.transaction.gasPrice
  entity.blockTimestamp = event.block.timestamp
  entity.exchangeId = event.params.exchangeId
  entity.token = event.params.token
  entity.config_timestep0 = event.params.config.timestep0
  entity.config_timestep1 = event.params.config.timestep1
  entity.config_limit0 = event.params.config.limit0
  entity.config_limit1 = event.params.config.limit1
  entity.config_limitGlobal = event.params.config.limitGlobal
  entity.config_flags = event.params.config.flags
  entity.save()
}
