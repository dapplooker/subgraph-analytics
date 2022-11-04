import {
  MetaTransactionExecuted as MetaTransactionExecutedEvent,
  PredicateRegistered as PredicateRegisteredEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  TokenMapped as TokenMappedEvent
} from "../generated/RCM_/RCM_"
import {} from "../generated/RCM_/RCM_"
import {
  RCM_MetaTransactionExecutedEvent as RCM_MetaTransactionExecutedEventSchema,
  RCM_PredicateRegisteredEvent as RCM_PredicateRegisteredEventSchema,
  RCM_RoleAdminChangedEvent as RCM_RoleAdminChangedEventSchema,
  RCM_RoleGrantedEvent as RCM_RoleGrantedEventSchema,
  RCM_RoleRevokedEvent as RCM_RoleRevokedEventSchema,
  RCM_TokenMappedEvent as RCM_TokenMappedEventSchema
} from "../generated/schema"
import {} from "../generated/schema"

export function handleMetaTransactionExecutedEvent(
  event: MetaTransactionExecutedEvent
): void {
  let entity = new RCM_MetaTransactionExecutedEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.txHash = event.transaction.hash
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.valueTransferred = event.transaction.value
  entity.gasUsed = event.transaction.gasUsed
  entity.gasPrice = event.transaction.gasPrice
  entity.blockTimestamp = event.block.timestamp
  entity.userAddress = event.params.userAddress
  entity.relayerAddress = event.params.relayerAddress
  entity.functionSignature = event.params.functionSignature
  entity.save()
}

export function handlePredicateRegisteredEvent(
  event: PredicateRegisteredEvent
): void {
  let entity = new RCM_PredicateRegisteredEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.txHash = event.transaction.hash
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.valueTransferred = event.transaction.value
  entity.gasUsed = event.transaction.gasUsed
  entity.gasPrice = event.transaction.gasPrice
  entity.blockTimestamp = event.block.timestamp
  entity.tokenType = event.params.tokenType
  entity.predicateAddress = event.params.predicateAddress
  entity.save()
}

export function handleRoleAdminChangedEvent(
  event: RoleAdminChangedEvent
): void {
  let entity = new RCM_RoleAdminChangedEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.txHash = event.transaction.hash
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.valueTransferred = event.transaction.value
  entity.gasUsed = event.transaction.gasUsed
  entity.gasPrice = event.transaction.gasPrice
  entity.blockTimestamp = event.block.timestamp
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole
  entity.save()
}

export function handleRoleGrantedEvent(event: RoleGrantedEvent): void {
  let entity = new RCM_RoleGrantedEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.txHash = event.transaction.hash
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.valueTransferred = event.transaction.value
  entity.gasUsed = event.transaction.gasUsed
  entity.gasPrice = event.transaction.gasPrice
  entity.blockTimestamp = event.block.timestamp
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender
  entity.save()
}

export function handleRoleRevokedEvent(event: RoleRevokedEvent): void {
  let entity = new RCM_RoleRevokedEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.txHash = event.transaction.hash
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.valueTransferred = event.transaction.value
  entity.gasUsed = event.transaction.gasUsed
  entity.gasPrice = event.transaction.gasPrice
  entity.blockTimestamp = event.block.timestamp
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender
  entity.save()
}

export function handleTokenMappedEvent(event: TokenMappedEvent): void {
  let entity = new RCM_TokenMappedEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.txHash = event.transaction.hash
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.valueTransferred = event.transaction.value
  entity.gasUsed = event.transaction.gasUsed
  entity.gasPrice = event.transaction.gasPrice
  entity.blockTimestamp = event.block.timestamp
  entity.rootToken = event.params.rootToken
  entity.childToken = event.params.childToken
  entity.tokenType = event.params.tokenType
  entity.save()
}
