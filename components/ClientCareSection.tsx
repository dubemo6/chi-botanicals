import styles from "./ClientCareSection.module.css";

const faqs = [
  {
    q: "What should I expect on my first visit?",
    a: "A full skin consultation, a personalised treatment plan, and your first botanical ritual — all in a calm, unhurried setting.",
  },
  {
    q: "How often should I come in?",
    a: "Most clients benefit from monthly treatments. We'll advise a cadence based on your skin's specific needs.",
  },
  {
    q: "Are your products safe for sensitive skin?",
    a: "Yes. Every formulation we use is free from synthetic fragrance, harsh preservatives, and known irritants.",
  },
];

export default function ClientCareSection() {
  return (
    <section className={styles.section} id="client-care">
      <div className={styles.left}>
        <p className={styles.eyebrow}>Client Care</p>
        <h2 className={styles.heading}>
          Questions,<br />
          answered.
        </h2>
        <p className={styles.sub}>
          We believe informed clients get the best results.
          Here are the questions we hear most often.
        </p>
        <a href="#book" className={styles.cta}>Book a Consultation</a>
      </div>

      <div className={styles.faqs}>
        {faqs.map((faq, i) => (
          <div key={i} className={styles.faq}>
            <p className={styles.faqQ}>{faq.q}</p>
            <p className={styles.faqA}>{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}