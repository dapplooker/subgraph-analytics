import { log } from "@graphprotocol/graph-ts";
import {
  AttestationCompleted as AttestationCompletedEvent,
  AttestationIssuerSelected as AttestationIssuerSelectedEvent,
  AttestationRequestFeeSet as AttestationRequestFeeSetEvent,
  AttestationsRequested as AttestationsRequestedEvent,
  SelectIssuersWaitBlocksSet as SelectIssuersWaitBlocksSetEvent,
  Withdrawal as WithdrawalEvent,
  AttestationsTransferred as AttestationsTransferredEvent,
  TransferApproval as TransferApprovalEvent
} from "../generated/Attestation/Attestation"
import {} from "../generated/Attestation/Attestation"
import {
  CompletedAttestation as AttestationAttestationCompletedEventSchema,
  UniqueCompletedAttestion,
  IssuerSelected as AttestationAttestationIssuerSelectedEventSchema,
  AttestationFee as AttestationAttestationRequestFeeSetEventSchema,
  RequestedAttestation as AttestationAttestationsRequestedEventSchema,
  IssuersWaitBlock as AttestationSelectIssuersWaitBlocksSetEventSchema,
  Withdrawal as AttestationWithdrawalEventSchema,
  AttestationsTransferred as AttestationAttestationsTransferredEventSchema,
  TransferApproval as AttestationTransferApprovalEventSchema
} from "../generated/schema"
import {} from "../generated/schema"
import {updateDayData} from "./dayData";
import {COMPLETED_ATTESTATION, ISSUER_SELECTED, REQUESTED_ATTESTATION} from "./constants";

export function handleAttestationCompletedEvent(
  event: AttestationCompletedEvent
): void {
  log.info("Attestation completed event: Entity address {}", [event.transaction.hash.toHex()]);
  let entity = new AttestationAttestationCompletedEventSchema(event.transaction.hash.toHex() + "-" + event.logIndex.toString())
  let uniqueEntity = new UniqueCompletedAttestion(event.params.identifier.toHexString().toLowerCase() + "-" + event.params.account.toHexString().toLowerCase())
  entity.txHash = event.transaction.hash
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.valueTransferred = event.transaction.value
  entity.gasUsed = event.transaction.gasLimit
  entity.gasPrice = event.transaction.gasPrice
  entity.blockTimestamp = event.block.timestamp
  entity.pk = (event.params.identifier.toHexString().toLowerCase() + "-" + event.params.account.toHexString().toLowerCase())
  entity.identifier = event.params.identifier
  entity.account = event.params.account
  entity.issuer = event.params.issuer

  if (UniqueCompletedAttestion.load(entity.pk) === null) {
    log.info("New attestation completed event: {}", [entity.pk]);
    updateDayData(COMPLETED_ATTESTATION, event.transaction.gasPrice.times(event.transaction.gasLimit).toBigDecimal(), entity.blockTimestamp)
  }else{
    log.info("Got processed attestation completed event: {}", [entity.pk]);
  }
  entity.save()
  uniqueEntity.save()
}

export function handleAttestationIssuerSelectedEvent(
  event: AttestationIssuerSelectedEvent
): void {
  log.info("Attestation issuer selected: Entity address {}", [event.transaction.hash.toHex()]);
  let entity = new AttestationAttestationIssuerSelectedEventSchema(event.transaction.hash.toHex() + "-" + event.logIndex.toString())
  entity.txHash = event.transaction.hash
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.valueTransferred = event.transaction.value
  entity.gasUsed = event.transaction.gasLimit
  entity.gasPrice = event.transaction.gasPrice
  entity.blockTimestamp = event.block.timestamp
  entity.pk = (event.params.identifier.toHexString().toLowerCase() + "-" + event.params.account.toHexString().toLowerCase())
  entity.identifier = event.params.identifier
  entity.account = event.params.account
  entity.issuer = event.params.issuer
  entity.attestationRequestFeeToken = event.params.attestationRequestFeeToken

  updateDayData(ISSUER_SELECTED, event.transaction.gasPrice.times(event.transaction.gasLimit).toBigDecimal(), entity.blockTimestamp)
  entity.save()
}

