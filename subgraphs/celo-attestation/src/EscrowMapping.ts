import {
  Revocation as RevocationEvent,
  Transfer as TransferEvent,
  Withdrawal as WithdrawalEvent
} from "../generated/Escrow/Escrow"
import {} from "../generated/Escrow/Escrow"
import {
  EscrowRevocationEvent as EscrowRevocationEventSchema,
  EscrowTransferEvent as EscrowTransferEventSchema,
  EscrowWithdrawalEvent as EscrowWithdrawalEventSchema
} from "../generated/schema"
import {} from "../generated/schema"


export function handleRevocationEvent(event: RevocationEvent): void {
  let entity = new EscrowRevocationEventSchema(
      event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.txHash = event.transaction.hash
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.valueTransferred = event.transaction.value
  entity.gasUsed = event.transaction.gasLimit
  entity.gasPrice = event.transaction.gasPrice
  entity.blockTimestamp = event.block.timestamp
  entity.identifier = event.params.identifier
  entity.by = event.params.by
  entity.token = event.params.token
  entity.value = event.params.value
  entity.paymentId = event.params.paymentId
  entity.save()
}

export function handleTransferEvent(event: TransferEvent): void {
  let entity = new EscrowTransferEventSchema(
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
  entity.identifier = event.params.identifier
  entity.token = event.params.token
  entity.value = event.params.value
  entity.paymentId = event.params.paymentId
  entity.minAttestations = event.params.minAttestations
  entity.save()
}

export function handleWithdrawalEvent(event: WithdrawalEvent): void {
  let entity = new EscrowWithdrawalEventSchema(
      event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.txHash = event.transaction.hash
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.valueTransferred = event.transaction.value
  entity.gasUsed = event.transaction.gasLimit
  entity.gasPrice = event.transaction.gasPrice
  entity.blockTimestamp = event.block.timestamp
  entity.identifier = event.params.identifier
  entity.to = event.params.to
  entity.token = event.params.token
  entity.value = event.params.value
  entity.paymentId = event.params.paymentId
  entity.save()
}
