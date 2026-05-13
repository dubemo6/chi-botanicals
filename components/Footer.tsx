import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* Top section */}
        <div className={styles.top}>
          <div className={styles.brand}>
            CHI<br />BOTANICAL
          </div>

          <div className={styles.linksCol}>
            <p className={styles.colLabel}>Links</p>
            <a href="#about" className={styles.link}>ABOUT</a>
            <a href="#treatments" className={styles.link}>TREATMENTS</a>
            <a href="#client-care" className={styles.link}>CLIENT CARE</a>
            <a href="#book" className={styles.link}>BOOK NOW</a>
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
            <img src="/images/logo.png" alt="Chi Botanical logo" className={styles.logo} />
          </div>
        </div>


      </div>
    </footer>
  );
}