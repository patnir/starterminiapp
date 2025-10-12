'use client';

import { sdk } from '@farcaster/miniapp-sdk';
import { useEffect } from 'react';
import { useMiniApp } from './providers/miniAppProvider';

export default function Home() {
  const { isInMiniApp, context } = useMiniApp();

  useEffect(() => {
    sdk.actions.ready();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8 sm:p-12">

        {/* HERO SECTION - CLI First */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Base Mini App Starter
          </h1>

          {/* CLI Command - Large and Centered */}
          <div className="bg-gray-900 rounded-xl p-5 sm:p-6 mb-4 shadow-xl">
            <code className="text-base sm:text-lg text-green-400 font-mono block overflow-x-auto">
              npx starterminiapp my-mini-app
            </code>
          </div>

          {/* npm Package Link with Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <a
              href="https://www.npmjs.com/package/starterminiapp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <span>📦</span>
              View on npm
            </a>
            <a
              href="https://github.com/patnir/starterminiapp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
          </div>

          {isInMiniApp && context?.user && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Welcome, @{context.user.username}!
            </div>
          )}
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
                href="https://www.npmjs.com/package/starterminiapp"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-purple-600 hover:text-purple-700 hover:underline font-medium"
              >
                📦 starterminiapp CLI →
              </a>
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
                📚 Base Mini Apps Documentation →
              </a>
              <a
                href="https://www.base.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-purple-600 hover:text-purple-700 hover:underline font-medium"
              >
                🛠️ Base Build Tools →
              </a>
              <a
                href="https://miniapps.farcaster.xyz/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-purple-600 hover:text-purple-700 hover:underline font-medium"
              >
                📖 Farcaster Mini Apps Docs →
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
