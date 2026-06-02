"use client";

import styles from "./FutureWorkshops.module.css";

const workshops = [
  {
    id: 1,
    image: "/images/any5.webp",
    title: "The Art of Facial Gua Sha",
    description:
      "A slow beauty ritual designed to release tension and encourage mindful self-care.",
  },
  {
    id: 2,
    image: "/images/any8.webp",
    title: "Skin Health & Ritual Practices",
    description:
      "Understanding the skin beyond trends through education and intentional rituals.",
  },
  {
    id: 3,
    image: "/images/any3.webp",
    title: "Facial Tension Release for Modern Stress",
    description:
      "Techniques designed to soften built-up facial tension and support nervous system wellbeing.",
  },
  {
    id: 4,
    image: "/images/any2.webp",
    title: "Beauty Through Slowness",
    description:
      "An exploration of slower beauty and intentional skincare rituals.",
  },
];

export default function FutureWorkshops() {
  return (
    <section className={styles.workshops}>
      <div className={styles.header}>
        <div className={`${styles.headerLeft} reveal`}>
          <p className={styles.label}>UPCOMING WORKSHOPS</p>
          <h2 className={styles.title}>Future Workshops</h2>
        </div>
        <p className={`${styles.intro} reveal`}>
          A curated collection of bespoke workshops thoughtfully designed to bring
          together beauty, education and restoration. Each experience invites you to
          slow down, reconnect, and deepen your understanding of skin and self.
        </p>
      </div>

      <div className={styles.grid}>
        {workshops.map((w, index) => (
          <div 
            key={w.id} 
            className={`${styles.card} reveal`}
            style={{ "--reveal-delay": `${index * 0.1}s` } as React.CSSProperties}
          >
            <div className={styles.cardImageWrap}>
              <img src={w.image} alt={w.title} className={styles.cardImage} />
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{w.title}</h3>
              <p className={styles.cardDesc}>{w.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={`${styles.cta} reveal`}>
        <a href="#" className={styles.ctaBtn}>
          VIEW WORKSHOP UPDATES
        </a>
      </div>
    </section>
  );
}