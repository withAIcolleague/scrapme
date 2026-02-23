"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type AccessCodeFormProps = {
  redirectTo: string;
};

export function AccessCodeForm({ redirectTo }: AccessCodeFormProps) {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!code.trim()) {
      setMessage("Please enter your access code.");
      return;
    }

    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/access-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code, redirectTo }),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        message?: string;
        redirectTo?: string;
      };

      if (!response.ok || !data.ok) {
        setMessage(data.message ?? "Failed to verify access code.");
        return;
      }

      router.push(data.redirectTo ?? "/editor");
      router.refresh();
    } catch {
      setMessage("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="access-form">
      <label htmlFor="access-code-input" className="sr-only">
        Access code
      </label>
      <input
        id="access-code-input"
        type="text"
        value={code}
        onChange={(event) => setCode(event.target.value)}
        placeholder="Enter your invite code"
        className="access-input"
        disabled={isSubmitting}
      />
      <button type="submit" className="access-submit" disabled={isSubmitting}>
        {isSubmitting ? "Checking..." : "Enter"}
      </button>
      {message ? (
        <p className="access-message" aria-live="polite">
          {message}
        </p>
      ) : null}
    </form>
  );
}