export function handleAttestationRequestFeeSetEvent(
  event: AttestationRequestFeeSetEvent
): void {
  log.info("Attestation request fee set: Entity address {}", [event.transaction.hash.toHex()]);
  let entity = new AttestationAttestationRequestFeeSetEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.txHash = event.transaction.hash
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.valueTransferred = event.transaction.value
  entity.gasUsed = event.transaction.gasLimit
  entity.gasPrice = event.transaction.gasPrice
  entity.blockTimestamp = event.block.timestamp
  entity.token = event.params.token
  entity.value = event.params.value
  entity.save()
}

export function handleAttestationsRequestedEvent(
  event: AttestationsRequestedEvent
): void {
  log.info("Attestation requested: Entity address {}", [event.transaction.hash.toHex()]);
  let entity = new AttestationAttestationsRequestedEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.txHash = event.transaction.hash
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.valueTransferred = event.transaction.value
  entity.gasUsed = event.transaction.gasLimit
  entity.gasPrice = event.transaction.gasPrice
  entity.blockTimestamp = event.block.timestamp
  entity.pk = (event.params.identifier.toHexString().toLowerCase() + "-" + event.params.account.toHexString().toLowerCase())
  entity.identifier = event.params.identifier
  entity.account = event.params.account
  entity.attestationsRequested = event.params.attestationsRequested
  entity.attestationRequestFeeToken = event.params.attestationRequestFeeToken

  updateDayData(REQUESTED_ATTESTATION, event.transaction.gasPrice.times(event.transaction.gasLimit).toBigDecimal(), entity.blockTimestamp)
  entity.save()
}

export function handleSelectIssuersWaitBlocksSetEvent(
  event: SelectIssuersWaitBlocksSetEvent
): void {
  log.info("Attestation issuer wait block set: Entity address {}", [event.transaction.hash.toHex()]);
  let entity = new AttestationSelectIssuersWaitBlocksSetEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.txHash = event.transaction.hash
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.valueTransferred = event.transaction.value
  entity.gasUsed = event.transaction.gasLimit
  entity.gasPrice = event.transaction.gasPrice
  entity.blockTimestamp = event.block.timestamp
  entity.value = event.params.value
  entity.save()
}

export function handleWithdrawalEvent(event: WithdrawalEvent): void {
  let entity = new AttestationWithdrawalEventSchema(
      event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.txHash = event.transaction.hash
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.valueTransferred = event.transaction.value
  entity.gasUsed = event.transaction.gasLimit
  entity.gasPrice = event.transaction.gasPrice
  entity.blockTimestamp = event.block.timestamp
  entity.account = event.params.account
  entity.token = event.params.token
  entity.amount = event.params.amount
  entity.save()
}

export function handleAttestationsTransferredEvent(
    event: AttestationsTransferredEvent
): void {
  let entity = new AttestationAttestationsTransferredEventSchema(
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
  entity.fromAccount = event.params.fromAccount
  entity.toAccount = event.params.toAccount
  entity.save()
}

export function handleTransferApprovalEvent(
    event: TransferApprovalEvent
): void {
  let entity = new AttestationTransferApprovalEventSchema(
      event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.txHash = event.transaction.hash
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.valueTransferred = event.transaction.value
  entity.gasUsed = event.transaction.gasLimit
  entity.gasPrice = event.transaction.gasPrice
  entity.blockTimestamp = event.block.timestamp
  entity.approver = event.params.approver
  entity.indentifier = event.params.indentifier
  entity.from = event.params.from
  entity.to = event.params.to
  entity.approved = event.params.approved
  entity.save()
}

