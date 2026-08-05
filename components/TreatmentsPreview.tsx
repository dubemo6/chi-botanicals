import styles from "./TreatmentsPreview.module.css";

const treatments = [
  {
    image: "/images/face6.webp",
    name: "Lift & Release Facial",
    duration: "45 min | £110",
    description:
      "A sculpting and tension-release facial designed to lift depuff and restore Including 10min consultation, cleanse, facialmassage,neck and shoulder release, gua sha, and targeted skincare.",
   size: "tall",
  },
  {
    image: "/images/plant.webp",
    name: "Lift & Release Facial Extended",
    duration: "60 min | £160",
    description:
      "A deeper, extended massage using various tools facial cupping and a shoulder release, to enhanced sculpting and relaxation. Including 10min consultation, cleanse, facial massage, neck and shoulder release, cupping, gua sha, and targeted skincare.",
    size: "medium",
  },
  {
    image: "/images/face3.webp",
    name: "Glow & Flow Facial",
    duration: "90 min | £220",
    description:
      "A results-driven treatment to refine texture, clear congestion, and restore glow Including 10min consultation, cleanse, extraction, dermaplaning (optional), Massage, hydrating mask and LED.",
    size: "tall",
  },
  {
    image: "/images/meet6.webp",
    name: "Collagen Renewal Ritual",
    duration: "60 min | £250",
    description:
      "An advanced treatment combining microneedling and LED to support collagen, refine texture, and improve overall skin quality. Includes cleanse, SkinPen® EVO Microneedling, and a calming mask with LED .",
    size: "medium",
  },
];

interface TreatmentsPreviewProps {
  showConsultation?: boolean;
}

export default function TreatmentsPreview({ showConsultation = false }: TreatmentsPreviewProps) {
  return (
    <section className={styles.section} id="treatments">
      <h2 className={`${styles.eyebrow} reveal`}>TREATMENTS</h2>

      {showConsultation && (
        <div className={`${styles.consultation} reveal reveal-delay-1`}>
          <span className={styles.consultationTitle}>
            Consultation — <em>30 min</em>
          </span><br />
          <span className={styles.consultationSub}>
         Required before any treatment to assess your skin and discuss goals.
          </span>
        </div>
      )}

      <div className={styles.grid}>
        {treatments.map((t, i) => (
          <div
            key={i}
            className={`${styles.card} reveal reveal-delay-${i + 1}`}
          >
            <div className={`${styles.imageWrap} ${styles[`imageWrap_${t.size}`]}`}>
              {t.image ? (
                <img src={t.image} alt={t.name} className={styles.img} />
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
            <p className={styles.duration}>{t.duration}</p>
            <p className={styles.desc}>{t.description}</p>
          </div>
        ))}
      </div>

      {!showConsultation && (
        <a href="/SKIN_RITUALS" className={`${styles.viewMore} reveal`}>
          VIEW MORE
        </a>
      )}
    </section>
  );
}