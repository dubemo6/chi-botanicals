"use client";

import { useState } from "react";
import styles from "./OurSpaceSection.module.css";

const spaceImages: string[] = [
  "/images/meet7.webp",
  "/images/meet2.webp",
  "/images/faces10.webp",
  "/images/fruit6.webp",
  "/images/face.webp",
];

const entries = [
  {
    heading: "Rooted",
    body: "We begin at the foundation. True skin health comes from addressing the root with patience, intention, and respect for natural processes.",
  },
  {
    heading: "Connection",
    body: "Skin is not separate from the body, and neither are we separate from our environment. Each treatment restores alignment between skin, body, and earth.",
  },
  {
    heading: "Equanimity",
    body: "Balance over excess. Harmony over force. We work with the skin, not against it.",
  },
  {
    heading: "Truth & Transparency",
    body: "No trends. No noise. Only honest, informed guidance so you feel empowered in your skin.",
  },
  {
    heading: "Care & Integrity",
    body: "Like a sister, we show up with honesty, empathy, and genuine support. Your trust is at the centre of everything we do.",
  },
];

function Entry({ heading, body }: { heading: string; body: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.entry}>
      <button
        className={styles.entryHeader}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className={styles.entryHeading}>{heading}</span>
        <span className={`${styles.entryArrow} ${open ? styles.entryArrowOpen : ""}`}>→</span>
      </button>
      <div className={`${styles.entryBody} ${open ? styles.entryBodyOpen : ""}`}>
        <p className={styles.entryText}>{body}</p>
      </div>
    </div>
  );
}

export default function OurSpaceSection() {
  return (
    <section className={styles.section} id="our-space">
      <p className={`${styles.eyebrow} reveal`}>OUR SPACE</p>

      <div className={`${styles.mobileTopics} reveal`}>
        {entries.map((e, i) => (
          <Entry key={i} heading={e.heading} body={e.body} />
        ))}
      </div>

      <div className={styles.grid}>
        {spaceImages.map((src, i) => (
  <div key={i} className={`${styles.item} reveal reveal-delay-${i + 1}`}>
    <div className={styles.imgWrap}>
      <img src={src} alt={`Our space ${i + 1}`} className={styles.img} />
    </div>
    <div className={styles.desktopEntry}>
      <Entry heading={entries[i].heading} body={entries[i].body} />
    </div>
  </div>
))}
      </div>
    </section>
  );
}