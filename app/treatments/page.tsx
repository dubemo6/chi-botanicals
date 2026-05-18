import Navbar from "@/components/Navbar";
import TreatmentsPreview from "@/components/TreatmentsPreview";
import AddOnsSection from "@/components/AddOnsSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Treatments — Chi Botanical",
  description: "Explore our full range of treatments and add-ons at Chi Botanical.",
};

export default function TreatmentsPage() {
  return (
    <>
      {/* White navbar — no dark prop, small brand */}
      <Navbar dark/>
      <main>
        {/* TreatmentsPreview with consultation note visible */}
        <TreatmentsPreview showConsultation />
        {/* Add-Ons section */}
        <AddOnsSection />
      </main>
      <Footer />
    </>
  );
}