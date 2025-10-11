'use client';

import { useEffect, useRef, useState } from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';

export function WalletIndicator() {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { connectors, connect } = useConnect();
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const injectedConnector = connectors.find((connector) => connector.id === 'injected');

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const copyAddress = async () => {
    if (address) {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setIsOpen(false);
      }, 1500);
    }
  };

  const handleDisconnect = () => {
    disconnect();
    setIsOpen(false);
  };

  if (!isConnected) {
    // Show connect button
    return (
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={() => injectedConnector && connect({ connector: injectedConnector })}
          className="px-3 py-1.5 rounded-full text-xs font-medium shadow-lg flex items-center gap-2 bg-gray-100 text-gray-600 border border-gray-300 hover:bg-gray-200 transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-gray-400" />
          Connect Wallet
        </button>
      </div>
    );
  }

  return (
    <div className="fixed top-4 left-4 z-50" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 py-1.5 rounded-full text-xs font-medium shadow-lg flex items-center gap-2 bg-indigo-100 text-indigo-800 border border-indigo-300 hover:bg-indigo-200 transition-colors"
      >
        <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
        <span className="font-mono">
          {address?.slice(0, 4)}...{address?.slice(-3)}
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1.5 w-full bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
          <button
            onClick={copyAddress}
            className="w-full px-3 py-2 text-left text-xs text-gray-700 hover:bg-gray-50 transition-colors"
          >
            {copied ? (
              <>
                <span className="text-green-500">✓</span> Copied!
              </>
            ) : (
              'Copy Address'
            )}
          </button>
          <button
            onClick={handleDisconnect}
            className="w-full px-3 py-2 text-left text-xs text-red-600 hover:bg-red-50 transition-colors border-t border-gray-100"
          >
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
}
