'use client';

import { sdk } from '@farcaster/miniapp-sdk';
import { useEffect } from 'react';
import ConnectWallet from './components/ConnectWallet';
import { useMiniApp } from './providers/miniAppProvider';

export default function Home() {
  const { isInMiniApp, context } = useMiniApp();

  useEffect(() => {
    // Signal that the app is ready to be displayed
    sdk.actions.ready();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8 sm:p-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
            Base Mini App Starter
          </h1>
          <p className="text-lg text-gray-600">
            Your Base Mini App is ready to customize
          </p>
          {isInMiniApp && context?.user && (
            <p className="text-sm text-gray-500 mt-2">
              Welcome, @{context.user.username}!
            </p>
          )}
        </div>

        {/* Add ConnectWallet here */}
        <div className="mb-8">
          <ConnectWallet />
        </div>

        <div className="space-y-6 mb-8">
          <div className="bg-indigo-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Quick Setup Checklist
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold mt-0.5">1.</span>
                <span>
                  Update <code className="bg-white px-2 py-1 rounded text-sm font-mono">public/.well-known/farcaster.json</code> with your domain and app details
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold mt-0.5">2.</span>
                <span>
                  Replace assets in <code className="bg-white px-2 py-1 rounded text-sm font-mono">/public</code> (icon.png, splash.png, hero.png) — Use{" "}
                  <a
                    href="https://www.miniappassets.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-700 underline font-medium"
                  >
                    Mini App Asset Generator
                  </a>{" "}
                  to create them
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold mt-0.5">3.</span>
                <span>
                  Customize this page in <code className="bg-white px-2 py-1 rounded text-sm font-mono">app/page.tsx</code>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold mt-0.5">4.</span>
                <span>
                  Deploy and verify domain ownership with Base Build account association tool
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-purple-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Helpful Resources
            </h2>
            <div className="space-y-2">
              <a
                href="https://www.miniappassets.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-purple-600 hover:text-purple-700 hover:underline font-medium"
              >
                🎨 Mini App Asset Generator →
              </a>
              <a
                href="https://docs.base.org/mini-apps"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-purple-600 hover:text-purple-700 hover:underline font-medium"
              >
                Base Mini Apps Documentation →
              </a>
              <a
                href="https://www.base.dev/preview"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-purple-600 hover:text-purple-700 hover:underline font-medium"
              >
                Base Build Tools →
              </a>
              <a
                href="https://miniapps.farcaster.xyz/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-purple-600 hover:text-purple-700 hover:underline font-medium"
              >
                Farcaster Mini Apps Docs →
              </a>
              <a
                href="https://github.com/patnir/starterminiapp"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-purple-600 hover:text-purple-700 hover:underline font-medium"
              >
                GitHub Repository →
              </a>
            </div>
          </div>
        </div>

        <div className="text-center pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Created by{" "}
            <a
              href="https://github.com/patnir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-700 font-medium hover:underline"
            >
              @patnir
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
