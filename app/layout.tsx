import type { Metadata } from "next";
import { IM_Fell_English, DM_Sans, Xanh_Mono } from "next/font/google";
import "./globals.css";
import ChatWidget from "@/components/ChatWidget";
import { Analytics } from "@vercel/analytics/next";

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
  title: {
    default: "Chi Botanical — Luxury Facial & Skincare Studio | Mitcham, London",
    template: "%s | Chi Botanical London",
  },
  description:
    "Chi Botanical is a luxury skincare studio in Mitcham, South London. Bespoke facials, sculpting massage, microneedling and holistic skin treatments. Serving clients across London. Book now.",
  keywords: [
    "facial London",
    "skincare studio London",
    "bespoke facial Mitcham",
    "facial massage London",
    "microneedling London",
    "holistic facial South London",
    "lift and release facial",
    "glow facial London",
    "Chi Botanical",
    "skin treatment Mitcham",
    "luxury facial CR4",
    "aesthetician London",
  ],
  authors: [{ name: "Chi Botanical" }],
  creator: "Chi Botanical",
  metadataBase: new URL("https://www.chibotanical.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Chi Botanical — Luxury Facial & Skincare Studio in London",
    description:
      "Bespoke facials, sculpting massage and advanced skin treatments in Mitcham, South London. Skin, at the root.",
    url: "https://www.chibotanical.com",
    siteName: "Chi Botanical",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chi Botanical — Luxury Facial Studio London",
    description:
      "Bespoke facials and skin treatments in Mitcham, South London. Book your ritual today.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Chi Botanical",
  url: "https://www.chibotanical.com",
  logo: "https://www.chibotanical.com/images/logo.png",
  image: "https://www.chibotanical.com/images/logo.png",
  description:
    "A modern skincare studio in South London offering bespoke facials, sculpting massage, microneedling, and holistic skin treatments rooted in nature and guided by intention.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "45 Tamworth Park",
    addressLocality: "Mitcham",
    addressRegion: "London",
    postalCode: "CR4 1HZ",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.4017,
    longitude: -0.1721,
  },
  areaServed: [
    { "@type": "City", name: "London" },
    { "@type": "Place", name: "South London" },
    { "@type": "Place", name: "Mitcham" },
    { "@type": "Place", name: "Wimbledon" },
    { "@type": "Place", name: "Tooting" },
    { "@type": "Place", name: "Streatham" },
    { "@type": "Place", name: "Croydon" },
    { "@type": "Place", name: "Balham" },
  ],
  hasMap: "https://maps.google.com/?q=45+Tamworth+Park+Mitcham+CR4+1HZ",
  priceRange: "££",
  currenciesAccepted: "GBP",
  paymentAccepted: "Cash, Credit Card, Debit Card",
  email: "info@chibotanical.com",
  sameAs: ["https://instagram.com/chibotanical"],
  makesOffer: [
    {
      "@type": "Offer",
      name: "Lift & Release Facial",
      description:
        "An express sculpting and tension-release treatment focusing on facial massage, steam, and relaxation.",
    },
    {
      "@type": "Offer",
      name: "Glow & Flow Facial",
      description:
        "Refresh and rejuvenate with dermaplaning, hydrofacial, and soothing facial massage.",
    },
    {
      "@type": "Offer",
      name: "Collagen Renewal Ritual",
      description:
        "Results-driven treatment combining microneedling and LED light therapy.",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-GB"
      className={`${imFellEnglish.variable} ${dmSans.variable} ${xanhMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}
         <ChatWidget />
          <Analytics />
      </body>
    </html>
  );
}