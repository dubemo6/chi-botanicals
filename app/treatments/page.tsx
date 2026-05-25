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
        <TreatmentsPreview showConsultation />
        <AddOnsSection />
      </main>
      <Footer />
    </>
  );
}