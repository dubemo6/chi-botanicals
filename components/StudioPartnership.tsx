"use client";

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./StudioPartnership.module.css";

export default function StudioPartnership() {
  const formRef = useRef<HTMLFormElement>(null);
  
  // Status Tracking: 'idle' | 'sending' | 'success' | 'error'
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    try {
      // ─── EMAILJS CREDENTIAL CONFIGURATION ───
      const SERVICE_ID = "service_hgy45ug";
      const PUBLIC_KEY = "okPQ4HpngoXN8_9F_";
      const ADMIN_TEMPLATE_ID = "template_4uk8jaw";
      const GUEST_TEMPLATE_ID = "template_kq7kzaq";

      await emailjs.sendForm(
        SERVICE_ID,
        ADMIN_TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      await emailjs.sendForm(
        SERVICE_ID,
        GUEST_TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Dual Dispatch Failure:", error);
      setStatus("error");
    }
  };

  return (
    <section className={styles.wrapper}>
      {/* Upper Layout: Split Brand Showcase Grid */}
      <div className={styles.splitGrid}>
        
        {/* Left Panel: Solid Dark Premium Contrast Column */}
        <div className={styles.leftPanel}>
          <div className={`${styles.leftContent} reveal`}>
            <p className={styles.partnerLabel}>PARTNER WITH CHI BOTANICAL</p>
            <h2 className={styles.partnerTitle}>Collaborate With Intention</h2>
            <hr className={styles.titleLine} />
            <p className={styles.partnerBody}>
              Chi Botanical collaborates with brands aligned with intentional
              wellbeing, elevated skincare and thoughtful storytelling.
            </p>
            <p className={styles.partnerBody}>
              Each partnership is approached with care, authenticity and creative
              intention — creating experiences that feel meaningful, refined and lasting.
            </p>
            <a href="#partnership-form" className={styles.enquireAnchorBtn}>
              ENQUIRE
            </a>
          </div>
        </div>

        {/* Right Panel: Clean Workspace Form Fields Grid */}
        <div className={styles.rightPanel} id="partnership-form">
          <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
            
            {/* Row 1: Split Name & Brand fields */}
            <div className={`${styles.formRow} reveal`} style={{ "--reveal-delay": "0.05s" } as React.CSSProperties}>
              <div className={styles.fieldGroup}>
                <label htmlFor="user_name" className={styles.fieldLabel}>Full Name</label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  placeholder="Your name"
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.fieldGroup}>
                <label htmlFor="brand_name" className={styles.fieldLabel}>Brand / Company Name</label>
                <input
                  type="text"
                  id="brand_name"
                  name="brand_name"
                  placeholder="Brand or company"
                  className={styles.input}
                  required
                />
              </div>
            </div>

            {/* Row 2: Split Email & Select fields */}
            <div className={`${styles.formRow} reveal`} style={{ "--reveal-delay": "0.15s" } as React.CSSProperties}>
              <div className={styles.fieldGroup}>
                <label htmlFor="user_email" className={styles.fieldLabel}>Email Address</label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  placeholder="you@example.com"
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.fieldGroup}>
                <label htmlFor="enquiry_type" className={styles.fieldLabel}>Type of Enquiry</label>
                <div className={styles.selectWrapper}>
                  <select
                    id="enquiry_type"
                    name="enquiry_type"
                    className={styles.select}
                    defaultValue=""
                    required
                  >
                    <option value="" disabled hidden>Select an option</option>
                    <option value="Brand Partnership">Brand Partnership</option>
                    <option value="Content Collaboration">Content Collaboration</option>
                    <option value="Studio Event Hosting">Studio Event Hosting</option>
                    <option value="Corporate Wellness">Corporate Wellness</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Row 3: Textarea Project Details */}
            <div className={`${styles.fullWidthRow} reveal`} style={{ "--reveal-delay": "0.25s" } as React.CSSProperties}>
              <div className={styles.fieldGroup}>
                <label htmlFor="project_details" className={styles.fieldLabel}>Project Details</label>
                <textarea
                  id="project_details"
                  name="project_details"
                  placeholder="Tell me more about your project, ideas and goals..."
                  className={styles.textarea}
                  rows={4}
                  required
                />
              </div>
            </div>

            {/* Row 4: Timeline input */}
            <div className={`${styles.fullWidthRow} reveal`} style={{ "--reveal-delay": "0.35s" } as React.CSSProperties}>
              <div className={styles.fieldGroup}>
                <label htmlFor="timeline" className={styles.fieldLabel}>Timeline</label>
                <input
                  type="text"
                  id="timeline"
                  name="timeline"
                  placeholder="e.g. May – August 2026"
                  className={styles.input}
                  required
                />
              </div>
            </div>

            {/* Row 5: Action Submit Button */}
            <div className={`${styles.actionRow} reveal`} style={{ "--reveal-delay": "0.4s" } as React.CSSProperties}>
              <button 
                type="submit" 
                className={styles.submitBtn}
                disabled={status === "sending"}
              >
                {status === "sending" ? "TRANSMITTING..." : "SUBMIT ENQUIRY"}
              </button>
            </div>

            {status === "success" && (
              <p className={styles.successMessage}>
                ✓ Sent with intention. Check your inbox for confirmation; we will respond within 24 hours.
              </p>
            )}
            {status === "error" && (
              <p className={styles.errorMessage}>
                ✕ Transmission failed. Please verify fields or retry.
              </p>
            )}
          </form>
        </div>

      </div>

      {/* Lower Layout: Minimalist Editorial Footer Banner */}
      <div className={styles.footerAccent}>
        <div className={`${styles.accentContent} reveal`}>
          <p className={styles.accentText}>
            A return to slower beauty, intentional care and meaningful connection.
          </p>
          <hr className={styles.accentLine} />
        </div>
      </div>
    </section>
  );
}