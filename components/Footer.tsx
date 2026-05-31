"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./Footer.module.css";

const allLinks = [
  { label: "ABOUT", href: "/about" },
  { label: "TREATMENTS", href: "/treatments" },
  { label: "CLIENT CARE", href: "/clients" },
  { label: "BOOK NOW", href: "https://www.fresha.com/en-GB" },
];

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Sets visible to true if even a small part of the footer enters the screen
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: "100px 0px 0px 0px" } // Slightly offsets so it appears smoothly right before hitting bottom
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer ref={footerRef} className={styles.footer}>
      <div className={styles.inner}>
        
        {/* Top section */}
        <div className={styles.top}>
          <div className={styles.brand}>
            CHI<br />BOTANICAL
          </div>

          {/* Dynamic Links Column */}
          <div className={styles.linksCol}>
            <p className={styles.colLabel}>Links</p>
            {allLinks.map((link) => (
              <a key={link.href} href={link.href} className={styles.link}>
                {link.label}
              </a>
            ))}
          </div>

          <div className={styles.contactCol}>
            <p className={styles.colLabel}>Get in touch</p>
            <a href="mailto:info@chibotanical.com" className={styles.link}>
              info@chibotanical.com
            </a>
            <a
              href="https://instagram.com/chibotanical"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              @chibotanical
            </a>
          </div>

          <div className={styles.logoCol}>
            <img src="/images/life.png" alt="Chi Botanical logo" className={styles.logo} />
          </div>
        </div>

        {/* Floating Action Button with Dynamic Visibility Class */}
        <button 
          onClick={scrollToTop} 
          className={`${styles.floatingScrollBtn} ${isVisible ? styles.visible : ""}`} 
          aria-label="Scroll to top"
        >
          ↑
        </button>

      </div>
    </footer>
  );
}