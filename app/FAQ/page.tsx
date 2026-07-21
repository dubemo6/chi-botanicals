import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import FaqSection from "@/components/FaqSection";

// This is your accurate, custom SEO metadata configured specifically for the FAQ page
export const metadata: Metadata = {
  title: "FAQs — Chi Botanical | Skincare Studio Mitcham, London",
  description:
    "Find answers to frequently asked questions about Chi Botanical skincare studio in Mitcham, South London. Learn about our treatments, booking details, and cancellation policies.",
  alternates: {
    canonical: "https://www.chibotanical.com/FAQ",
  },
  openGraph: {
    title: "Frequently Asked Questions — Chi Botanical",
    description:
      "Have questions about treatments, studio age requirements, or booking guidelines? Find everything you need to know about Chi Botanical in Mitcham, London here.",
    url: "https://www.chibotanical.com/FAQ",
  },
};

export default function FAQPage() {
  return (
    /* This inline style forces the background to be #f7f7f7 from the absolute top to bottom */
    <div style={{ backgroundColor: "#f7f7f7", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar dark/>
      <main style={{ flex: "1 0 auto", backgroundColor: "#f7f7f7" }}>
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}