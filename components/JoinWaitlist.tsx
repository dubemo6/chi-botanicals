"use client";

import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import styles from "@/components/JoinWaitlist.module.css";

const benefits = [
  "Exclusive skincare education and insights",
  "Invitations to limited-release experiences",
  "Thoughtful wellness resources and rituals",
  "Early access to future offerings",
];

export default function JoinWaitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("submitting");

    const SERVICE_ID = "service_iaabgov";
    const INTERNAL_TEMPLATE_ID = "template_9ja1dfr"; 
    const USER_TEMPLATE_ID = "template_dkqxv21";         
    const PUBLIC_KEY = "ilQN0zNZYa1lDrMMq";

    const templateParams = {
      user_email: email,
      source_form: "Community Page - Lower Grid Section",
    };

    try {
      await Promise.all([
        emailjs.send(SERVICE_ID, INTERNAL_TEMPLATE_ID, templateParams, PUBLIC_KEY),
        emailjs.send(SERVICE_ID, USER_TEMPLATE_ID, templateParams, PUBLIC_KEY)
      ]);

      localStorage.setItem("hasJoinedWaitlist", "true");
      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error("EmailJS Section Dispatch Error:", error);
      setStatus("error");
    }
  };

  return (
    // Cleaned: The background container stays fully solid and present
    <section className={styles.waitlist}>
      
      {/* Left Image Section — Fades up dynamically */}
      <div className={`${styles.imageWrap} reveal`}>
        <img
          src="/images/any4.webp"
          alt="Skincare dropper texture closeup"
          className={styles.image}
        />
      </div>

      {/* Centre Form — Fades up dynamically */}
      <div className={`${styles.formWrap} reveal`}>
        <h2 className={styles.title}>JOIN THE WAITLIST</h2>
        <p className={styles.body}>
          Be the first to receive invitations to upcoming workshops,
          community gatherings and educational offerings.
        </p>
        
        <form onSubmit={handleSubmit} className={styles.inputRow}>
          <input
            type="email"
            placeholder="Email address"
            className={styles.input}
            aria-label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "submitting" || status === "success"}
            required
          />
          <button 
            className={styles.btn} 
            type="submit"
            disabled={status === "submitting" || status === "success"}
          >
            {status === "submitting" ? "JOINING..." : status === "success" ? "ADDED" : "JOIN THE WAITLIST"}
          </button>
        </form>

        {status === "success" && (
          <p className={styles.statusMessageSuccess}>✦ Thank you. You are on the list.</p>
        )}
        {status === "error" && (
          <p className={styles.statusMessageError}>Something went wrong. Please try again.</p>
        )}
      </div>

      {/* Right Benefits Column — Fades up dynamically */}
      <div className={`${styles.benefits} reveal`}>
        <p className={styles.benefitsLabel}>YOU'LL ALSO RECEIVE:</p>
        <ul className={styles.benefitsList}>
          {benefits.map((b) => (
            <li key={b} className={styles.benefitItem}>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}