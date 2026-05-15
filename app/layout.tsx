import type { Metadata } from "next";

import { IM_Fell_English, DM_Sans, Xanh_Mono } from "next/font/google"; 
import "./globals.css";

const imFellEnglish = IM_Fell_English({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-fell",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["300", "400"],
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});


const xanhMono = Xanh_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-xanh", 
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chi Botanical — Skin, At The Root.",
  description:
    "A luxury skin care studio committed to restoring your skin from the root. Plant-based botanicals meets evidence-driven treatments.",
  openGraph: {
    title: "Chi Botanical",
    description: "Skin, at the root.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <html lang="en" className={`${imFellEnglish.variable} ${dmSans.variable} ${xanhMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}