
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const allowedTypes = new Set([
  "General inquiry",
  "Aerospace engineering",
  "Research and projects",
  "Technical collaboration",
  "Feedback",
  "Other",
]);

function clean(value: unknown, maxLength: number) {
  return typeof value === "string"
    ? value.trim().slice(0, maxLength)
    : "";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Silently accept bot submissions without sending email.
    if (clean(body.website, 200)) {
      return NextResponse.json({ success: true });
    }

    const name = clean(body.name, 100);
    const email = clean(body.email, 254);
    const inquiryType = clean(body.inquiryType, 80);
    const subject = clean(body.subject, 150);
    const message = clean(body.message, 5000);

    if (
      !name ||
      !email ||
      !inquiryType ||
      !subject ||
      message.length < 10
    ) {
      return NextResponse.json(
        { error: "Please complete all fields correctly." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!allowedTypes.has(inquiryType)) {
      return NextResponse.json(
        { error: "Please select a valid inquiry type." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const inbox = process.env.VORA_INQUIRY_EMAIL;
    const sender = process.env.VORA_FROM_EMAIL;

    if (!apiKey || !inbox || !sender) {
      console.error("VORA contact email environment variables are missing.");

      return NextResponse.json(
        { error: "The contact service is not configured yet. Please try again later." },
        { status: 503 }
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [inbox],
        reply_to: email,
        subject: `[VORA Inquiry] ${subject}`,
        text: [
        "New inquiry received through the VORA website.",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Inquiry type: ${inquiryType}`,
        `Subject: ${subject}`,
        "",
        "Message:",
        message,
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      const result = await response.json().catch(() => null);
      const errorMessage =
        result && typeof result.message === "string"
          ? result.message
          : `Resend returned status ${response.status}`;
      console.error("VORA inquiry email delivery failed:", errorMessage);

      return NextResponse.json(
        { error: "Your message could not be sent. Please try again later." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("VORA contact endpoint error:", error);

    return NextResponse.json(
      { error: "Unable to process your message right now." },
      { status: 500 }
    );
  }
}
