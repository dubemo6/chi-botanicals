import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CommunityHero from "@/components/CommunityHero";
import FutureWorkshops from "@/components/FutureWorkshops";
import ImageBanner from "@/components/ImageBanner";
import JoinWaitlist from "@/components/JoinWaitlist";
import styles from "@/components/CommunityPage.module.css";
import StudioPartners from "@/components/StudioPartnership";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community — Chi Botanical | Skincare Studio London",
  description:
    "Chi Botanical is more than a skincare studio — it is a space for beauty, ritual, education and restoration. Join the community.",
  alternates: {
    canonical: "https://www.chibotanical.com",
  },
};

export default function CommunityPage() {
  return (
    <>
      <Navbar dark />
      <main>

        {/* ── 1. MODULAR FULL BACKGROUND COVER HERO ── */}
        <CommunityHero />

        {/* ── 2. WHY COMMUNITY MAIN BLOCK ── */}
        <section className={styles.why} id="why">
          <div className={`${styles.whyImageWrap} reveal`}>
            <img src="/images/face2.webp" alt="Community" className={styles.whyImage} />
          </div>

          <div className={`${styles.whyContent} reveal`}>
            <p className={styles.whyLabel}>WHY COMMUNITY MATTERS</p>
            <h2 className={styles.whyTitle}>Why Skincare &amp; Community</h2>

            <div className={styles.whyBody}>
              <div className={styles.whyCol}>
                <p>
                  At Chi Botanical, skincare is approached as a ritual
                  rather than a routine.
                </p>
                <p>
                  A moment to soften.<br />
                  A moment to reconnect.<br />
                  A moment to return to yourself.
                </p>
              </div>
              <div className={styles.whyCol}>
                <p>
                  Through working closely with clients,
                  one thing became increasingly clear:
                  modern life is leaving people feeling
                  disconnected from both their bodies
                  and wellbeing.
                </p>
                <p>
                  Stress, tension and overstimulation
                  do not only affect how we feel —
                  they often reveal themselves
                  through the skin.
                </p>
              </div>
            </div>

            <hr className={styles.whyRule} />
            <p className={styles.whyClosing}>
              Chi Botanical exists to create space for restoration.<br />
              Where skin health, education and intentional wellbeing come together.
            </p>
          </div>
        </section>

        {/* ── 3. CORE DESIGN PILLARS GRID ── */}
        <section className={styles.pillars}>
          <div className={`${styles.pillar} reveal`}>
            <div className={styles.pillarIcon}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22V12" /><path d="M12 12C12 7 7 4 3 6" /><path d="M12 12C12 7 17 4 21 6" /><path d="M3 6c0 4 3 7 9 6" /><path d="M21 6c0 4-3 7-9 6" />
              </svg>
            </div>
            <p className={styles.pillarName}>Ritual</p>
            <p className={styles.pillarDesc}>Skincare as a moment of intentional care, not a chore.</p>
          </div>

          <div className={styles.pillarDivider} />

          <div className={`${styles.pillar} reveal`}>
            <div className={styles.pillarIcon}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="9" rx="1" /><rect x="14" y="3" width="7" height="5" rx="1" /><rect x="14" y="12" width="7" height="9" rx="1" /><rect x="3" y="16" width="7" height="5" rx="1" />
              </svg>
            </div>
            <p className={styles.pillarName}>Education</p>
            <p className={styles.pillarDesc}>Understanding your skin so you can make informed choices.</p>
          </div>

          <div className={styles.pillarDivider} />

          <div className={`${styles.pillar} reveal`}>
            <div className={styles.pillarIcon}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="7" r="3" /><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /><path d="M21 21v-2a4 4 0 0 0-3-3.87" />
              </svg>
            </div>
            <p className={styles.pillarName}>Community</p>
            <p className={styles.pillarDesc}>A shared space to grow, restore and feel supported.</p>
          </div>
        </section>

        {/* ── 4. WORKSHOPS VIEW ── */}
        <FutureWorkshops />

        {/* ── 5. DEEP BANNER ── */}
        <ImageBanner src="/images/faces7.webp" alt="Chi Botanical philosophy texture display" />

        {/* ── 6. SYNCED DUAL TEMPLATE FOOTER WAITLIST ── */}
        <JoinWaitlist />
        <StudioPartners />
      </main>
      <Footer />
    </>
  );
}