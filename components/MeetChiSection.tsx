import styles from "./MeetChiSection.module.css";

const meetChiImage: string | null = "/images/chi1.webp";

export default function MeetChiSection() {
  return (
    <section className={styles.section} id="meet-chi">
      <div className={styles.leftCol}>
        <p className={`${styles.eyebrow} reveal`}>MEET CHI</p>

        <a
          href="https://www.fresha.com/en-GB"
          target="_blank"
          rel="noreferrer"
          className={`${styles.bookNow} reveal reveal-delay-1`}
        >
          BOOK NOW
        </a>

        <p className={`${styles.body} reveal reveal-delay-2`}>
          Hi, I&apos;m Amarachi, the face behind Chi
          Botanical and your personal skin sister,
          seeking truth, not trends.
          My journey into skincare began with my
          own experience of hormonal acne. Through
          research, patience, and a lot of trial
          and error, I developed a deeper
          understanding of the skin, not just as
          something to treat, but something to
          truly listen to. This experience shaped
          my philosophy. Real results come from
          addressing the root, not chasing quick
          fixes.
          I went on to train as a clinical
          aesthetician, refining my skills through
          advanced education and hands-on
          experience at FaceGym, where I worked
          with over 1000 clients, from everyday
          faces to high-profile individuals. This
          gave me both the expertise and the
          confidence to create treatments that are
          deeply personalised, results-driven, and
          grounded in care.
          Today, my approach blends facial massage,
          advanced non-invasive treatments, and
          holistic techniques to support healthy,
          brighter, tighter, and deeply hydrated
          skin. More importantly, my aim is to
          empower you with knowledge, honesty, and
          the right treatments, so you can feel
          confident and connected to your skin.
        </p>
      </div>

      <div className={`${styles.imageWrap} reveal reveal-delay-1`}>
        {meetChiImage ? (
          <img src={meetChiImage} alt="Meet Chi" className={styles.img} />
        ) : (
          <div className={styles.placeholder}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <rect x="3" y="3" width="18" height="18" rx="1" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
            <span>Your image goes here</span>
          </div>
        )}
      </div>
    </section>
  );
}