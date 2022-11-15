import {
  AccountWalletAddressSet as AccountWalletAddressSetEvent
} from "../generated/Accounts/Accounts"
import {} from "../generated/Accounts/Accounts"
import {
  AccountWalletAddressSetEvent as AccountsAccountWalletAddressSetEventSchema
} from "../generated/schema"
import {} from "../generated/schema"

export function handleAccountWalletAddressSetEvent(
    event: AccountWalletAddressSetEvent
): void {
  let entity = new AccountsAccountWalletAddressSetEventSchema(
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
  entity.walletAddress = event.params.walletAddress
  entity.save()
}
