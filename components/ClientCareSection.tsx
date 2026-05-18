import styles from "./ClientCareSection.module.css";

export default function ClientCareSection() {
  return (
    <section className={styles.hero}>
      <img
        src="/images/face5.webp"
        alt=""
        className={styles.heroBg}
      />
      <div className={styles.heroContent}>
        <p className={styles.label}>CLIENT CARE</p>
        <h1 className={styles.title}>COMING SOON</h1>
      </div>
    </section>
  );
}