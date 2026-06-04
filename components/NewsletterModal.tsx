"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import styles from "./NewsletterModal.module.css";

export default function NewsletterModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const hasJoinedWaitlist = localStorage.getItem("hasJoinedWaitlist");
    if (!hasJoinedWaitlist) setIsOpen(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const SERVICE_ID = "service_iaabgov";
    const INTERNAL_TEMPLATE_ID = "template_9ja1dfr"; 
    const USER_TEMPLATE_ID = "template_dkqxv21";         
    const PUBLIC_KEY = "ilQN0zNZYa1lDrMMq";

    try {
      await emailjs.send(SERVICE_ID, INTERNAL_TEMPLATE_ID, { user_email: email }, PUBLIC_KEY);
      await emailjs.send(SERVICE_ID, USER_TEMPLATE_ID, { user_email: email }, PUBLIC_KEY);
      localStorage.setItem("hasJoinedWaitlist", "true");
      setIsSuccess(true);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Something went wrong.");
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.backdrop}>
      <div className={styles.modalCard}>
        <button onClick={() => setIsOpen(false)} className={styles.closeButton} aria-label="Close modal">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className={styles.imageSection}>
          <Image 
            src="/images/fruit6.webp" 
            alt="Chi Botanical experience"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 423px"
            className="object-cover"
          />
        </div>

        <div className={styles.contentSection}>
          {!isSuccess ? (
            <>
              <span className={styles.launchTag}>Launching Autumn 2026</span>
              <h2 className={styles.title}>Be the first to experience Chi Botanical.</h2>
              <p className={styles.description}>
                Chi Botanical is a skin studio rooted in slow beauty, intentional care and skin health.
              </p>
              <form onSubmit={handleSubmit} className={styles.form}>
                <input type="email" required placeholder="Email address" className={styles.inputField} value={email} onChange={(e) => setEmail(e.target.value)} disabled={isSubmitting} />
                <button type="submit" className={styles.submitButton} disabled={isSubmitting}>{isSubmitting ? "Joining..." : "Join the List"}</button>
              </form>
            </>
          ) : (
            <div className={styles.successView}>
              <h2 className={styles.title}>You are on the list.</h2>
              <button onClick={() => setIsOpen(false)} className={styles.submitButton}>Close Window</button>
            </div>
          )}

          {/* Flattened Footer */}
          <footer className={styles.footerText}>
            No spam — just thoughtful updates from Chi Botanical.
          </footer>
        </div>
      </div>
    </div>
  );
}