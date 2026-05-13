import styles from "./MoreInfoSection.module.css";

const moreInfoImage: string | null = "/images/oil.png";

export default function MoreInfoSection() {
  return (
    <section className={styles.section} id="more-info">

      {/* TOP RIGHT: More Info label — floats above everything on the right */}
      <p className={styles.eyebrow}>MORE INFO</p>

      {/* LEFT: image with breathing room around it */}
      <div className={styles.imageWrap}>
        {moreInfoImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={moreInfoImage} alt="More info" className={styles.img} />
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

      {/* MIDDLE RIGHT: Book Now */}
      <a
        href="https://www.fresha.com/en-GB"
        target="_blank"
        rel="noreferrer"
        className={styles.bookNow}
      >
        BOOK NOW
      </a>

      {/* BOTTOM RIGHT: body text */}
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