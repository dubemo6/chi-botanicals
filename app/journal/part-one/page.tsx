import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
export default function JournalPartOne() {
  return (
    <>
      <Navbar dark />
      <main style={{
        padding: "8rem 4rem",
        fontFamily: "Courier New, monospace",
        background: "#f5f2ee",
        minHeight: "100vh",
        color: "#1a1a18"
      }}>
        <h1 style={{ fontSize: "1.5rem", letterSpacing: "0.2em", marginBottom: "2rem" }}>
          JOURNAL — PART ONE
        </h1>
        <p style={{ fontSize: "0.9rem", lineHeight: "1.8" }}>Coming soon.</p>
      </main>
      <Footer />
    </>
  );
}
