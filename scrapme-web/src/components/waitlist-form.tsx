"use client";

import { FormEvent, useState } from "react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email.");
      return;
    }

    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = (await response.json()) as { ok?: boolean; message?: string };

      if (!response.ok || !data.ok) {
        setMessage(data.message ?? "Failed to submit.");
        return;
      }

      setMessage(data.message ?? "You're on the waitlist.");
      setEmail("");
    } catch {
      setMessage("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="waitlist-form">
      <label htmlFor="waitlist-email" className="sr-only">
        Email
      </label>
      <input
        id="waitlist-email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="you@example.com"
        autoComplete="email"
        className="waitlist-input"
        disabled={isSubmitting}
      />
      <button type="submit" className="waitlist-submit" disabled={isSubmitting}>
        {isSubmitting ? "Joining..." : "Join"}
      </button>
      {message ? (
        <p className="waitlist-message" aria-live="polite">
          {message}
        </p>
      ) : null}
    </form>
  );
}
