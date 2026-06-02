"use client";

import styles from "./ImageBanner.module.css";

export default function ImageBanner({ src = "/images/banner.webp", alt = "" }) {
  return (
    <div className={styles.banner}>
      <img src={src} alt={alt} className={`${styles.bannerImg} reveal`} />
    </div>
  );
}