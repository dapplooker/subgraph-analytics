import {BigDecimal} from "@graphprotocol/graph-ts";

export let ZERO_BD = BigDecimal.fromString("0");
export let ONE_BD = BigDecimal.fromString("1");

export let REQUESTED_ATTESTATION = "RequestedAttestation"
export let ISSUER_SELECTED = "IssuerSelected"
export let COMPLETED_ATTESTATION = "CompletedAttestation"