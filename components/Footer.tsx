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
              className={`${styles.link} ${styles.socialLink} reveal reveal-delay-2`}
              aria-label="Instagram: @chibotanical"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" className={styles.socialIconDot} />
              </svg>
              @chibotanical
            </a>
             <a
              href="https://www.tiktok.com/@chi.botanical?_r=1&_t=ZN-9915iklaWne"
              target="_blank"
              rel="noreferrer"
              className={`${styles.link} ${styles.socialLink} reveal reveal-delay-2`}
              aria-label="TikTok: @chibotanical"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M15.5 3h3c.3 1.8 1.4 3.2 3 4v3.1c-1.1-.1-2.1-.5-3-1.1v6.2a5.8 5.8 0 1 1-5.8-5.8c.3 0 .6 0 .8.1v3.2a2.7 2.7 0 1 0 1.9 2.5V3Z" />
              </svg>
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

        {/* ─── Bottom Credits Row ─── */}
        <div className={styles.creditsRow}>
          <p className={styles.creditsText}>
            Brand and website design by{" "}
            <a 
              href="https://www.kelseymacdonald.studio/" 
              target="_blank" 
              rel="noreferrer" 
              className={styles.creditLink}
            >
              Kelsey MacDonald Studio
            </a>
            . Website build by{" "}
            <a 
              href="https://portfolio-bice-tau-jd9noiodfu.vercel.app" 
              target="_blank" 
              rel="noreferrer" 
              className={styles.creditLink}
            >
              Oguamanam Anthony
            </a>
            .
          </p>
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