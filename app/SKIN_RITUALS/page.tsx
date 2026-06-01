import Navbar from "@/components/Navbar";
import TreatmentsPreview from "@/components/TreatmentsPreview";
import AddOnsSection from "@/components/AddOnsSection";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Facials & Skin Treatments London — Chi Botanical | Mitcham, CR4",
  description:
    "Book a bespoke facial in London at Chi Botanical, Mitcham. Treatments include the Lift & Release Facial, Glow & Flow Facial, Collagen Renewal Ritual, and luxury add-ons. Serving clients across London.",
  keywords: [
    "facial treatments London",
    "lift and release facial London",
    "glow facial London",
    "microneedling Mitcham",
    "collagen facial South London",
    "buccal massage London",
    "facial cupping London",
    "book facial London",
  ],
  alternates: {
    canonical: "/treatments",
  },
  openGraph: {
    title: "Facial & Skin Treatments — Chi Botanical London",
    description:
      "Bespoke facials and advanced skin treatments in Mitcham, South London. Lift & Release, Glow & Flow, Collagen Renewal and more.",
    url: "https://www.chibotanical.com/treatments",
  },
};

export default function TreatmentsPage() {
  return (
    <>
      <Navbar dark />
      <main>
        <section style={{
          background: "#f5f2ee",
          padding: "6rem 4rem 3rem",
          fontFamily: "var(--font-mono), 'Courier New', monospace",
          color: "#1a1a18",
        }}>
          <p style={{
            fontSize: "1rem",
            lineHeight: "1.3",
            marginBottom: "3rem",
            letterSpacing: "0.25em",
            textAlign: "center",
            textTransform: "uppercase",
          }}>
            Skin, at the root.
          </p>
          <p style={{
            fontSize: "1.7rem",
            lineHeight: "1.9",
            width: "100%",
            maxWidth: "100%",
            textAlign: "left",
            textIndent: "8rem",
            margin: "0 0 2rem",
            letterSpacing: "0.03em",
          }}>
            A curated menu of personalised treatments designed to restore balance, refine the skin, and support long-term skin health. Each ritual blends advanced techniques with intentional touch, working in harmony with the skin and body.
          </p>
        </section>
        <TreatmentsPreview showConsultation />
        <AddOnsSection />
      </main>
      <Footer />
    </>
  );
}