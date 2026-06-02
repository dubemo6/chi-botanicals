import styles from "./AddOnsSection.module.css";

const BOOK_URL = "https://www.fresha.com/en-GB";

const addOns = [
  { name: "Buccal Massage 20 mins | £50", desc: "Deep intra-oral massage to release jaw tension and sculpt facial contours" },
  { name: "Shoulder & back massage with gua sha 20mins | £50", desc: "A targeted treatment to release tension in the shoulders and upper back, helping to reduce facial puffiness and restore a  more lifted appearance." },
  { name: "Head Tension Massage — 10 min | £40", desc: "Relieves scalp, temple, and head tension" },
  { name: "Extra Hands | £35", desc: "Enhanced relaxation with additional massage techniques" },
   { name: "Hydrating Mask | £30", desc: "Intensive moisture boost to restore hydration and glow" },


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