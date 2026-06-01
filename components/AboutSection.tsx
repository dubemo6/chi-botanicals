import styles from "./WelcomeSection.module.css";
import moreStyles from "./MoreInfoSection.module.css";
import aboutStyles from "./AboutSection.module.css";
import MeetChiSection from "./MeetChiSection";
import OurSpaceSection from "./OurSpaceSection";


const moreInfoImage: string | null = "/images/oil.png";

export default function AboutSection() {
  return (
    <>
      {/* ── 1. ABOUT ── */}
      <section className={`${styles.section} ${aboutStyles.topSpacing}`} id="about">
        <p className={styles.eyebrow}>OUR APPROACH</p>
        <p className={styles.body}>
       Chi Botanical is a modern skincare studio and community space grounded in timeless care, connection, and conscious growth. A place where time softens. Where the noise fades. Where you are invited to slow down, reconnect, and simply be. Here, skincare becomes ritual, not routine. A moment of stillness where the body unwinds, the mind quiets, and the skin begins to respond. Rooted in nature and guided by intention, every experience is designed to nurture both skin and self.        </p>
        <div className={styles.logoWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/image.png" alt="Brand logo" className={styles.logoPlaceholder} />
        </div>
      </section>

      {/* ── 2. OUR APPROACH ── */}
      <section className={moreStyles.section} id="our-approach">
        <p className={moreStyles.eyebrow}>The Meaning Behind
Chi Botanical</p>

        <div className={moreStyles.imageWrap}>
          {moreInfoImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={moreInfoImage} alt="Our approach" className={moreStyles.img} />
          ) : (
            <div className={moreStyles.placeholder}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <rect x="3" y="3" width="18" height="18" rx="1" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
              <span>Your image goes here</span>
            </div>
          )}
        </div>

        <a
          href="https://www.fresha.com/en-GB"
          target="_blank"
          rel="noreferrer"
          className={moreStyles.bookNow}
        >
          BOOK NOW
        </a>

        <p className={moreStyles.body}>
   The name Chi Botanical is deeply personal
and intentional.
“Chi” comes from my own name, Amarachi,
and my sister’s name, Chi-Chi,
representing trust, closeness, and the
kind of relationship where honesty and
care come naturally. It reflects the
space I strive to create, one where you
feel supported, understood, and safe.
In Igbo culture, where I am from in
Nigeria, “Chi” means God, a guiding
force, a sense of purpose, and spiritual
alignment. In other cultures, it
represents life force energy, the flow
that sustains balance and wellbeing.
“Botanical” was inspired by my journey of
growing my own crops, a reminder that
everything meaningful starts from the
ground up. It speaks to being rooted,
patient, and connected to nature.
Together, the name represents a
philosophy. Working in alignment with the
body, guided by truth, and grounded in

nature to create lasting, meaningful change
        </p>
      </section>

      {/* ── 3. MEET CHI ── */}
      <MeetChiSection />

      {/* ── 4. OUR SPACE ── */}
      <OurSpaceSection />
    </>
  );
}