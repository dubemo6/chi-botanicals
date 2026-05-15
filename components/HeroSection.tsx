"use client";

import { useState, useEffect } from "react";
import styles from "./HeroSection.module.css";

const LEFT_IMAGES: string[] = [
  "/images/fruit.webp",
  "/images/fruit2.webp",
  "/images/fruit3.webp",
  "/images/fruit4.webp",
  "/images/fruit5.webp",
  "/images/fruit6.webp",
];

const RIGHT_IMAGES: string[] = [
  "/images/face.webp",
  "/images/face2.webp",
  "/images/face3.webp",
  "/images/face4.webp",
  "/images/face5.webp",
  "/images/face6.webp",
  "/images/face7.webp",
];

function useActiveIndex(length: number, interval: number) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (length <= 1) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % length);
    }, interval);
    return () => clearInterval(timer);
  }, [length, interval]);
  return index;
}

function Panel({
  images,
  alt,
  interval,
  children,
  className,
}: {
  images: string[];
  alt: string;
  interval: number;
  children?: React.ReactNode;
  className?: string;
}) {
  const activeIndex = useActiveIndex(images.length, interval);

  return (
    <div className={`${styles.panel} ${className ?? ""}`}>
      {images.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={src}
          src={src}
          alt={i === 0 ? alt : ""}
          aria-hidden={i !== activeIndex}
          className={`${styles.panelImg} ${i === activeIndex ? styles.visible : styles.hidden}`}
        />
      ))}
      {children && <div className={styles.overlay}>{children}</div>}
    </div>
  );
}

export default function HeroSection() {
  const LEFT_INTERVAL = 1300;
  const RIGHT_INTERVAL = 1500;

  return (
    <section className={styles.hero} id="home">

      {/* LEFT panel — has tagline, hidden on mobile */}
      <Panel
        images={LEFT_IMAGES}
        alt="Botanical product"
        interval={LEFT_INTERVAL}
        className={styles.leftPanel}
      >
        <h1 className={styles.tagline}>
          <span className={styles.taglineLine}>SKIN ,</span>
          <span className={styles.taglineLine}>AT THE ROOT.</span>
        </h1>
      </Panel>

      {/* RIGHT panel — full width on mobile, tagline also shown on mobile */}
      <Panel
        images={RIGHT_IMAGES}
        alt="Skincare model"
        interval={RIGHT_INTERVAL}
        className={styles.rightPanel}
      >
        {/* Tagline shown ONLY on mobile via CSS */}
        <h1 className={styles.taglineMobile}>
          <span className={styles.taglineLine}>SKIN ,</span>
          <span className={styles.taglineLine}>AT THE ROOT.</span>
        </h1>
      </Panel>

    </section>
  );
}