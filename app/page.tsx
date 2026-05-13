import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import TreatmentsPreview from "@/components/TreatmentsPreview";
import SwitchingSection from "@/components/SwitchingSection";
import MoreInfoSection from "@/components/MoreInfoSection";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";

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
        <TestimonialSection />
      </main>
      <Footer />
    </>
  );
}