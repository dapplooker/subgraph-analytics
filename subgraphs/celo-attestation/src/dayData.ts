/* eslint-disable prefer-const */
import {
    BigDecimal,
    BigInt, log
} from "@graphprotocol/graph-ts";
import {AttestationDayData} from "../generated/schema";
import {COMPLETED_ATTESTATION, ONE_BD, REQUESTED_ATTESTATION, ZERO_BD} from "./constants";


export function updateDayData(eventType: string, gasConsumed: BigDecimal, updateTimestamp: BigInt): void {
    log.info("Event type: {}", [eventType]);
    let timestamp = updateTimestamp.toI32();
    let dayID = timestamp / 86400;
    let dayStartTimestamp = dayID * 86400;
    // @ts-ignore
    let dayDataID = dayStartTimestamp.toString()

    let attestationDayData = AttestationDayData.load(dayDataID);
    if (attestationDayData === null) {
        attestationDayData = new AttestationDayData(dayDataID);
        attestationDayData.dayTimestamp = dayStartTimestamp;
        attestationDayData.attestationCompletedGasConsumed = ZERO_BD;
        attestationDayData.attestationRequestedGasConsumed = ZERO_BD;
        attestationDayData.attestationRequestedCount = ZERO_BD;
        attestationDayData.attestationCompletedCount = ZERO_BD;
        attestationDayData.attestationIssuerSelectedCount = ZERO_BD;
    }

    attestationDayData.lastUpdatedTimestamp = updateTimestamp
    if (eventType === REQUESTED_ATTESTATION) {
        log.info("Incrementing requested attestation by {} for day {}", [ONE_BD.toString(), dayDataID]);
        attestationDayData.attestationRequestedCount = attestationDayData.attestationRequestedCount.plus(ONE_BD)
        attestationDayData.attestationRequestedGasConsumed = attestationDayData.attestationRequestedGasConsumed.plus(gasConsumed)
    } else if(eventType === COMPLETED_ATTESTATION){
        log.info("Incrementing completed attestation by {} for day {}", [ONE_BD.toString(), dayDataID]);
        attestationDayData.attestationCompletedCount = attestationDayData.attestationCompletedCount.plus(ONE_BD)
        attestationDayData.attestationCompletedGasConsumed = attestationDayData.attestationCompletedGasConsumed.plus(gasConsumed)
    } else {
        log.info("Incrementing issuer selected by {} for day {}", [ONE_BD.toString(), dayDataID]);
        attestationDayData.attestationIssuerSelectedCount = attestationDayData.attestationIssuerSelectedCount.plus(ONE_BD)
        attestationDayData.attestationIssuerSelectedGasConsumed = attestationDayData.attestationIssuerSelectedGasConsumed.plus(gasConsumed)
    }

    attestationDayData.save();
}
