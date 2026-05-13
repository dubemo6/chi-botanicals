import Image from "next/image";
import styles from "./AboutSection.module.css";

// ── Swap with your image ─────────────────────────────────────
// const aboutImage = "/images/about.jpg";
// ────────────────────────────────────────────────────────────
const aboutImage: string | null = null;

export default function AboutSection() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.text}>
        <p className={styles.eyebrow}>About Chi Botanical</p>
        <h2 className={styles.heading}>
          Rooted in nature.<br />
          Backed by science.
        </h2>
        <p className={styles.body}>
          Chi Botanical is a luxury skin care studio committed to restoring your skin
          from the root. We blend plant-based botanicals with evidence-driven treatments
          to deliver results that are as visible as they are lasting.
        </p>
        <a href="#treatments" className={styles.cta}>
          Explore Treatments
        </a>
      </div>

      <div className={styles.imageWrap}>
        {aboutImage ? (
          <Image src={aboutImage} alt="About Chi Botanical" fill className={styles.img} sizes="50vw" />
        ) : (
          <div className={styles.placeholder} aria-label="About image">
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