import Navbar from "@/components/Navbar";
import TreatmentsPreview from "@/components/TreatmentsPreview";
import AddOnsSection from "@/components/AddOnsSection";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

// Import the clean modular styles
import styles from "@/components/TreatmentsIntro.module.css";

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
    canonical: "https://www.chibotanical.com",
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
        {/* Intro Branding Section */}
        <section className={styles.introSection}>
          <p className={`${styles.label} reveal`}>
            Skin at the root.
          </p>
          <p className={`${styles.bodyText} reveal`}>
            A curated menu of personalised treatments designed to restore balance, 
            refine the skin, and support long-term skin health. Each ritual blends 
            advanced techniques with intentional touch, working in harmony with 
            the skin and body.
          </p>
        </section>
        
        {/* Treatment Display Previews */}
        <TreatmentsPreview showConsultation />
        
        {/* Enhancement Blocks */}
        <AddOnsSection />

        {/* Pre-Appointment Guidelines Section */}
        <section className={styles.prepSection}>
          <div className={styles.prepGrid}>
            
            {/* Left Column: Guidelines Panel with Reveal Observer hook link */}
            <div className={`${styles.prepLeft} reveal`}>
              <h2 className={styles.prepHeader}>Before Your Appointment</h2>
              <p className={styles.prepSubheader}>For best results, please avoid:</p>
              
              <ul className={styles.prepList}>
                <li className={styles.prepItem}>Botox within 2 weeks</li>
                <li className={styles.prepItem}>Fillers within 4 weeks</li>
                <li className={styles.prepItem}>Retinol or active exfoliants within 2 weeks</li>
                <li className={styles.prepItem}>Recent peels or microneedling within 2 weeks</li>
              </ul>
              
              <p className={styles.prepFooterText}>
                Arrive with clean skin where possible and allow time to settle before your treatment.
              </p>
            </div>

            {/* Right Column: Interaction CTA Block with Reveal Observer hook link */}
            <div className={`${styles.prepRight} reveal`}>
              <h3 className={styles.ctaTitle}>Not sure where to begin?</h3>
              <p className={styles.ctaBody}>
                Start with a personalized skin consultation or book our signature Lift &amp; Release Facial to kickstart your journey.
              </p>
              
              {/* Updated Link: Now targets a blank new tab cleanly */}
              <a 
                href="https://www.fresha.com/en-GB" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.ctaBtn}
              >
                Book your ritual
              </a>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}