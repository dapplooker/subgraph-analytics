# Subgraph Analytics

This repo contains subgraphs driven analytics built using DappLooker platform. Any subgraph can be integrated to DappLooker platform for custom dashboards and analytics. Our goal is to integrate high quality subgraphs to DappLooker platform and provide analytics solution for every web3 protocol in the space.

# Contribution Guidelines
- Decide which protocol you want to build analytics for.
- Fork this repository.
- Add a folder under subgraphs with the name of the protocol you want to work on.
- Build the subgraph within that folder. Feel free to use the existing subgraph as a reference.
- Deploy the subgraph.
- Register the subgraph to DappLooker platform: https://dapplooker.com/integration/graphprotocol.
- Follow the step by step documentation to register the subgraph: https://dapplooker.notion.site/Subgraph-70f50b54aba4434e9ce114ff89aab737
- Follow the documentation to build analytics dashboard on subgraph data: https://dapplooker.notion.site/Create-Dashboards-838a621a9a494f6bace183f7b422263c
- Submit a PR (pull request) to this repo after you are done. Make sure you submit your PR as a draft if it's a work-in-progress. Include a link to your deployment and dashboard in your PR description.

# Subgraph and Dashboard

🔨 = In progress.
🛠 = Feature complete. Additional testing required.
✅ = Production-ready.

|        Project     | Subgraph     |       Dashboard          |  Status   |
| :-----------------: | :-----------: | :------------------------:|:--------:  |
| [Aztec](subgraphs/aztec-network)|[<img src="images/ethereum.ico" width="35" height="35"/>](https://thegraph.com/hosted-service/subgraph/dapplooker/aztec-connect)           |[<img src="images/ethereum.ico" width="35" height="35">](https://dapplooker.com/dapp/aztec-connect-120167?network=ethereum&category=ethereum&type=dashboard&udid=0) |   ✅    |
| [Moonbeam-XCM](subgraphs/moonbeam-xcm) |[<img src="images/moonbeam.ico" width="30" height="30">](https://thegraph.com/hosted-service/subgraph/dapplooker/moonbeam-xcm-subgraph)|[<img src="images/moonbeam.ico" width="30" height="30"/>](https://dapplooker.com/dapp/subquery-moonbeam-120116?network=subquery&category=moonbeam&type=dashboard&udid=0) | ✅ |
| [Moola-v2](subgraphs/moola-v2) |[<img src="images/ethereum.ico" width="35" height="35">](https://thegraph.com/hosted-service/subgraph/dapplooker/moola-market-v2)      |[<img src="images/ethereum.ico" width="35" height="35"/>](https://dapplooker.com/dapp/moola-v2-120062?network=celo&category=celo&type=dashboard&udid=0)  |  ✅  |
| [Paraswap](subgraphs/paraswap) |[<img src="images/ethereum.ico" width="35" height="35">](https://thegraph.com/hosted-service/subgraph/dapplooker/paraswap)              |                  |     🔨      |
| [Polygon-Bridge](subgraphs/polygon-bridge)|[<img src="images/polygon.ico" width="30" height="30">](https://thegraph.com/hosted-service/subgraph/dapplooker/pan-swap) | [<img src="images/polygon.ico" width="30" height="30"/>](https://dapplooker.com/dapp/polygon-bridge-13?network=ethereum&category=polygon&type=dashboard&udid=0)|✅ |
| [Polygon-Root-Chain](subgraphs/polygon-root-chain-manager) |[<img src="images/polygon.ico" width="30" height="30">](https://thegraph.com/hosted-service/subgraph/dapplooker/nft1)|  |    🔨    |
| [Celo-Tokens](subgraphs/celo-tokens)|[<img src="images/celo_icon.ico" width="30" height="30">](https://thegraph.com/hosted-service/subgraph/dapplooker/celo-tokens-analytics-subgraph)| [<img src="images/celo_icon.ico" width="30" height="30">](https://dapplooker.com/dapp/celo-all-tokens-120082?network=celo&category=celo&type=dashboard&udid=0) |    ✅         |
| [Celo-Attestation](subgraphs/celo-attestation) |[<img src="images/celo_icon.ico" width="30" height="30">](https://thegraph.com/hosted-service/subgraph/dapplooker/celo-attestation)| [<img src="images/celo_icon.ico" width="30" height="30">](https://dapplooker.com/dapp/celo-attestation-120131?network=celo&category=celo&type=dashboard&udid=0) |    ✅  |
| [Optics-v2](subgraphs/optics-v2)|[<img src="images/celo_icon.ico" width="30" height="30">](https://thegraph.com/hosted-service/subgraph/dapplooker/celo-optics-v2)   |[<img src="images/celo_icon.ico" width="30" height="30">](https://dapplooker.com/dapp/optics-v2-120137?network=celo&category=celo&type=dashboard&udid=0)|   ✅    |

