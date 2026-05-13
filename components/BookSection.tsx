import Image from "next/image";
import styles from "./BookSection.module.css";

// ── Swap with your image ─────────────────────────────────────
// const bookImage = "/images/book.jpg";
// ────────────────────────────────────────────────────────────
const bookImage: string | null = null;

export default function BookSection() {
  return (
    <section className={styles.section} id="book">
      <div className={styles.imageWrap}>
        {bookImage ? (
          <Image src={bookImage} alt="Book a session" fill className={styles.img} sizes="50vw" />
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

      <div className={styles.content}>
        <p className={styles.eyebrow}>Ready to begin?</p>
        <h2 className={styles.heading}>
          Book your<br />
          first session.
        </h2>
        <p className={styles.sub}>
          Sessions are by appointment only. We&apos;ll reach out within 24 hours
          to confirm your visit and answer any questions.
        </p>
        <a href="mailto:hello@chibotanical.com" className={styles.cta}>
          Book Now
        </a>
      </div>
    </section>
  );
}