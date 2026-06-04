"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./WelcomeSection.module.css";

export default function WelcomeSection() {
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [eyebrowRef.current, bodyRef.current, logoRef.current];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} id="about">
      <p ref={eyebrowRef} className={`${styles.eyebrow} reveal`}>WELCOME</p>
      <p ref={bodyRef} className={`${styles.body} reveal reveal-delay-1`}>
        A modern skincare studio rooted in timeless care, connection and conscious growth.<br />
        A space to soften, reconnect, and restore through personalised rituals that honour both skin and self
      </p>
      <div ref={logoRef} className={`${styles.logoWrap} reveal reveal-delay-2`}>
        <Image 
          src="/images/image.webp" 
          alt="Brand logo" 
          width={90} 
          height={90} 
          className={styles.logoPlaceholder}
        />
      </div>
    </section>
  );
}