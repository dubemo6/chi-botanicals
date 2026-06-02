"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const allLinks = [
  { label: "CONCEPT", href: "/CONCEPT" },
  { label: "SKIN RITUALS", href: "/SKIN_RITUALS" },
  { label: "COMMUNITY", href: "/CommunityPage" },
  { label: "BOOK NOW", href: "https://www.fresha.com/en-GB" },
];

const leftLinks = allLinks.slice(0, 2);
const rightLinks = allLinks.slice(2);

interface NavbarProps {
  dark?: boolean; // black text on cream bg — used on about + treatments pages
}

export default function Navbar({ dark = false }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ── Desktop navbar ── */}
      <nav className={`${styles.navbar} ${dark ? styles.navbarDark : ""}`}>
        <div className={styles.group}>
          {leftLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`${styles.link} ${dark ? styles.linkDark : ""}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="/"
          className={`${styles.brand} ${dark ? styles.brandDark : ""}`}
        >
          CHI<br />BOTANICAL
        </a>

        <div className={styles.group}>
          {rightLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`${styles.link} ${dark ? styles.linkDark : ""}`}
              {...(link.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* ── Mobile navbar ── */}
      <div className={`${styles.mobileNav} ${dark ? styles.mobileNavDark : ""}`}>
        <a
          href="/"
          className={`${styles.mobileBrand} ${dark ? styles.mobileBrandDark : ""}`}
        >
          CHI<br />BOTANICAL
        </a>
        <button
          className={`${styles.hamburger} ${dark ? styles.hamburgerDark : ""}`}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* ── Full screen overlay menu ── */}
      {menuOpen && (
        <div className={styles.overlay}>
          <div className={styles.overlayTop}>
            <a href="/" className={styles.overlayBrand} onClick={() => setMenuOpen(false)}>
              CHI<br />BOTANICAL
            </a>
            <button
              className={styles.closeBtn}
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              &#x2715;
            </button>
          </div>

          <nav className={styles.overlayLinks}>
            {allLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={styles.overlayLink}
                onClick={() => setMenuOpen(false)}
                {...(link.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}