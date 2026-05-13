import Image from "next/image";
import styles from "./TreatmentsSection.module.css";

interface Treatment {
  number: string;
  name: string;
  description: string;
  href: string;
  image: string | null;
}

const treatments: Treatment[] = [
  {
    number: "01",
    name: "Botanical Facial",
    description: "A deep-cleansing ritual using cold-pressed plant extracts to detoxify and renew.",
    href: "#treatments",
    image: null, // e.g. "/images/treatment-1.jpg"
  },
  {
    number: "02",
    name: "Root Renewal Peel",
    description: "Enzymatic exfoliation with botanical acids for radiant, even-toned skin.",
    href: "#treatments",
    image: null,
  },
  {
    number: "03",
    name: "Glow Infusion",
    description: "A vitamin-rich serum treatment that floods the skin with lasting luminosity.",
    href: "#treatments",
    image: null,
  },
  {
    number: "04",
    name: "Restorative Masque",
    description: "Barrier-repair masque blending adaptogenic herbs and skin-identical lipids.",
    href: "#treatments",
    image: null,
  },
];

export default function TreatmentsSection() {
  return (
    <section className={styles.treatments} id="treatments">
      <div className={styles.header}>
        <p className={styles.eyebrow}>What We Offer</p>
        <h2 className={styles.heading}>Treatments</h2>
      </div>

      <div className={styles.grid}>
        {treatments.map((t) => (
          <a key={t.number} href={t.href} className={styles.card}>
            <span className={styles.number}>{t.number}</span>

            <div className={styles.imageWrap}>
              {t.image ? (
                <Image src={t.image} alt={t.name} fill className={styles.img} sizes="25vw" />
              ) : (
                <div className={styles.placeholder}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <rect x="3" y="3" width="18" height="18" rx="1" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                </div>
              )}
            </div>

            <h3 className={styles.name}>{t.name}</h3>
            <p className={styles.desc}>{t.description}</p>
            <span className={styles.link}>Learn more →</span>
          </a>
        ))}
      </div>
    </section>
  );
}