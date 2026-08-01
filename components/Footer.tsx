"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image"; 
import styles from "./Footer.module.css";

const allLinks = [
  { label: "ABOUT", href: "/ABOUT" },
  { label: "SKIN RITUALS", href: "/SKIN_RITUALS" },
  { label: "COMMUNITY", href: "/COMMUITY PAGE" },
  { label: "BOOK NOW", href: "https://www.fresha.com/en-GB" },
];

const helpLinks = [
  { label: "FAQ", href: "/FAQ" },
  { label: "TERMS & CONDITIONS", href: "/terms" },
];

const journalLinks = [
  { label: "COMMUNITY DIRECTORY", href: "/journal/part-one" },
  { label: "SKIN LIBRARY", href: "/journal/part-two" },
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

          <nav className={styles.linksCol} aria-label="Main Navigation">
            <h2 className={`${styles.colLabel} reveal`}>Links</h2>
            <ul>
              {allLinks.map((link, i) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`${styles.link} reveal reveal-delay-${i + 1}`}
                    {...(link.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
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
              </li>
            </ul>
          </nav>

          <nav className={styles.helpCol} aria-label="Help Navigation">
            <h2 className={`${styles.colLabel} reveal`}>Help</h2>
            <ul>
              {helpLinks.map((link, i) => (
                <li key={link.href}>
                  <a href={link.href} className={`${styles.link} reveal reveal-delay-${i + 1}`}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.contactCol}>
            <h2 className={`${styles.colLabel} reveal`}>Get in touch</h2>
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
            <Image 
              src="/images/life.webp" 
              alt="Chi Botanical logo" 
              width={64} 
              height={64} 
              className={styles.logo}
            />
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