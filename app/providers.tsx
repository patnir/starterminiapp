'use client';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { WagmiProvider } from "wagmi";
import { config } from "./config";
import { MiniAppIndicator } from "./providers/miniAppIndicator";
import { MiniAppProvider } from "./providers/miniAppProvider";

const queryClient = new QueryClient();

export function Providers({ children }: { children: ReactNode }) {
  return (
    <MiniAppProvider>
      <MiniAppIndicator />
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </WagmiProvider>
    </MiniAppProvider>
  );
}
