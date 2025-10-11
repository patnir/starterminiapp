import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { WalletIndicator } from "./components/WalletIndicator";
import "./globals.css";
import { Providers } from "./providers";
import { ErudaProvider } from "./providers/erudaProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Base Mini App Starter",
  description: "A simple starter template for building Base Mini Apps",
  metadataBase: new URL('https://starterminiapp.com'),
  openGraph: {
    title: "Base Mini App Starter",
    description: "Clone and customize this template to build your Base Mini App",
    url: "https://starterminiapp.com",
    siteName: "Base Mini App Starter",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Base Mini App Starter"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Base Mini App Starter",
    description: "Clone and customize this template to build your Base Mini App",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <WalletIndicator />
          {children}
        </Providers>
      </body>
    </html>
  );
}
