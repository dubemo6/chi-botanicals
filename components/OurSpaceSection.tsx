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
Rooted
We begin at the foundation. True skin
health comes from addressing the root
with patience, intention, and respect for
natural processes.
Connection
Skin is not separate from the body, and
neither are we separate from our
environment. Each treatment restores
alignment between skin, body, and earth.
Equanimity
Balance over excess. Harmony over force.
We work with the skin, not against it.
Truth &amp; Transparency
No trends. No noise.
Only honest, informed guidance so you
feel empowered in your skin.
Care &amp; Integrity
Like a sister, we show up with honesty,
empathy, and genuine support. Your trust
is at the centre of everything we do.
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