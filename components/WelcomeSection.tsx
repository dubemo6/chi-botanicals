import styles from "./WelcomeSection.module.css";

export default function WelcomeSection() {
  return (
    <section className={styles.section} id="about">
      <p className={styles.eyebrow}>WELCOME</p>
      <p className={styles.body}>
        {/* Replace this text with your own */}
        Acium assed quo tem qui omniscienest eatur rerum harunt ex eserovit,
        oatatur? Qui ipsae ni autebis est, untempera nulpa est ommodig endae.
        Nam facea dis perum venist, offic test ad que pe posant dicae sit.
        Acium assed quo tem qui omniscienest eatur rerum harunt ex eserovit,
        oatatur? Qui ipsae ni autebis est, untempera nulpa est ommodig endae.
        Nam facea dis perum venist, offic test ad que pe posant dicae sit.
      </p>

      <div className={styles.logoWrap}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/logo2.png" alt="Brand logo" className={styles.logoPlaceholder} />
      </div>
    </section>
  );
}