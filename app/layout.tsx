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
  title: "メルカリ・Amazon・ラクマ利益計算ツール【無料】送料・手数料を自動計算",
  description:
    "メルカリ・Amazon・ラクマ販売で使える無料利益計算ツール。販売価格、仕入れ価格、送料、手数料から最終利益と利益率を自動計算できます。",
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
