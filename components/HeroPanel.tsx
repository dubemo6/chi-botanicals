import Image from "next/image";
import { ReactNode } from "react";
import styles from "./HeroPanel.module.css";

interface HeroPanelProps {
  image: string | null;
  alt: string;
  side: "left" | "right";
  children?: ReactNode;
}

export default function HeroPanel({ image, alt, side, children }: HeroPanelProps) {
  return (
    <div className={`${styles.panel} ${styles[side]}`}>
      {image ? (
        <Image
          src={image}
          alt={alt}
          fill
          className={styles.img}
          sizes="50vw"
          priority
        />
      ) : (
        <div className={styles.placeholder} aria-label={alt}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <rect x="3" y="3" width="18" height="18" rx="1" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
          <span>Your image goes here</span>
        </div>
      )}
      {children && <div className={styles.overlay}>{children}</div>}
    </div>
  );
}