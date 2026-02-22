"use client";

import { FormEvent, useState } from "react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email.");
      return;
    }

    setMessage("UI connected. Supabase save will be added in L3/L4.");
    setEmail("");
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
      />
      <button type="submit" className="waitlist-submit">
        Join
      </button>
      {message ? (
        <p className="waitlist-message" aria-live="polite">
          {message}
        </p>
      ) : null}
    </form>
  );
}
