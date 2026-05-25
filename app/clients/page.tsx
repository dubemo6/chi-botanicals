import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientCareSection from "@/components/ClientCareSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Care — Chi Botanical | Facial Studio London",
  description:
    "Client care information for Chi Botanical skincare studio in Mitcham, South London. Aftercare advice, booking policies, and everything you need to know before your treatment.",
  alternates: {
    canonical: "/clients",
  },
  openGraph: {
    title: "Client Care — Chi Botanical London",
    description:
      "Everything you need before and after your treatment at Chi Botanical, Mitcham, South London.",
    url: "https://www.chibotanical.com/clients",
  },
};

export default function ClientCarePage() {
  return (
    <>
      <Navbar />
      <ClientCareSection />
      <Footer />
    </>
  );
}