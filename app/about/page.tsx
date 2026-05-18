import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About — Chi Botanical",
  description: "Learn about Chi Botanical, our approach to skincare, and what makes us different.",
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