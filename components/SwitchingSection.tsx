"use client";

import { useState, useEffect } from "react";
import styles from "./SwitchingSection.module.css";

const BG_IMAGES: string[] = [
 "images/glass.webp",
 "images/glass2.webp",
 "images/glass3.webp",
 "images/glass4.webp",
 "images/glass5.webp",
 "images/glass6.webp",
 "images/glass7.webp",
 "images/glass8.webp",
 "images/glass9.webp",
 "images/glass10.webp",
 "images/glass11.webp",
 "images/glass12.webp",
 "images/glass13.webp",
  "images/glass14.webp",
  "images/glass15.webp",
  "images/glass16.webp",
  "images/glass17.webp",
  "images/glass18.webp",
  "images/glass19.webp",
  "images/glass20.webp",
  "images/glass21.webp",
  "images/glass22.webp",
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

export default function SwitchingSection() {
  const activeIndex = useActiveIndex(BG_IMAGES.length, 1200);

  return (
    <section className={styles.section}>
      {BG_IMAGES.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={i === 0 ? "Switching background" : ""}
          aria-hidden={i !== activeIndex}
          className={`${styles.bgImg} ${i === activeIndex ? styles.visible : styles.hidden}`}
        />
      ))}
    </section>
  );
}