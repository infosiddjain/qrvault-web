'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Wire this up to your backend / email service (e.g. an API route,
    // Resend, Formspree, etc.) — this just simulates a submission.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-white p-8 text-center">
        <p className="text-base font-bold text-dark">Message sent</p>
        <p className="mt-2 text-sm text-muted">
          Thanks, {name || 'there'} — we&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-border bg-white p-6"
    >
      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">
          Name
        </label>
        <input
          required
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
          placeholder="Your name"
          className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-dark outline-none focus:border-primary"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">
          Email
        </label>
        <input
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
          placeholder="you@example.com"
          className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-dark outline-none focus:border-primary"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold text-muted">
          Message
        </label>
        <textarea
          required
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="How can we help?"
          rows={4}
          className="w-full resize-none rounded-xl border border-border bg-bg px-4 py-3 text-sm text-dark outline-none focus:border-primary"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-primary py-3 text-sm font-bold text-white transition-transform hover:scale-[1.01]"
      >
        Send message
      </button>
    </form>
  );
}
