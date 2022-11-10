import {
  LockedERC20 as LockedERC20Event,
} from "../generated/ERC20/ERC20"
import {
  ExitTokensCall,
  LockTokensCall
  
} from "../generated/ERC20/ERC20"
import {
  LockedERC20Event as LockedERC20EventSchema
  
} from "../generated/schema"
import {
  ExitTokensCall as ExitTokensCallSchema,
  LockTokensCall as LockTokensCallSchema
 
} from "../generated/schema"

export function handleLockedERC20Event(event: LockedERC20Event): void {
  let entity = new LockedERC20EventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.txHash = event.transaction.hash
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.valueTransferred = event.transaction.value
  entity.gasUsed = event.receipt!.gasUsed
  entity.gasPrice = event.transaction.gasPrice
  entity.blockTimestamp = event.block.timestamp
  entity.depositor = event.params.depositor
  entity.depositReceiver = event.params.depositReceiver
  entity.rootToken = event.params.rootToken
  entity.amount = event.params.amount
  entity.save()
}




export function handleexitTokensCall(call: ExitTokensCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ExitTokensCallSchema(id)
  entity.txHash = call.transaction.hash
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.valueTransferred = call.transaction.value
  entity.gasUsed = call.transaction.gasLimit
  entity.gasPrice = call.transaction.gasPrice
  entity.blockTimestamp = call.block.timestamp
  entity.value0 = call.inputs.value0
  entity.rootToken = call.inputs.rootToken
  entity.log = call.inputs.log
  entity.save()
}




export function handlelockTokensCall(call: LockTokensCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new LockTokensCallSchema(id)
  entity.txHash = call.transaction.hash
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.valueTransferred = call.transaction.value
  entity.gasUsed = call.transaction.gasLimit
  entity.gasPrice = call.transaction.gasPrice
  entity.blockTimestamp = call.block.timestamp
  entity.depositor = call.inputs.depositor
  entity.depositReceiver = call.inputs.depositReceiver
  entity.rootToken = call.inputs.rootToken
  entity.depositData = call.inputs.depositData
  entity.save()
}


