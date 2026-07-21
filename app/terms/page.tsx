import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import TermsSection from "@/components/TermsSection";

// Custom SEO metadata configured specifically for the Booking Policies and Terms page
export const metadata: Metadata = {
  title: "Terms & Conditions — Chi Botanical | Skincare Studio Mitcham, London",
  description:
    "Review the official booking policies, deposit rules, late cancellation terms, and studio guidelines for Chi Botanical skincare studio in Mitcham, South London.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Booking Policies & Terms and Conditions — Chi Botanical",
    description:
      "Understand our deposit guidelines, 48-hour cancellation policy, and late arrival frameworks. Read the full client agreement for Chi Botanical in Mitcham, London.",
    url: "https://www.chibotanical.com/terms",
  },
};

export default function TermsPage() {
  return (
    <div style={{ backgroundColor: "#f7f7f7", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar dark />
      <main style={{ flex: "1 0 auto", backgroundColor: "#f7f7f7" }}>
        <TermsSection />
      </main>
      <Footer />
    </div>
  );
}