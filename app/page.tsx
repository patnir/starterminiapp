'use client';

import { sdk } from '@farcaster/miniapp-sdk';
import { useEffect } from 'react';
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
          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            Base Mini App Starter
          </h1>
          <p className="text-sm text-gray-600 mb-4">
            Build your Base Mini App in seconds
          </p>
          {isInMiniApp && context?.user && (
            <p className="text-sm text-gray-500 mt-2">
              Welcome, @{context.user.username}!
            </p>
          )}
        </div>

        {/* CLI Quick Start */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 mb-6 border border-indigo-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <span>⚡</span> Quick Start
          </h2>
          <p className="text-sm text-gray-600 mb-3">
            Bootstrap your own mini app with one command:
          </p>
          <div className="bg-gray-900 rounded-lg p-4 mb-3">
            <code className="text-sm text-green-400 font-mono">
              npx starterminiapp my-mini-app
            </code>
          </div>
          <div className="flex gap-3 text-xs">
            <a
              href="https://www.npmjs.com/package/starterminiapp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-700 underline font-medium"
            >
              📦 npm package
            </a>
            <a
              href="https://github.com/patnir/starterminiapp-cli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-700 underline font-medium"
            >
              🔧 CLI source
            </a>
          </div>
        </div>

        <div className="space-y-6 mb-8">
          <div className="bg-indigo-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Setup Checklist
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
                  Deploy, sign your manifest, register your app using{" "}
                  <a
                    href="https://www.base.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-700 underline font-medium"
                  >
                    Base Build
                  </a>
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
