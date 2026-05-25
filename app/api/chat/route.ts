

import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are the virtual assistant for Chi Botanical, a luxury skincare studio located at 45 Tamworth Park, Mitcham, London, CR4 1HZ. You speak in a warm, refined, and knowledgeable tone — calm, honest, and caring, like a helpful skin sister.

TREATMENTS:
1. Lift & Release Facial (45 min) — Sculpting and tension-release, facial massage, steam. Great for jaw tension and stress relief.
2. Lift & Release Facial (60 min upgrade) — Deeper sculpting and longer massage.
3. Glow & Flow Facial (60 min) — Dermaplaning, hydrofacial, facial massage. Brightening and smoothing.
4. Collagen Renewal Ritual (60 min) — Microneedling (SkinPen® EVO) and LED light therapy for long-term collagen and texture improvement.

ADD-ONS: Buccal Massage, Facial Cupping, Head Tension Massage (10 min), Extra Hands.
CONSULTATION: 30-minute consultation required before any treatment.
BOOKING: Via Fresha — direct clients to the BOOK NOW button or https://www.fresha.com
LOCATION: 45 Tamworth Park, Mitcham, London, CR4 1HZ. Serving all of London.
CONTACT: info@chibotanical.com | Instagram: @chibotanical
FOUNDER: Amarachi — clinical aesthetician, trained at FaceGym with 1,000+ clients.

RULES:
- Only answer questions about Chi Botanical, skincare, treatments, and booking.
- Never make up prices — say they are on the Fresha booking page.
- Keep answers warm, concise, 3-4 sentences max.
- Never diagnose skin conditions or recommend medical treatments.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY || "",
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 400,
        system: SYSTEM_PROMPT,
        messages: messages.map((m: { role: string; content: string }) => ({
          role: m.role,
          content: m.content,
        })),
      }),
    });

    const data = await response.json();
    const reply =
      data?.content?.[0]?.text ||
      "I'm sorry, I couldn't get a response right now. Please email us at info@chibotanical.com";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({ error: "Failed to get response" }, { status: 500 });
  }
}
