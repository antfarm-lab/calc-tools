import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "メルカリ・ラクマ利益計算ツール｜販売利益・利益率を自動計算",
  description:
    "メルカリ・ラクマの販売価格、仕入れ価格、送料から利益と利益率をすぐに計算できる無料ツールです。フリマ出品前の損益確認に使えます。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
  lang="ja"
  className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}

    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
