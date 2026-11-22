import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, company, reason, message } = data;

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "A valid email address is required" }, { status: 400 });
    }

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    // Server-side logging for diligence & lead tracking
    console.info(`[INFPL Contact Lead] from: ${name} (${email}), company: ${company || "N/A"}, reason: ${reason}`);

    // If an external mail service (e.g., Resend) is configured via env, send it
    if (process.env.RESEND_API_KEY) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "Innaya Contact Form <inquiries@innayanutrifoods.com>",
            to: ["ceo@innayanutrifoods.com"],
            reply_to: email,
            subject: `[${reason || "General"}] Executive Inquiry — ${name} (${company || "Individual"})`,
            text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || "N/A"}\nReason: ${reason}\n\nMessage:\n${message}`,
          }),
        });
      } catch (err) {
        console.error("Failed to deliver email via Resend:", err);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been delivered to the CEO's office. We respond within 48 hours.",
    });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Failed to process inquiry" }, { status: 500 });
  }
}
