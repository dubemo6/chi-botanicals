"use client";

import { useState } from "react";
import styles from "./TestimonialSection.module.css";

const testimonials = [
  {
    quote:
      "Acium assed quo tem qui omniscienest eatur rerum harunt ex eserovit, oTatatur? Qui ipsae ni autebis est, untempera nulpa est ommodig endae. Nam facea dis perum venist, offic test ad que pe posant Dicae sit.",
    name: "Client Name",
  },
  {
    quote:
      "Nam facea dis perum venist, offic test ad que pe posant Dicae sit. Acium assed quo tem qui omniscienest eatur rerum harunt ex eserovit, oTatatur? Qui ipsae ni autebis est.",
    name: "Client Name",
  },
  {
    quote:
      "Qui ipsae ni autebis est, untempera nulpa est ommodig endae. Nam facea dis perum venist, offic test ad que pe posant Dicae sit.",
    name: "Client Name",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
 <section className={styles.section}>
  <div className={`${styles.content} reveal`}>
        <blockquote className={styles.quote}>
          &ldquo;{testimonials[index].quote}&rdquo;
        </blockquote>
        <p className={styles.name}>{testimonials[index].name}</p>
      </div>
      <button className={`${styles.arrow} reveal reveal-delay-1`} onClick={next} aria-label="Next testimonial">
        &rarr;
      </button>
    </section>
  );
}