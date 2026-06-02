"use client";

import styles from "./CollaborateSection.module.css";

export default function CollaborateSection() {
  const offerings = [
    "BRAND PARTNERSHIPS",
    "WORKSHOPS",
    "EVENTS",
    "CREATIVE PROJECTS"
  ];

  return (
    <section className={styles.sectionContainer}>
      {/* The entire content container sits cleanly on top of the background image */}
      <div className={`${styles.contentColumn} reveal`}>
        <span className={styles.eyebrow}>COLLABORATE WITH INTENT</span>
        
        <h2 className={styles.heading}>
          Collaborate<br />with Intent
        </h2>
        
        <div className={styles.descriptionBlock}>
          <p>
            Chi Botanical believes in intentional collaboration, 
            meaningful conversation and creating experiences 
            that support skin, wellbeing and community.
          </p>
          <p>
            If you feel aligned with the brand, 
            we invite you to get in touch.
          </p>
        </div>

        {/* Offerings horizontal list */}
        <div className={`${styles.offeringsGrid} reveal reveal-delay-1`}>
          {offerings.map((item, index) => (
            <div key={index} className={styles.offeringItem}>
              {item}
            </div>
          ))}
        </div>

        <a href="mailto:info@chibotanical.com" className={`${styles.enquireLink} reveal reveal-delay-2`}>
          ENQUIRE <span className={styles.arrow}>→</span>
        </a>
      </div>
    </section>
  );
}