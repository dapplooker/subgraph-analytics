import { BigInt } from "@graphprotocol/graph-ts"
import { erc20, Approval, Transfer } from "../generated/erc20/erc20"
import { TransferEntity } from "../generated/schema"

export function handleTransfer(event: Transfer): void {
  let entity = new TransferEntity(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.txHash = event.transaction.hash
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.valueTransferred = event.transaction.value
  entity.gasUsed = event.transaction.gasLimit
  entity.gasPrice = event.transaction.gasPrice
  entity.blockTimestamp = event.block.timestamp
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value
  entity.save()
}
