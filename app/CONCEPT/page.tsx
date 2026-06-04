import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Chi Botanical | Skincare Studio Mitcham, London",
  description:
    "Learn about Chi Botanical — a modern skincare studio in Mitcham, South London. Meet founder Amarachi and discover our approach to skin health, rooted in nature and guided by intention.",
   alternates: {
    canonical: "https://www.chibotanical.com/Concept",
  },
  openGraph: {
    title: "About Chi Botanical — Skincare Studio in South London",
    description:
      "Meet the face behind Chi Botanical and learn our approach to bespoke skincare in Mitcham, London.",
    url: "https://www.chibotanical.com/Concept",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar dark />
      <main>
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}