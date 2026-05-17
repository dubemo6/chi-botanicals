import styles from "./OurSpaceSection.module.css";

const spaceImages: string[] = [
  "/images/meet.png",
  "/images/meet2.png",
  "/images/meet3.png",
  "/images/meet4.png",
  "/images/meet5.png",
];

export default function OurSpaceSection() {
  return (
    <section className={styles.section} id="our-space">
      <p className={styles.eyebrow}>OUR SPACE</p>

      <p className={styles.body}>
        Acium assed quo tem qui omniscienest eatur rerum harunt ex eserovit,
        oatatur? Qui ipsae ni autebis est, untempera nulpa est ommodig endae.
        Nam facea dis perum venist, offic test ad que pe posant dicae sit.
        Acium assed quo tem qui omniscienest eatur rerum harunt ex eserovit,
        oatatur? Qui ipsae ni autebis est, untempera nulpa est ommodig endae.
        Nam facea dis perum venist, offic test ad que pe posant dicae sit.
      </p>

      <div className={styles.gallery}>
        {spaceImages.map((src, i) => (
          <div key={i} className={styles.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`Our space ${i + 1}`}
              className={styles.img}
            />
          </div>
        ))}
      </div>
    </section>
  );
}