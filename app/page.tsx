import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import TreatmentsPreview from "@/components/TreatmentsPreview";
import SwitchingSection from "@/components/SwitchingSection";
import MoreInfoSection from "@/components/MoreInfoSection";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";
import PromoSection from "@/components/CollaborateSection";
import CollaborateSection from "@/components/CollaborateSection";

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
      <CollaborateSection/>
        <TestimonialSection />

      </main>
      <Footer />
    </>
  );
}