"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const allLinks = [
  { label: "ABOUT", href: "/about" },
  { label: "TREATMENTS", href: "/treatments" },
  { label: "CLIENT CARE", href: "/client-care" },
  { label: "BOOK NOW", href: "https://www.fresha.com/en-GB" },
];

const leftLinks = allLinks.slice(0, 2);
const rightLinks = allLinks.slice(2);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ── Desktop navbar (hidden on mobile) ── */}
      <nav className={styles.navbar}>
        <div className={styles.group}>
          {leftLinks.map((link) => (
            <a key={link.label} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </div>

        <a href="/" className={styles.brand}>
          CHI<br />BOTANICAL
        </a>

        <div className={styles.group}>
          {rightLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.link}
              {...(link.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* ── Mobile navbar — single hamburger, always at top ── */}
      <div className={styles.mobileNav}>
        <a href="/" className={styles.mobileBrand}>
          CHI<br />BOTANICAL
        </a>
        <button
          className={styles.hamburger}
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