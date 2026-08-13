import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WelcomeSection from "@/components/WelcomeSection";
import FutureWorkshops from "@/components/FutureWorkshops";
import JoinWaitlist from "@/components/JoinWaitlist";
import StudioPartners from "@/components/StudioPartnership";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community — Chi Botanical | Skincare Studio London",
  description:
    "Chi Botanical is more than a skincare studio — it is a space for beauty, ritual, education and restoration. Join the community.",
  alternates: {
    canonical: "https://www.chibotanical.com/CommunityPage",
  },
};

export default function CommunityPage() {
  return (
    <>
      <Navbar dark />
      <main>

        {/* ── 1. WELCOME ── */}
        <WelcomeSection
          eyebrow="BEAUTY,RITUAL,EDUCATION AND RESTORATION."
          body={
            <>
              In a fast-paced world, we have lost the art of slowing down. Chi
              Botanical was created as more than a skincare studio — but as a
              space to reconnect through skin, ritual and intentional wellbeing.
              A return to slower beauty, intentional care and meaningful
              connection.
            </>
          }
        />

        {/* ── 2. WHY COMMUNITY MATTERS ── */}
        <section className="why-section">
          <style>{`
            .why-section {
              background-color: #F7F7F7;
              width: 100%;
              position: relative;
              left: 50%;
              right: 50%;
              margin-left: -50vw;
              margin-right: -50vw;
              box-sizing: border-box;
            }

            .why-container {
              max-width: 1280px;
              margin: 0 auto;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-areas:
                "image"
                "text"
                "pillars";
              gap: 3rem;
              padding: 2rem 1.5rem 4rem;
            }

            .why-image-wrap {
              grid-area: image;
              width: 80%;
            }

            .why-image {
              width: 100%;
              display: block;
              object-fit: cover;
              aspect-ratio: 4 / 5;
            }

            .why-text {
              grid-area: text;
              padding: 0 0.5rem;
              font-family: var(--font-mono), monospace;
              color: #2b2a28;
            }

            .why-label {
              font-size: 0.9rem;
              letter-spacing: 0.15em;
              color: #1a1917;
              margin: 0 0 3rem 0;
            }

            .why-body p {
              font-size: 0.9rem;
              line-height: 1.75;
              text-align: left;
              margin: 0 0 1.5rem 0;
            }

            .why-pillars {
              grid-area: pillars;
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 4rem;
              padding: 0 1.5rem;
            }

            .why-pillar {
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
              max-width: 320px;
            }

            .why-dot {
              width: 14px;
              height: 14px;
              border-radius: 50%;
              background-color: #1a1917;
              margin-bottom: 1.2rem;
              flex-shrink: 0;
            }

            .why-pillar-name {
              font-family: var(--font-mono), monospace;
              font-size: 0.85rem;
              letter-spacing: 0.08em;
              color: #1a1917;
              margin: 0 0 0.5rem 0;
            }

            .why-pillar-desc {
              font-family: var(--font-mono), monospace;
              font-size: 0.85rem;
              line-height: 1.5;
              color: #2b2a28;
              margin: 0;
            }

            @media (min-width: 1024px) {
              .why-container {
                grid-template-columns: 42% 1fr;
                grid-template-areas:
                  "image text"
                  "pillars pillars";
                gap: 0 3rem;
                padding: 4rem 3rem 2rem;
              }

              .why-image-wrap {
                width: 100%;
                height: auto;
              }

              .why-image {
                width: 100%;
                height: auto;
                aspect-ratio: 4 / 5;
                object-fit: cover;
              }

              .why-text {
                padding: 0;
                display: flex;
                flex-direction: column;
                justify-content: center;
              }

              .why-label {
                margin-bottom: 4.5rem;
              }

              .why-body p {
                font-size: 1rem;
                line-height: 1.85;
              }

              .why-pillars {
                flex-direction: row;
                justify-content: space-between; /* Spreads them out to the edges */
                align-items: flex-start;
                gap: 2rem;
                padding: 4rem 1rem 0 1rem; /* Reduced left padding so 'RITUAL' shifts left */
              }

              .why-pillar {
                flex-direction: row;
                align-items: flex-start;
                text-align: left;
                gap: 1rem;
                max-width: 340px;
              }

              .why-dot {
                margin-bottom: 0;
                margin-top: 0.4rem;
              }
            }
          `}</style>

          <div className="why-container">
            <div className="why-image-wrap reveal">
              <img src="/images/face2.webp" alt="Community" className="why-image" />
            </div>

            <div className="why-text reveal">
              <p className="why-label">WHY COMMUNITY MATTERS</p>
              <div className="why-body">
                <p>
                  At Chi Botanical, skincare is approached as a ritual
                  rather than a routine. A moment to soften. A moment to
                  reconnect. A moment to return to yourself.
                </p>
                <p>
                  Through working closely with clients, one thing became
                  increasingly clear: modern life is leaving people feeling
                  disconnected from both their bodies and wellbeing.
                </p>
                <p>
                  Stress, tension and overstimulation do not only affect how
                  we feel — they often reveal themselves through the skin.
                  Chi Botanical exists to create space for restoration.
                  Where skin health, education and intentional wellbeing
                  come together.
                </p>
              </div>
            </div>

            <div className="why-pillars reveal">
              {[
                { name: "RITUAL", desc: "Skincare as a moment of intentional care, not a chore." },
                { name: "EDUCATION", desc: "Understanding your skin so you can make informed choices." },
                { name: "COMMUNITY", desc: "A shared space to grow, restore and feel supported." },
              ].map((pillar) => (
                <div key={pillar.name} className="why-pillar">
                  <span className="why-dot" />
                  <div>
                    <p className="why-pillar-name">{pillar.name}</p>
                    <p className="why-pillar-desc">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. WORKSHOPS ── */}
        <FutureWorkshops />

        {/* ── 5. WAITLIST + PARTNERSHIP ── */}
        <JoinWaitlist />
        <StudioPartners />
      </main>
      <Footer />
    </>
  );
}