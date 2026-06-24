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
 title: "利益計算ツール【無料】メルカリ・Amazon対応",
description:
  "メルカリ・Amazon・ラクマ販売で利益はいくら残るか無料で自動計算。送料・販売手数料・仕入れ価格を入力するだけで最終利益を確認できます。",
keywords: [
  "利益計算",
  "メルカリ利益計算",
  "Amazon利益計算",
  "ラクマ利益計算",
  "せどり",
  "副業",
],
  verification: {
    google: "miCxwdbgRhGe66W37cjiBB0MFNO1tB2WJxh9Dm_zTjc",
  },
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
  <head>
    <script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7726060769550218"
      crossOrigin="anonymous"
    ></script>
  </head>

  <body className="min-h-full flex flex-col">{children}</body>
</html>
  );
}
