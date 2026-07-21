// StudioPartnership.tsx
"use client";

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./StudioPartnership.module.css";

export default function StudioPartnership() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");

    try {
      const SERVICE_ID = "service_hgy45ug";
      const PUBLIC_KEY = "okPQ4HpngoXN8_9F_";
      const ADMIN_TEMPLATE_ID = "template_4uk8jaw";
      const GUEST_TEMPLATE_ID = "template_kq7kzaq";

      const formData = new FormData(formRef.current);
      const templateParams = {
        title: formData.get("title"),
        user_name: formData.get("user_name"),
        brand_name: formData.get("brand_name"),
        user_email: formData.get("user_email"),
        enquiry_type: formData.get("enquiry_type"),
        project_details: formData.get("project_details"),
        timeline: formData.get("timeline"),
      };

      await emailjs.send(SERVICE_ID, ADMIN_TEMPLATE_ID, templateParams, PUBLIC_KEY);
      await emailjs.send(SERVICE_ID, GUEST_TEMPLATE_ID, templateParams, PUBLIC_KEY);

      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Dual Dispatch Failure:", error);
      setStatus("error");
    }
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.splitGrid} id="partnership-form">

        {/* Left: heading, photo, copy */}
        <div className={`${styles.leftPanel} reveal`}>
          <p className={styles.partnerLabel}>PARTNER WITH CHI BOTANICAL, COLLABORATE WITH INTENTION</p>

          <div className={styles.photoWrap}>
            <img src="/images/chi1.webp" alt="Chi Botanical partnership" className={styles.photo} />
          </div>

          <p className={styles.partnerBody}>
            Chi Botanical collaborates with brands aligned with intentional
            wellbeing, elevated skincare and thoughtful storytelling.
          </p>
          <p className={styles.partnerBody}>
            Each partnership is approached with care, authenticity and creative
            intention — creating experiences that feel meaningful, refined and lasting.
          </p>
        </div>

        {/* Right: form */}
        <div className={styles.rightPanel}>
          <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
            <input type="hidden" name="title" value="New Partnership Inquiry" />

            <div className={`${styles.formRow} reveal`}>
              <div className={styles.fieldGroup}>
                <label htmlFor="user_name" className={styles.fieldLabel}>FULL NAME</label>
                <input type="text" id="user_name" name="user_name" className={styles.input} required />
              </div>
              <div className={styles.fieldGroup}>
                <label htmlFor="brand_name" className={styles.fieldLabel}>BRAND / COMPANY NAME</label>
                <input type="text" id="brand_name" name="brand_name" className={styles.input} required />
              </div>
            </div>

            <div className={`${styles.formRow} reveal`}>
              <div className={styles.fieldGroup}>
                <label htmlFor="user_email" className={styles.fieldLabel}>EMAIL ADDRESS</label>
                <input type="email" id="user_email" name="user_email" className={styles.input} required />
              </div>
              <div className={styles.fieldGroup}>
                <label htmlFor="enquiry_type" className={styles.fieldLabel}>TYPE OF ENQUIRY</label>
                <div className={styles.selectWrapper}>
                  <select id="enquiry_type" name="enquiry_type" className={styles.select} defaultValue="" required>
                    <option value="" disabled hidden>Select an option</option>
                    <option value="Brand Partnership">Brand Partnership</option>
                    <option value="Content Collaboration">Content Collaboration</option>
                    <option value="Studio Event Hosting">Studio Event Hosting</option>
                    <option value="Corporate Wellness">Corporate Wellness</option>
                  </select>
                </div>
              </div>
            </div>

            <div className={`${styles.fullWidthRow} reveal`}>
              <div className={styles.fieldGroup}>
                <label htmlFor="project_details" className={styles.fieldLabel}>PROJECT DETAILS</label>
                <textarea id="project_details" name="project_details" className={styles.textarea} rows={2} required />
              </div>
            </div>

            <div className={`${styles.fullWidthRow} reveal`}>
              <div className={styles.fieldGroup}>
                <label htmlFor="timeline" className={styles.fieldLabel}>TIMELINE</label>
                <input type="text" id="timeline" name="timeline" className={styles.input} required />
              </div>
            </div>

            <div className={`${styles.actionRow} reveal`}>
              <button type="submit" className={styles.submitBtn} disabled={status === "sending"}>
                {status === "sending" ? "TRANSMITTING..." : "SUBMIT"}
              </button>
            </div>

            {status === "success" && (
              <p className={styles.successMessage}>✓ Sent — we will respond within 24 hours.</p>
            )}
            {status === "error" && (
              <p className={styles.errorMessage}>✕ Transmission failed. Please retry.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}