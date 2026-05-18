import styles from "./MoreInfoSection.module.css";

const moreInfoImage: string | null = "/images/oil.png";

export default function MoreInfoSection() {
  return (
    <section className={styles.section} id="more-info">

      {/* ── DESKTOP layout ── */}
      <p className={styles.eyebrow}>MORE INFO</p>

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

      <a
        href="https://www.fresha.com/en-GB"
        target="_blank"
        rel="noreferrer"
        className={styles.bookNow}
      >
        BOOK NOW
      </a>

      <p className={styles.body}>
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
  );
}