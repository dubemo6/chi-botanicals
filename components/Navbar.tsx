import styles from "./Navbar.module.css";

const leftLinks = [
  { label: "ABOUT", href: "/about" },
  { label: "TREATMENTS", href: "/treatments" },
];

const rightLinks = [
  { label: "CLIENT CARE", href: "/client-care" },
  { label: "BOOK NOW", href: "https://www.fresha.com/en-GB" },
];

export default function Navbar() {
  return (
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
  );
}