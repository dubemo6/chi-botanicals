import styles from "./AddOnsSection.module.css";

const BOOK_URL = "https://www.fresha.com/en-GB";

const addOns = [
  { name: "Buccal Massage", desc: "Releases deep jaw and facial tension" },
  { name: "Facial Cupping", desc: "Stimulates circulation and lymphatic drainage" },
  { name: "Head Tension Massage — 10 min", desc: "Relieves scalp, temple, and head tension" },
  { name: "Extra Hands", desc: "Enhanced relaxation with additional massage techniques" },
];

export default function AddOnsSection() {
  return (
    <section className={styles.section} id="add-ons">
      <div className={styles.inner}>
        <p className={`${styles.label} reveal`}>Add-Ons</p>

        <div className={styles.list}>
          {addOns.map((addon, i) => (
            <div key={i} className={`${styles.item} reveal reveal-delay-${i + 1}`}>
              <p className={styles.name}>{addon.name}</p>
              <p className={styles.desc}>{addon.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.actions}>
          {addOns.map((_, i) => (
            <div key={i} className={`${styles.actionItem} reveal reveal-delay-${i + 1}`}>
              <a
                href={BOOK_URL}
                target="_blank"
                rel="noreferrer"
                className={styles.bookNow}
              >
                BOOK NOW
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}