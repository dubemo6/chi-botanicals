import styles from "./WelcomeSection.module.css";
import moreStyles from "./MoreInfoSection.module.css";
import aboutStyles from "./AboutSection.module.css";

const moreInfoImage: string | null = "/images/oil.png";

export default function AboutSection() {
  return (
    <>
      {/* ── Welcome reused — ABOUT heading ── */}
      <section className={`${styles.section} ${aboutStyles.topSpacing}`} id="about">
        <p className={styles.eyebrow}>ABOUT</p>
        <p className={styles.body}>
          A modern skincare studio rooted in timeless care, connection and conscious growth.<br />
          A space to soften, reconnect, and restore through personalised rituals that honour both skin and self
        </p>
        <div className={styles.logoWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo2.png" alt="Brand logo" className={styles.logoPlaceholder} />
        </div>
      </section>

      {/* ── MoreInfo reused — OUR APPROACH heading ── */}
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
          Acium assed quo tem qui omniscienest eatur rerum harunt ex eserovit,
          oTatatur? Qui ipsae ni autebis est, untempera nulpa est ommodig endae.
          Nam facea dis perum venist, offic test ad que pe posant Dicae sit.
          Acium assed quo tem qui omniscienest eatur rerum harunt ex eserovit,
          oTatatur? Qui ipsae ni autebis est, untempera nulpa est ommodig endae.
          Nam facea dis perum venist, offic test ad que pe posant Dicae sit.
        </p>
      </section>
    </>
  );
}