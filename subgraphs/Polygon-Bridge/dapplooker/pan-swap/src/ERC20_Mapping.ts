import {
  LockedERC20 as LockedERC20Event,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent
} from "../generated/ERC20_/ERC20_"
import {
  ExitTokensCall,
  GrantRoleCall,
  InitializeCall,
  LockTokensCall,
  RenounceRoleCall,
  RevokeRoleCall
} from "../generated/ERC20_/ERC20_"
import {
  ERC20_LockedERC20Event as ERC20_LockedERC20EventSchema,
  ERC20_RoleAdminChangedEvent as ERC20_RoleAdminChangedEventSchema,
  ERC20_RoleGrantedEvent as ERC20_RoleGrantedEventSchema,
  ERC20_RoleRevokedEvent as ERC20_RoleRevokedEventSchema
} from "../generated/schema"
import {
  ERC20_exitTokensCall as ERC20_exitTokensCallSchema,
  ERC20_grantRoleCall as ERC20_grantRoleCallSchema,
  ERC20_initializeCall as ERC20_initializeCallSchema,
  ERC20_lockTokensCall as ERC20_lockTokensCallSchema,
  ERC20_renounceRoleCall as ERC20_renounceRoleCallSchema,
  ERC20_revokeRoleCall as ERC20_revokeRoleCallSchema
} from "../generated/schema"

export function handleLockedERC20Event(event: LockedERC20Event): void {
  let entity = new ERC20_LockedERC20EventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.txHash = event.transaction.hash
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.valueTransferred = event.transaction.value
  entity.gasUsed = event.transaction.gasUsed
  entity.gasPrice = event.transaction.gasPrice
  entity.blockTimestamp = event.block.timestamp
  entity.depositor = event.params.depositor
  entity.depositReceiver = event.params.depositReceiver
  entity.rootToken = event.params.rootToken
  entity.amount = event.params.amount
  entity.save()
}

export function handleRoleAdminChangedEvent(
  event: RoleAdminChangedEvent
): void {
  let entity = new ERC20_RoleAdminChangedEventSchema(
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
  let entity = new ERC20_RoleGrantedEventSchema(
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
  let entity = new ERC20_RoleRevokedEventSchema(
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

export function handleexitTokensCall(call: ExitTokensCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ERC20_exitTokensCallSchema(id)
  entity.txHash = call.transaction.hash
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.valueTransferred = call.transaction.value
  entity.gasUsed = call.transaction.gasUsed
  entity.gasPrice = call.transaction.gasPrice
  entity.blockTimestamp = call.block.timestamp
  entity.value0 = call.inputs.value0
  entity.rootToken = call.inputs.rootToken
  entity.log = call.inputs.log
  entity.save()
}

export function handlegrantRoleCall(call: GrantRoleCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ERC20_grantRoleCallSchema(id)
  entity.txHash = call.transaction.hash
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.valueTransferred = call.transaction.value
  entity.gasUsed = call.transaction.gasUsed
  entity.gasPrice = call.transaction.gasPrice
  entity.blockTimestamp = call.block.timestamp
  entity.role = call.inputs.role
  entity.account = call.inputs.account
  entity.save()
}

export function handleinitializeCall(call: InitializeCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ERC20_initializeCallSchema(id)
  entity.txHash = call.transaction.hash
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.valueTransferred = call.transaction.value
  entity.gasUsed = call.transaction.gasUsed
  entity.gasPrice = call.transaction.gasPrice
  entity.blockTimestamp = call.block.timestamp
  entity._owner = call.inputs._owner
  entity.save()
}

export function handlelockTokensCall(call: LockTokensCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ERC20_lockTokensCallSchema(id)
  entity.txHash = call.transaction.hash
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.valueTransferred = call.transaction.value
  entity.gasUsed = call.transaction.gasUsed
  entity.gasPrice = call.transaction.gasPrice
  entity.blockTimestamp = call.block.timestamp
  entity.depositor = call.inputs.depositor
  entity.depositReceiver = call.inputs.depositReceiver
  entity.rootToken = call.inputs.rootToken
  entity.depositData = call.inputs.depositData
  entity.save()
}

export function handlerenounceRoleCall(call: RenounceRoleCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ERC20_renounceRoleCallSchema(id)
  entity.txHash = call.transaction.hash
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.valueTransferred = call.transaction.value
  entity.gasUsed = call.transaction.gasUsed
  entity.gasPrice = call.transaction.gasPrice
  entity.blockTimestamp = call.block.timestamp
  entity.role = call.inputs.role
  entity.account = call.inputs.account
  entity.save()
}

export function handlerevokeRoleCall(call: RevokeRoleCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ERC20_revokeRoleCallSchema(id)
  entity.txHash = call.transaction.hash
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.valueTransferred = call.transaction.value
  entity.gasUsed = call.transaction.gasUsed
  entity.gasPrice = call.transaction.gasPrice
  entity.blockTimestamp = call.block.timestamp
  entity.role = call.inputs.role
  entity.account = call.inputs.account
  entity.save()
}
