import { useAccount } from "wagmi"
import { Account } from "../utils/account"
import { WalletOptions } from "../utils/wallet-options"

export default function ConnectWallet() {
  const { isConnected } = useAccount()

  return (
    <div className="w-full">
      {isConnected ? <Account /> : <WalletOptions />}
    </div>
  )
}