import dynamic from 'next/dynamic';
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

// Dynamically import heavy sections
const WelcomeSection = dynamic(() => import("@/components/WelcomeSection"));
const TreatmentsPreview = dynamic(() => import("@/components/TreatmentsPreview"));
const SwitchingSection = dynamic(() => import("@/components/SwitchingSection"));
const MoreInfoSection = dynamic(() => import("@/components/MoreInfoSection"));
const TestimonialSection = dynamic(() => import("@/components/TestimonialSection"));
const CollaborateSection = dynamic(() => import("@/components/CollaborateSection"));

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WelcomeSection />
        <TreatmentsPreview />
        <SwitchingSection />
        <MoreInfoSection />
        <CollaborateSection />
        <TestimonialSection />
      </main>
      <Footer />
    </>
  );
}