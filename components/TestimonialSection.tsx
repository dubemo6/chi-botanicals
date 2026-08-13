"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./TestimonialSection.module.css";

const testimonials = [
  {
    quote:
      "Amarachi was amazing such a lovely lady and amazing work on my face thank you!! And also great chat a bonus !xx",
    name: "Client Name -Tatiana",
  },
  {
    quote:
          "Amarachi was fabulous. The best facial.",
    name: "Client Name -Emma",
  },
  {
    quote:
      "Another excellent facial with Amarachi. Thank you!",
    name: "Client Name -Maya",
  },
  {
    quote:
      "Amarachi was excellent, she talked me through the process in depth and gave me really useful tips for my day to day skin care. A really enjoyable and enlightening experience!",
    name: "Client Name -Tait ",
  },
  {
    quote:
      "Hands down the best hands on I've had! Absolutely brilliant today. Can't wait to come back. Thank you!",
    name: "Client Name -Coco",
  },
  {
    quote:
      "Amarachi was so good-informative, and amazing hands. Would defiantly rebook with her.",
    name: "Client Name -Georgie",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  
  // Use references to keep track of timers across renders without breaking them
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Core slide-changing logic with clean transition spacing
  const triggerNextSlide = () => {
    setIsFading(true);
    setTimeout(() => {
      setIndex((current) => (current + 1) % testimonials.length);
      setIsFading(false);
    }, 400); // Matches your CSS module fade animation speed
  };

  // Starts the continuous 3-second loop
  const startAutoplay = () => {
    stopAutoplay(); // Clear any existing instance first
    autoPlayRef.current = setInterval(() => {
      triggerNextSlide();
    }, 3000);
  };

  // Stops the continuous 3-second loop
  const stopAutoplay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  // Triggered whenever the user manually clicks the arrow
  const handleManualNext = () => {
    if (isFading) return;

    // 1. Instantly halt the automatic 3-second fading loop
    stopAutoplay();

    // 2. Clear any previous resume countdowns if they click multiple times rapidly
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }

    // 3. Fire the manual index transition immediately
    triggerNextSlide();

    // 4. Wait for 6 seconds of user silence before turning the autoplay engine back on
    resumeTimeoutRef.current = setTimeout(() => {
      startAutoplay();
    }, 6000); 
  };

  // Mount logic: Safely starts the autoplay engine on load, and cleans up on close
  useEffect(() => {
    startAutoplay();

    return () => {
      stopAutoplay();
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  return (
    <section className={styles.section}>
      <div className={`${styles.content} ${isFading ? styles.fadeOut : styles.fadeIn}`}>
        <blockquote className={styles.quote}>
          &ldquo;{testimonials[index].quote}&rdquo;
        </blockquote>
        <p className={styles.name}>{testimonials[index].name}</p>
      </div>
      
      <button 
        className={styles.arrow} 
        onClick={handleManualNext} 
        aria-label="Next testimonial"
      >
        &rarr;
      </button>
    </section>
  );
}