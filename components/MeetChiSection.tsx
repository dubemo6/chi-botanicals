import styles from "./MeetChiSection.module.css";

// const meetChiImage: string | null = "/images/chi.png";
const meetChiImage: string | null = "/images/chi.png";
export default function MeetChiSection() {
  return (
    <section className={styles.section} id="about">

      <p className={styles.eyebrow}>MEET CHI</p>

      <div className={styles.imageWrap}>
        {meetChiImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={meetChiImage} alt="Meet Chi" className={styles.img} />
        ) : (
          <div className={styles.placeholder}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <rect x="3" y="3" width="18" height="18" rx="1" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
          </div>
        )}
      </div>

      <a
        href="https://www.fresha.com/en-GB"
        target="_blank"
        rel="noreferrer"
        className={styles.bookNow}
      >
        BOOK NOW
      </a>

      <p className={styles.body}>
        Acium assed quo tem qui omniscienest eatur rerum harunt ex eserovit,
        oTatatur? Qui ipsae ni autebis est, untempera nulpa est ommodig endae.
        Nam facea dis perum venist, offic test ad que pe posant Dicae sit.
        Acium assed quo tem qui omniscienest eatur rerum harunt ex eserovit,
        oTatatur? Qui ipsae ni autebis est, untempera nulpa est ommodig endae.
        Nam facea dis perum venist, offic test ad que pe posant Dicae sit.
      </p>

    </section>
  );
}