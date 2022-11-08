# Celo Attestation Subgraph
The Attestation Service is part of the Celo identity protocol. It sends SMS on behalf of users to allow them to attest to having access to a phone number and to map that to a Celo account, securely and privately. 

## Deployment

To be able to deploy the subgraph in you need to change the endpoint ```Github/Subgraph-Name``` and add the access token in ```package.json```. then run the below commands. 
```bash
npm run codegen
# build the subgraph 
npm run build 
# deploy the subgraph
npm run deploy 
```

## Subgraph  #
Subgraph URL: https://thegraph.com/hosted-service/subgraph/dapplooker/celo-attestation
