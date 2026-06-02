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
    if (!hasJoinedWaitlist) {
      setIsOpen(true);
    }
  }, []);

  const closeWithButton = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const SERVICE_ID = "service_iaabgov";
    const INTERNAL_TEMPLATE_ID = "template_9ja1dfr"; 
    const USER_TEMPLATE_ID = "template_dkqxv21";         
    const PUBLIC_KEY = "ilQN0zNZYa1lDrMMq";

    const templateParams = {
      user_email: email,
    };

    try {
      await Promise.all([
        emailjs.send(SERVICE_ID, INTERNAL_TEMPLATE_ID, templateParams, PUBLIC_KEY),
        emailjs.send(SERVICE_ID, USER_TEMPLATE_ID, templateParams, PUBLIC_KEY)
      ]);
      
      // Save to localStorage so they never see the modal again on page reload
      localStorage.setItem("hasJoinedWaitlist", "true");
      
      // Switch to the beautiful inline success view instead of a pop-up alert
      setIsSuccess(true);

    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.backdrop}>
      <div className={styles.modalCard}>
        
        {/* Close Button */}
        <button onClick={closeWithButton} className={styles.closeButton} aria-label="Close modal">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Left Side: Image Section */}
        <div className={styles.imageSection}>
          <Image 
            src="/images/fruit6.webp" 
            alt="Chi Botanical experience"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Right Side: Dynamic Content Section */}
        <div className={styles.contentSection}>
          {!isSuccess ? (
            /* ── VIEW 1: REGISTRATION FORM ── */
            <>
              <span className={styles.launchTag}>Launching Autumn 2026</span>
              <h2 className={styles.title}>Be the first to experience Chi Botanical.</h2>
              <p className={styles.description}>
                Chi Botanical is a skin studio rooted in slow beauty, intentional care and skin health. <br />

              <br />  Register your interest to receive early access to treatment bookings, launch updates, 
                exclusive education and future community offerings.
              </p>

              <form onSubmit={handleSubmit} className={styles.form}>
                <input 
                  type="email" 
                  required
                  placeholder="Email address" 
                  className={styles.inputField}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                />
                <button 
                  type="submit" 
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Joining..." : "Join the List"}
                </button>
              </form>
            </>
          ) : (
            /* ── VIEW 2: HIGH-END SUCCESS MESSAGE ── */
            <div style={{ textAlign: 'center', width: '100%', padding: '2rem 0', animation: 'fadeIn 0.5s ease' }}>
              <div style={{ color: '#8c8a7e', fontSize: '24px', marginBottom: '1.5rem' }}>✦</div>
              <h2 className={styles.title} style={{ textAlign: 'center', marginBottom: '1rem' }}>
                You are on the list.
              </h2>
              <p className={styles.description} style={{ textAlign: 'center', marginBottom: '2rem' }}>
                Thank you for connecting with us. A confirmation email has been sent to your inbox. 
                We look forward to welcoming you to Chi Botanical soon.
              </p>
              <button 
                onClick={closeWithButton} 
                className={styles.submitButton}
                style={{ maxWidth: '200px', margin: '0 auto' }}
              >
                Close Window
              </button>
            </div>
          )}

          {/* Footer Details */}
          <div className={styles.footerDivider}>
            <div className={styles.iconWrapper}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M12 22V12M12 12c2.5 0 5-1.5 5-4.5S14.5 4 12 7c-2.5-3-5-1.5-5 1.5s2.5 4.5 5 4.5z" strokeLinecap="round"/>
              </svg>
            </div>
            <p className={styles.footerText}>No spam — just thoughtful updates from Chi Botanical.</p>
          </div>
        </div>

      </div>
    </div>
  );
}