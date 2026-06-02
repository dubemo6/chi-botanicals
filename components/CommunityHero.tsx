"use client";

import styles from "@/components/CommunityHero.module.css";

export default function CommunityHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBgWrap}>
        {/* Use your rich closeup portrait image path here */}
        <img 
          src="/images/face5.webp" 
          alt="Chi Botanical skin profile portrait" 
          className={styles.heroBg} 
        />
      </div>

      {/* Only the typography elements layer inside the reveal transition */}
      <div className={`${styles.heroContent} reveal`}>
        <p className={styles.heroLabel}>COMMUNITY</p>
        <h1 className={styles.heroTitle}>
          Beauty, ritual,<br />
          education and<br />
          restoration.
        </h1>
        <hr className={styles.heroDivider} />
        <p className={styles.heroSub}>
          In a fast-paced world, we have lost the art of slowing down.
        </p>
        <p className={styles.heroSub}>
          Chi Botanical was created as more than a skincare studio —
          but as a space to reconnect through skin, ritual and
          intentional wellbeing.
        </p>
        <a href="#why" className={styles.heroScroll}>
          SCROLL TO EXPLORE &nbsp;↓
        </a>
      </div>
    </section>
  );
}