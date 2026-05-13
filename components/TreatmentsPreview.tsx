import styles from "./TreatmentsPreview.module.css";

// ── Add your treatment images here ─────────────────────────────
// image: "/images/treatment-1.webp"  (drop in public/images/)

// ───────────────────────────────────────────────────────────────
const treatments = [
  {
    image: "/images/face6.webp",
    name: "Lift & Release Facial",
    duration: "45 min",
    description:
      "An express sculpting and tension-release treatment focusing on facial massage, steam, and relaxation. Ideal for jaw tension, stress relief, and a quick lift.",
    size: "tall", // tall card
  },
  {
    image: "/images/plant.png",
    name: "Lift & Release Facial",
    duration: "60 min upgrade",
    description:
      "Extended version for deeper sculpting, longer massage, and enhanced relaxation, maintaining the same tension-release focus.",
    size: "medium", // shorter card
  },
  {
    image: "/images/face3.webp",
    name: "Glow & Flow Facial",
    duration: "60 min",
    description:
      "Refresh and rejuvenate the skin with dermaplaning, hydrating hydrofacial, and a soothing facial massage. Perfect for brightening, smoothing, and relaxation before or after a special occasion.",
    size: "tall",
  },
  {
    image: "/images/plant2.png",
    name: "Collagen Renewal Ritual",
    duration: "60 min",
    description:
      "Results-driven treatment combining microneedling (SkinPen® EVO) and LED light therapy to stimulate collagen, refine texture, and improve skin quality over the long term.",
    size: "medium",
  },
];

function Placeholder() {
  return (
    <div className={styles.placeholder}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <rect x="3" y="3" width="18" height="18" rx="1" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
    </div>
  );
}

export default function TreatmentsPreview() {
  return (
    <section className={styles.section} id="treatments">
      <p className={styles.eyebrow}>TREATMENTS</p>

      <div className={styles.grid}>
        {treatments.map((t, i) => (
          <div key={i} className={`${styles.card} ${styles[t.size]}`}>
            <div className={`${styles.imageWrap} ${styles[`imageWrap_${t.size}`]}`}>
              {t.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={t.image} alt={t.name} className={styles.img} />
              ) : (
                <Placeholder />
              )}
            </div>
            <h3 className={styles.name}>{t.name}</h3>
            <p className={styles.duration}>{t.duration}</p>
            <p className={styles.desc}>{t.description}</p>
          </div>
        ))}
      </div>

      <a href="/treatments" className={styles.viewMore}>
        VIEW MORE
      </a>
    </section>
  );
}