import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
        {children}
      </body>
    </html>
  );
}
