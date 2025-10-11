import { useConnect } from 'wagmi'

export function WalletOptions() {
  const { connectors, connect } = useConnect()

  // Only show injected wallet
  const injectedConnector = connectors.find((connector) => connector.id === 'injected')

  if (!injectedConnector) {
    return (
      <div className="text-center py-4 text-gray-500">
        No wallet detected. Please install a Web3 wallet.
      </div>
    )
  }

  return (
    <div className="space-y-3">
      <div className="text-center mb-4">
      </div>

      <button
        onClick={() => connect({ connector: injectedConnector })}
        className="w-full px-6 py-4 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-lg transition-all duration-200 border-2 border-gray-200 hover:border-indigo-500 shadow-sm hover:shadow-md"
      >
        <span>Connect Wallet</span>
      </button>
    </div>
  )
}