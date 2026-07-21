import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export default function JournalPartTwo() {
  return (
    <>
      <Navbar dark />
      <main style={{
        position: "relative",
        padding: "8rem 4rem",
        fontFamily: "Courier New, monospace",
        minHeight: "100vh",
        color: "#f7f7f7", /* Flipped main text color to white */
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        boxSizing: "border-box",
        overflow: "hidden",
        
        /* ─── PURE RAW BACKGROUND IMAGE CONFIGURATION ─── */
        backgroundImage: "url('/images/face4.webp')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}>
        
        {/* Content Box Layered Directly Over The Pure Image */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ 
            fontSize: "1.5rem", 
            letterSpacing: "0.2em", 
            marginBottom: "2rem",
            fontWeight: "700",
            color: "#f7f7f7" /* Enforces structural heading white alignment */
          }}>
            JOURNAL — PART TWO
          </h1>
          <p style={{ 
            fontSize: "0.9rem", 
            lineHeight: "1.8",
            fontWeight: "600",
            color: "#f7f7f7" /* Enforces structural paragraph white alignment */
          }}>
            Coming soon.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}