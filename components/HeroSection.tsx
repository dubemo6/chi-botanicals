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

interface PanelProps {
  images: string[];
  alt: string;
  interval: number;
  children?: React.ReactNode;
}

function Panel({ images, alt, interval, children }: PanelProps) {
  const activeIndex = useActiveIndex(images.length, interval);

  return (
    <div className={styles.panel}>
      {images.length > 0 ? (
        <>
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
        </>
      ) : (
        <div className={styles.placeholder}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <rect x="3" y="3" width="18" height="18" rx="1" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
          <span>Your images go here</span>
        </div>
      )}
      {children && <div className={styles.overlay}>{children}</div>}
    </div>
  );
}

export default function HeroSection() {
  const LEFT_INTERVAL = 1000;
  const RIGHT_INTERVAL = 1100;

  return (
    <section className={styles.hero} id="home">
      <Panel images={LEFT_IMAGES} alt="Botanical product" interval={LEFT_INTERVAL}>
        <h1 className={styles.tagline}>
          <span className={styles.taglineLine}>SKIN ,</span>
          <span className={styles.taglineLine}>AT THE ROOT.</span>
        </h1>
      </Panel>

      <div className={styles.divider} aria-hidden="true" />

      <Panel images={RIGHT_IMAGES} alt="Skincare model" interval={RIGHT_INTERVAL} />
    </section>
  );
}