"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./Footer.module.css";

const allLinks = [
  { label: "CONCEPT", href: "/CONCEPT" },
  { label: "SKIN RITUALS", href: "/SKIN_RITUALS" },
  { label: "COMMUNITY", href: "/COMMUNITY" },
  { label: "BOOK NOW", href: "https://www.fresha.com/en-GB" },
];

const journalLinks = [
  { label: "community directory", href: "/journal/part-one" },
  { label: "skin library", href: "/journal/part-two" },
];

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [journalOpen, setJournalOpen] = useState(false);
  const footerRef = useRef(null);
  const journalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: "100px 0px 0px 0px" }
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

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (journalRef.current && !journalRef.current.contains(e.target as Node)) {
        setJournalOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={footerRef} className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>

          <div className={`${styles.brand} reveal`}>
            CHI<br />BOTANICAL
          </div>

          <div className={styles.linksCol}>
            <p className={`${styles.colLabel} reveal`}>Links</p>
            {allLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className={`${styles.link} reveal reveal-delay-${i + 1}`}
                {...(link.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {link.label}
              </a>
            ))}

            <div
              ref={journalRef}
              className={styles.journalWrap}
              onMouseEnter={() => setJournalOpen(true)}
              onMouseLeave={() => setJournalOpen(false)}
            >
              <span className={`${styles.link} ${styles.journalTrigger} reveal reveal-delay-4`}>
                SKIN JOURNAL
              </span>
              {journalOpen && (
                <div className={styles.dropdown}>
                  {journalLinks.map((jl) => (
                    <a key={jl.href} href={jl.href} className={styles.dropdownLink}>
                      {jl.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className={styles.contactCol}>
            <p className={`${styles.colLabel} reveal`}>Get in touch</p>
            <a href="mailto:info@chibotanical.com" className={`${styles.link} reveal reveal-delay-1`}>
              info@chibotanical.com
            </a>
            <a
              href="https://instagram.com/chibotanical"
              target="_blank"
              rel="noreferrer"
              className={`${styles.link} reveal reveal-delay-2`}
            >
              @chibotanical
            </a>
          </div>

          <div className={`${styles.logoCol} reveal reveal-delay-2`}>
            <img src="/images/life.webp" alt="Chi Botanical logo" className={styles.logo} />
          </div>

        </div>

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