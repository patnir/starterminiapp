'use client';

import { useMiniApp } from './miniAppProvider';

export function MiniAppIndicator() {
  const { isInMiniApp, isLoading } = useMiniApp();

  // Don't render anything until we've checked
  if (isLoading || isInMiniApp === null) {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <div
        className={`px-3 py-1.5 rounded-full text-xs font-medium shadow-lg flex items-center gap-2 ${
          isInMiniApp
            ? 'bg-green-100 text-green-800 border border-green-300'
            : 'bg-gray-100 text-gray-600 border border-gray-300'
        }`}
      >
        <span
          className={`w-2 h-2 rounded-full ${
            isInMiniApp ? 'bg-green-500' : 'bg-gray-400'
          }`}
        />
        {isInMiniApp ? 'Mini App' : 'Web'}
      </div>
    </div>
  );
}

