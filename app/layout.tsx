import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { WalletIndicator } from "./components/WalletIndicator";
import "./globals.css";
import { Providers } from "./providers";
import { ErudaProvider } from "./providers/erudaProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Base Mini App Starter - npx starterminiapp",
  description: "Bootstrap your Base Mini App in seconds with npx starterminiapp. Zero-config CLI for Farcaster Mini Apps with Next.js, TypeScript, Wagmi, and Base integration.",
  metadataBase: new URL('https://starterminiapp.com'),
  keywords: ["base", "farcaster", "mini app", "nextjs", "starter", "template", "cli", "npm", "npx", "starterminiapp"],
  openGraph: {
    title: "Base Mini App Starter - npx starterminiapp",
    description: "Bootstrap your Base Mini App in one command: npx starterminiapp my-app. Ready-to-deploy template for Farcaster with Base integration.",
    url: "https://starterminiapp.com",
    siteName: "Base Mini App Starter",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Base Mini App Starter - npx starterminiapp"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Base Mini App Starter - npx starterminiapp",
    description: "Bootstrap your Base Mini App in one command: npx starterminiapp my-app",
    images: ["/hero.png"]
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png"
  },
  other: {
    "fc:miniapp": JSON.stringify({
      version: "1",
      imageUrl: "https://starterminiapp.com/hero.png",
      button: {
        title: "Open App",
        action: {
          type: "launch_miniapp",
          url: "https://starterminiapp.com",
          name: "Base Mini App Starter",
          splashImageUrl: "https://starterminiapp.com/splash.png",
          splashBackgroundColor: "#000000"
        }
      }
    })
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ErudaProvider />
      </head>
      <body
        className={`${inter.variable} antialiased`}
      >
        <Providers>
          <WalletIndicator />
          {children}
        </Providers>
      </body>
    </html>
  );
}
