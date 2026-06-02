"use client";

import { useState } from "react";
import styles from "./FaqSection.module.css";

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

interface FaqCategory {
  categoryTitle: string;
  categoryDesc?: string;
  items: FaqItem[];
}

export default function FaqSection() {
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const toggleAccordion = (key: string) => {
    setActiveKey(activeKey === key ? null : key);
  };

  const faqData: FaqCategory[] = [
    {
      categoryTitle: "CHI BOTANICAL FAQs",
      categoryDesc: "Here are some answers to our frequently asked questions about our studio and treatments:",
      items: [
        {
          question: "How do I cancel or amend my appointment?",
          answer: (
            <p>
              Appointments can be cancelled or rescheduled through your online booking account or by contacting the studio directly.<br /><br />
              <strong>Please note:</strong> We do not accept cancellation requests via phone calls, missed calls, social media messages, or text messages as official notice.
            </p>
          )
        },
        {
          question: "What is your cancellation policy?",
          answer: (
            <p>
              We kindly ask that all cancellations or reschedules are made at least 48 hours before your appointment. Appointments cancelled within 48 hours of the scheduled time may be charged in full.<br /><br />
              If you are having difficulty accessing your booking account, please contact us at <a href="mailto:info@chibotanical.com">info@chibotanical.com</a>.
            </p>
          )
        }
      ]
    },
    {
      categoryTitle: "AGE REQUIREMENTS",
      items: [
        {
          question: "How old do I need to be for treatments?",
          answer: (
            <p>
              The minimum age for treatments at Chi Botanical is 16 years old for the <strong>Lift & Release Facial only</strong>. Clients aged 16–17 may book selected treatments with parental or guardian consent and attendance.<br /><br />
              All other treatments are 18+. If you have any further questions, please email us at <a href="mailto:info@chibotanical.com">info@chibotanical.com</a>.
            </p>
          )
        }
      ]
    },
    {
      categoryTitle: "INJECTABLES & COSMETIC PROCEDURES",
      items: [
        {
          question: "Can I have a treatment after Botox, filler, or skin boosters?",
          answer: (
            <p>
              To allow the skin to heal properly and ensure the safest and most effective results, please wait:
              <span className={styles.bulletList}>
                <span>• 2 weeks after Botox or anti-wrinkle injections</span>
                <span>• 4 weeks after dermal filler or skin boosters</span>
              </span>
              If you are unsure whether your treatment is suitable following injectables, please contact us before booking.
            </p>
          )
        }
      ]
    },
    {
      categoryTitle: "CONTRAINDICATIONS & TREATMENT SAFETY",
      items: [
        {
          question: "What conditions or treatments may prevent me from having a treatment?",
          answer: (
            <p>
              For your safety, certain treatments or medical conditions may mean we need to postpone or adjust your appointment. Please inform us before booking if you have experienced any of the following:
              <span className={styles.gridList}>
                <span>• Botox or anti-wrinkle injections (last 2 weeks)</span>
                <span>• Dermal filler (last 4 weeks)</span>
                <span>• Pregnancy (particularly first trimester)</span>
                <span>• Prescription-strength retinol or exfoliating acids (AHA/BHA) (last 2 weeks)</span>
                <span>• Facial surgery or cosmetic procedures (last 6 months)</span>
                <span>• Facial threads (last 12 weeks)</span>
                <span>• Microneedling, microblading, or dermaplaning (last 2 weeks)</span>
                <span>• Microdermabrasion or facial waxing (last 2 weeks)</span>
                <span>• Chemical peels (last 4 weeks)</span>
                <span>• Laser resurfacing (last 6 weeks)</span>
                <span>• Active cold sores, infections, cuts, or open skin in the area</span>
                <span>• Active acne treatments or medications that increase sensitivity</span>
                <span>• Recent sunburn or excessive sun exposure</span>
                <span>• Cancer treatment or recent remission</span>
              </span>
              If you are unsure if a treatment is suitable for you, please reach out to <a href="mailto:info@chibotanical.com">info@chibotanical.com</a>.
            </p>
          )
        }
      ]
    },
    {
      categoryTitle: "CANCER & REMISSION POLICY",
      items: [
        {
          question: "Can I have treatments if I am in remission?",
          answer: (
            <p>
              Some treatments may be suitable depending on your medical history and the treatment selected. As a general guideline:
              <span className={styles.bulletList}>
                <span>• Clients should be in remission for at least 12 months for most facial and wellness treatments.</span>
                <span>• Advanced treatments using radio frequency or intensive skin stimulation may require a longer remission period.</span>
              </span>
              Unfortunately, we cannot perform treatments for clients currently undergoing active cancer treatment unless written medical approval has been provided. Please contact us confidentially prior to booking so we can advise appropriately.
            </p>
          )
        }
      ]
    },
    {
      categoryTitle: "JEWELLERY & PERSONAL ITEMS",
      items: [
        {
          question: "Can I wear jewellery during my treatment?",
          answer: (
            <p>
              We recommend removing jewellery before your appointment, particularly earrings, necklaces, and facial piercings. Jewellery can interfere with cleansing, massage techniques, electrical treatments, and product application.<br /><br />
              Chi Botanical cannot accept responsibility for lost or damaged valuables, so we advise leaving valuable jewellery at home where possible.
            </p>
          )
        }
      ]
    },
    {
      categoryTitle: "ARRIVING FOR YOUR APPOINTMENT",
      items: [
        {
          question: "What happens if I am running late?",
          answer: (
            <p>
              Please arrive 5–10 minutes before your appointment to allow time for consultation and check-in. If you are running late, please contact the studio as soon as possible.<br /><br />
              Depending on availability, we may need to shorten your treatment time to avoid delaying later appointments. In some cases, late arrivals delayed by more than 10 minutes may be considered a missed appointment, and cancellation charges may apply.
            </p>
          )
        }
      ]
    },
    {
      categoryTitle: "DEPOSITS & PAYMENTS",
      items: [
        {
          question: "Do I need to pay a deposit?",
          answer: (
            <p>
              Yes. A non-refundable £50 deposit is required at the time of booking to secure your appointment. The remaining balance will be taken on the day of your treatment at the studio. Please note that all deposits are strictly non-refundable.
            </p>
          )
        }
      ]
    },
    {
      categoryTitle: "TREATMENT PREPARATION & AFTERCARE",
      items: [
        {
          question: "How should I prepare for my appointment?",
          answer: (
            <p>
              For best results, we recommend arriving with clean skin and avoiding heavy makeup where possible. Please avoid retinol products for 5–7 days before advanced treatments, excessive sun exposure, active exfoliation immediately before, and alcohol 24 hours prior.
            </p>
          )
        },
        {
          question: "Will I receive aftercare advice?",
          answer: (
            <p>
              Yes. Chi Botanical will provide personalised aftercare recommendations following your appointment to help maximise your results and support skin recovery.
            </p>
          )
        }
      ]
    },
    {
      categoryTitle: "PREGNANCY & BREASTFEEDING",
      items: [
        {
          question: "Can I have treatments while pregnant or breastfeeding?",
          answer: (
            <p>
              Prior to the 1st Trimester, we are unable to offer any treatments.<br /><br />
              From the 2nd Trimester onwards, the only pregnancy-suitable workout we offer is the <strong>Tension Release Facial</strong>, which is purely massage-based.
            </p>
          )
        }
      ]
    },
    {
      categoryTitle: "RESULTS & TREATMENT PLANS",
      items: [
        {
          question: "How many treatments will I need?",
          answer: (
            <p>
              This depends on your skin goals, concerns, and chosen treatment. Some clients notice results after one appointment, while others achieve the best outcomes through a course of treatments combined with a consistent home-care routine. Chi Botanical will recommend a personalised plan during your consultation.
            </p>
          )
        }
      ]
    }
  ];

  return (
    <div className={styles.faqWrapper}>
      {faqData.map((category, catIdx) => (
        <section key={catIdx} className={styles.faqSection}>
          {/* Main category headings glide in on scroll */}
          <h2 className={`${styles.categoryTitle} reveal`}>
            {category.categoryTitle}
          </h2>
          {category.categoryDesc && (
            <p className={`${styles.categoryDesc} reveal reveal-delay-1`}>
              {category.categoryDesc}
            </p>
          )}

          {/* Accordion container group */}
          <div className={styles.accordionGroup}>
            {category.items.map((item, itemIdx) => {
              const uniqueKey = `${catIdx}-${itemIdx}`;
              const isOpen = activeKey === uniqueKey;

              return (
                /* Each accordion line drops in sequentially using your delay classes */
                <div 
                  key={itemIdx} 
                  className={`${styles.accordionItem} reveal reveal-delay-${(itemIdx % 4) + 1}`}
                >
                  <button
                    className={styles.accordionHeader}
                    onClick={() => toggleAccordion(uniqueKey)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.questionText}>{item.question}</span>
                    <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}>
                      +
                    </span>
                  </button>
                  
                  <div className={`${styles.accordionPanel} ${isOpen ? styles.panelOpen : ""}`}>
                    <div className={styles.panelContent}>
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}