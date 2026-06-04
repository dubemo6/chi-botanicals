"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./HeroSection.module.css";
import NewsletterModal from "./NewsletterModal";

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
  sizes,
}: {
  images: string[];
  alt: string;
  interval: number;
  children?: React.ReactNode;
  className?: string;
  sizes: string;
}) {
  const activeIndex = useActiveIndex(images.length, interval);
  const nextIndex = (activeIndex + 1) % images.length;

  return (
    <div className={`${styles.panel} ${className ?? ""}`}>
      {images.map((src, i) => {
        const isActive = i === activeIndex;
        const isNext = i === nextIndex;
        
        // Critical Fix: Explicitly flag index 0 as the high-priority LCP frame
        const isLCP = i === 0;

        return (
          <div
            key={src}
            className={`${styles.imageWrapper} ${
              isActive ? styles.visible : isNext ? styles.preloadNext : styles.hidden
            }`}
          >
            <Image
              src={src}
              alt={i === 0 ? alt : ""}
              fill
              aria-hidden={!isActive}
              // Forces Next.js to omit 'loading=lazy' and pre-render into the initial HTML document payload
              priority={isLCP} 
              // Signals the browser layout engine to push this request to the front of the network queue
              {...(isLCP ? { fetchPriority: "high" } : { loading: isNext ? "eager" : "lazy" })}
              sizes={sizes}
              className={styles.panelImg}
            />
          </div>
        );
      })}
      {children && <div className={styles.overlay}>{children}</div>}
    </div>
  );
}

export default function HeroSection() {
  const LEFT_INTERVAL = 1300;
  const RIGHT_INTERVAL = 1500;

  return (
    <>
      <NewsletterModal />

      <section className={styles.hero} id="home">
        {/* LEFT panel — Contains fruit.webp (Your exact LCP target element) */}
        <Panel
          images={LEFT_IMAGES}
          alt="Botanical product"
          interval={LEFT_INTERVAL}
          className={styles.leftPanel}
          sizes="(max-width: 768px) 0vw, 50vw"
        >
          <h1 className={styles.tagline}>
            <span className={styles.taglineLine}>SKIN ,</span>
            <span className={styles.taglineLine}>AT THE ROOT.</span>
          </h1>
        </Panel>

        {/* RIGHT panel — Contains face.webp (Your mobile viewport LCP target element) */}
        <Panel
          images={RIGHT_IMAGES}
          alt="Skincare model"
          interval={RIGHT_INTERVAL}
          className={styles.rightPanel}
          sizes="(max-width: 768px) 100vw, 50vw"
        >
          <h1 className={styles.taglineMobile}>
            <span className={styles.taglineLine}>SKIN ,</span>
            <span className={styles.taglineLine}>AT THE ROOT.</span>
          </h1>
        </Panel>
      </section>
    </>
  );
}