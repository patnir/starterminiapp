'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';

interface MiniAppContextValue {
  isInMiniApp: boolean | null;
  context: any | null;
  isLoading: boolean;
}

const MiniAppContext = createContext<MiniAppContextValue | undefined>(undefined);

export function MiniAppProvider({ children }: { children: ReactNode }) {
  const [isInMiniApp, setIsInMiniApp] = useState<boolean | null>(null);
  const [context, setContext] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initMiniApp = async () => {
      try {
        const status = await sdk.isInMiniApp();
        setIsInMiniApp(status);

        const context = await sdk.context;
        if (!context.client.added) {
          try {
            await sdk.actions.addMiniApp();
          } catch (error) {
            // eslint-disable-next-line no-console
            console.error('Error prompting to add mini app:', error);
          }
        }

        if (status) {
          const miniAppContext = await sdk.context;
          setContext(miniAppContext);
        }
      } catch (error) {
        console.error('Error initializing mini app:', error);
        setIsInMiniApp(false);
      } finally {
        setIsLoading(false);
      }
    };

    initMiniApp();
  }, []);

  return (
    <MiniAppContext.Provider value={{ isInMiniApp, context, isLoading }}>
      {children}
    </MiniAppContext.Provider>
  );
}

export function useMiniApp() {
  const context = useContext(MiniAppContext);
  if (context === undefined) {
    throw new Error('useMiniApp must be used within a MiniAppProvider');
  }
  return context;
}

