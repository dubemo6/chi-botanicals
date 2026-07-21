// FutureWorkshops.tsx
"use client";

import styles from "./FutureWorkshops.module.css";

type WorkshopSize = "tall" | "medium" | "short";

interface Workshop {
  title: string;
  time: string;
  desc: string;
  image: string;
  size: WorkshopSize;
}

const workshops: Workshop[] = [
  {
    title: "The Art of Facial Gua Sha",
    time: "Date / Time TBC",
    desc: "A slow beauty ritual designed to release tension and encourage mindful self-care.",
    image: "/images/faces7.webp",
    size: "medium",
  },
  {
    title: "Skin Health & Ritual Practices",
    time: "Date / Time TBC",
    desc: "Understanding the skin beyond trends through education and intentional rituals.",
    image: "/images/veg6.webp",
    size: "short",
  },
  {
    title: "Facial Tension Release for Modern Stress",
    time: "Date / Time TBC",
    desc: "Techniques designed to soften built-up facial tension and support nervous system wellbeing.",
    image: "/images/face5.webp",
    size: "medium",
  },
  {
    title: "Beauty Through Slowness",
    time: "Date / Time TBC",
    desc: "An exploration of slower beauty and intentional skincare rituals.",
    image: "/images/fruit3.webp",
    size: "short",
  },
];

const SIZE_CLASS: Record<WorkshopSize, string> = {
  tall: styles.imageTall,
  medium: styles.imageMedium,
  short: styles.imageShort,
};

export default function FutureWorkshops() {
  return (
    <section className={styles.section}>
      <p className={`${styles.heading} reveal`}>UPCOMING WORKSHOPS</p>

      <div className={styles.grid}>
        {workshops.map((w, i) => (
          <div
            key={w.title}
            className={`${styles.card} reveal`}
            style={{ "--reveal-delay": `${i * 0.08}s` } as React.CSSProperties}
          >
            <div className={`${styles.imageWrap} ${SIZE_CLASS[w.size]}`}>
              <img
                src={w.image}
                alt={w.title}
                className={styles.image}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            <p className={styles.title}>{w.title}</p>
            <p className={styles.time}>{w.time}</p>
            <p className={styles.desc}>{w.desc}</p>
          </div>
        ))}
      </div>

      <a href="#" className={`${styles.viewLink} reveal`}>
        VIEW WORKSHOP UPDATES
      </a>
    </section>
  );
}