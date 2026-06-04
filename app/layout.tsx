import type { Metadata } from "next";
import { IM_Fell_English, DM_Sans, Xanh_Mono } from "next/font/google";
import "./globals.css";
import ChatWidget from "@/components/ChatWidget";
import RevealObserver from "@/components/RevealObserver";
import { Analytics } from "@vercel/analytics/next";

const imFellEnglish = IM_Fell_English({
  weight: "400", style: ["normal", "italic"], subsets: ["latin"],
  variable: "--font-fell", display: "swap", adjustFontFallback: false,
});
const dmSans = DM_Sans({
  weight: ["300", "400"], subsets: ["latin"],
  variable: "--font-dm", display: "swap", adjustFontFallback: false,
});
const xanhMono = Xanh_Mono({
  weight: "400", subsets: ["latin"],
  variable: "--font-xanh", display: "swap", adjustFontFallback: false,
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CHI Botanical",
  "url": "https://www.chibotanical.com",
  "logo": "https://www.chibotanical.com/images/life.webp",
  "sameAs": [
    "https://www.instagram.com/chibotanical"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "info@chibotanical.com"
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${imFellEnglish.variable} ${dmSans.variable} ${xanhMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body>
        <main>{children}</main>
        <RevealObserver />
        <Analytics />
        <ChatWidget />
      </body>
    </html>
  );
}