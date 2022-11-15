# Paraswap
> Solving Liquidity for Defi
#

# Entities and Attributes #

## Swap 
> Captures swap transactions details and attributes.
##
     id,
     initiator,
     beneficiary,
     srcToken,
     destToken,
     srcAmount,
     receivedAmount,
     expectedAmount,
     referrer,
     txHash,
     txOrigin,
     txTarget,
     txGasUsed,
     txGasPrice,
     blockHash,
     blockNumber,
     timestamp
     
     
## Fee 
> Captures fees transaction details and attributes
##
     id,
     fee,
     partnerShare,
     paraswapShare,
     txHash,
     txOrigin,
     txTarget,
     txGasUsed,
     txGasPrice,
     blockHash,
     blockNumber,
     timestamp
     
     
## User
> Captures list of users using Paraswap Dapp
##
     id,
     address,
     blockHash,
     blockNumber,
     joinTimestamp
     
     
## Token
> Captures list of tokens supported in Paraswap Dapp
##
     id,
     address,
     srcTotalAmount,
     receivedTotalAmount
     
     
## Paraswap
> Captures Paraswap Dapp aggregated details like total swaps, total users, total amounts etc
##
     id,
     totalSrcAmount,
     totalReceivedAmount,
     totalSwaps,
     totalUser


Subgraph URL: https://thegraph.com/legacy-explorer/subgraph/dapplooker/paraswap
