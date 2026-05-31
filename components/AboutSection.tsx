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
        <p className={styles.eyebrow}>ABOUT</p>
        <p className={styles.body}>
          A modern skincare studio rooted in timeless care, connection and conscious growth.<br />
          A space to soften, reconnect, and restore through personalised rituals that honour both skin and self
        </p>
        <div className={styles.logoWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/image.png" alt="Brand logo" className={styles.logoPlaceholder} />
        </div>
      </section>

      {/* ── 2. OUR APPROACH ── */}
      <section className={moreStyles.section} id="our-approach">
        <p className={moreStyles.eyebrow}>OUR APPROACH</p>

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
        Chi Botanical is a modern skincare studio and
community space grounded in timeless care,
connection, and conscious growth.
A place where time softens.
Where the noise fades.
Where you are invited to slow down, reconnect, and
simply be.
Here, skincare becomes ritual, not routine.
A moment of stillness where the body unwinds, the
mind quiets, and the skin begins to respond.
Rooted in nature and guided by intention, every
experience is designed to nurture both skin and self.
        </p>
      </section>

      {/* ── 3. MEET CHI ── */}
      <MeetChiSection />

      {/* ── 4. OUR SPACE ── */}
      <OurSpaceSection />
    </>
  );
}