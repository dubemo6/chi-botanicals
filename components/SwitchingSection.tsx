"use client";
import { useState, useEffect } from "react";
import styles from "./SwitchingSection.module.css";

const BG_IMAGES: string[] = [
  "/images/face.webp",
  "/images/fruit.webp",
  "/images/face2.webp",
  "/images/fruit2.webp",
  "/images/fruit3.webp",
  "/images/face3.webp",
  "/images/fruit4.webp",
  "/images/face4.webp",
  "/images/fruit5.webp",
  "/images/fruit6.webp",
];

const CENTER_IMAGE: string = "/images/image.png";

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

export default function SwitchingSection() {
  const activeIndex = useActiveIndex(BG_IMAGES.length, 1200);

  return (
    <section className={styles.section}>
      {/* Full-width swapping background images — all stacked, only active one is visible */}
      {BG_IMAGES.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={src}
          src={src}
          alt={i === 0 ? "Switching background" : ""}
          aria-hidden={i !== activeIndex}
          className={`${styles.bgImg} ${i === activeIndex ? styles.visible : styles.hidden}`}
        />
      ))}

      {/* Fixed small square center image — sits on top of everything, never swaps */}
      <div className={styles.centerWrap}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={CENTER_IMAGE} alt="Center feature" className={styles.centerImg} />
      </div>
    </section>
  );
}