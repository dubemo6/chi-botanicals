import styles from "./WelcomeSection.module.css";

export default function WelcomeSection() {
  return (
    <section className={styles.section} id="about">
      <p className={styles.eyebrow}>WELCOME</p>
      <p className={styles.body}>
      
     A modern skincare studio rooted in timeless care,  connection and conscious growth.<br />
     
    A space to soften, reconnect, and restore through personalised rituals that honour both skin and self

      </p>

      <div className={styles.logoWrap}>
        <img src="/images/image.png" alt="Brand logo" className={styles.logoPlaceholder} />
      </div>
    </section>
  );
}