import { useState } from 'react'
import { useAccount, useDisconnect } from 'wagmi'

export function Account() {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()
  const [copied, setCopied] = useState(false)

  const copyAddress = async () => {
    if (address) {
      await navigator.clipboard.writeText(address)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-sm">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="space-y-2 w-full">
          <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Connected Wallet</p>
          {address && (
            <div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200">
              <p className="text-sm font-mono text-gray-900">
                {address.slice(0, 6)}...{address.slice(-4)}
              </p>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-2 w-full">
          <button
            onClick={copyAddress}
            className="w-full px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-lg transition-colors duration-200 border-2 border-gray-300 hover:border-gray-400"
          >
            {copied ? '✓ Copied!' : 'Copy Address'}
          </button>

          <button
            onClick={() => disconnect()}
            className="w-full px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-lg transition-colors duration-200 border-2 border-gray-300 hover:border-gray-400"
          >
            Disconnect
          </button>
        </div>
      </div>
    </div>
  )
}