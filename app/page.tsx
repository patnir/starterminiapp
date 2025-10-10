export default function Home() {
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
                  Replace assets in <code className="bg-white px-2 py-1 rounded text-sm font-mono">/public</code> (icon.png, splash.png, hero.png)
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
            Built with Next.js 15 • Ready to deploy on Vercel
          </p>
        </div>
      </div>
    </div>
  );
}
