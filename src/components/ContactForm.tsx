
"use client";

import { useState } from "react";

const fieldClass =
  "w-full rounded-xl border border-white/10 bg-[#080e18] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-sky-400";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your message.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-5 text-left">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm text-slate-300">
          Your name
          <input
            name="name"
            required
            maxLength={100}
            autoComplete="name"
            placeholder="Full name"
            className={`${fieldClass} mt-2`}
          />
        </label>

        <label className="block text-sm text-slate-300">
          Email address
          <input
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            placeholder="you@example.com"
            className={`${fieldClass} mt-2`}
          />
        </label>
      </div>

      <label className="block text-sm text-slate-300">
        Inquiry type
        <select
          name="inquiryType"
          required
          defaultValue=""
          className={`${fieldClass} mt-2`}
        >
          <option value="" disabled>
            Select an inquiry
          </option>
          <option>General inquiry</option>
          <option>Aerospace engineering</option>
          <option>Research and projects</option>
          <option>Technical collaboration</option>
          <option>Feedback</option>
          <option>Other</option>
        </select>
      </label>

      <label className="block text-sm text-slate-300">
        Subject
        <input
          name="subject"
          required
          maxLength={150}
          placeholder="What would you like to discuss?"
          className={`${fieldClass} mt-2`}
        />
      </label>

      <label className="block text-sm text-slate-300">
        Message
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={6}
          placeholder="Tell us about your inquiry..."
          className={`${fieldClass} mt-2 resize-y`}
        />
      </label>

      {/* Honeypot field for basic bot protection */}
      <div className="hidden" aria-hidden="true">
        <label>
          Leave this field empty
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-sky-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-sky-300 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send inquiry ↗"}
      </button>

      {status === "success" && (
        <p role="status" className="text-sm text-emerald-300">
          Your inquiry has been sent. Thank you for contacting VORA.
        </p>
      )}

      {status && status !== "success" && (
        <p role="alert" className="text-sm text-rose-300">
          {status}
        </p>
      )}

      <p className="text-xs leading-6 text-slate-500">
        Your information will be used to respond to your inquiry.
      </p>
    </form>
  );
}
