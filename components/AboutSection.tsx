import styles from "./WelcomeSection.module.css";
import moreStyles from "./MoreInfoSection.module.css";
import aboutStyles from "./AboutSection.module.css";
import MeetChiSection from "./MeetChiSection";
import OurSpaceSection from "./OurSpaceSection";

const moreInfoImage: string | null = "/images/oil.webp";

export default function AboutSection() {
  return (
    <>
      <section className={`${styles.section} ${aboutStyles.topSpacing}`} id="about">
        <p className={`${styles.eyebrow} reveal`}>OUR APPROACH</p>
        <p className={`${styles.body} reveal reveal-delay-1`}>
          Chi Botanical is a modern skincare studio and community space grounded in timeless care,
          connection, and conscious growth. A place where time softens. Where the noise fades.
          Where you are invited to slow down, reconnect, and simply be. Here, skincare becomes
          ritual, not routine. A moment of stillness where the body unwinds, the mind quiets, and
          the skin begins to respond. Rooted in nature and guided by intention, every experience is
          designed to nurture both skin and self.
        </p>
        <div className={`${styles.logoWrap} reveal reveal-delay-2`}>
          <img src="/images/image.webp" alt="Brand logo" className={styles.logoPlaceholder} />
        </div>
      </section>

      <section className={moreStyles.section} id="our-approach">
        <p className={`${moreStyles.eyebrow} reveal`}>The Meaning Behind Chi Botanical</p>

        <div className={`${moreStyles.imageWrap} reveal reveal-delay-1`}>
          {moreInfoImage ? (
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
          className={`${moreStyles.bookNow} reveal reveal-delay-2`}
        >
          BOOK NOW
        </a>

        <p className={`${moreStyles.body} reveal reveal-delay-3`}>
          The name Chi Botanical is deeply personal and intentional.
          &ldquo;Chi&rdquo; comes from my own name, Amarachi, and my sister&apos;s name, Chi-Chi,
          representing trust, closeness, and the kind of relationship where honesty and care come
          naturally. It reflects the space I strive to create, one where you feel supported,
          understood, and safe. In Igbo culture, where I am from in Nigeria, &ldquo;Chi&rdquo; means
          God, a guiding force, a sense of purpose, and spiritual alignment. In other cultures, it
          represents life force energy, the flow that sustains balance and wellbeing.
          &ldquo;Botanical&rdquo; was inspired by my journey of growing my own crops, a reminder that
          everything meaningful starts from the ground up. It speaks to being rooted, patient, and
          connected to nature. Together, the name represents a philosophy. Working in alignment with
          the body, guided by truth, and grounded in nature to create lasting, meaningful change.
        </p>
      </section>

      <MeetChiSection />
      <OurSpaceSection />
    </>
  );
}