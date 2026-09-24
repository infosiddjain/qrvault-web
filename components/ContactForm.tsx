'use client';

import { useState, FormEvent } from 'react';
import { IoSendOutline, IoCheckmarkCircle } from 'react-icons/io5';
import { SUPPORT_EMAIL } from './site';

// There is no backend, so the form hands off to the visitor's mail app with
// everything pre-filled instead of pretending the message was sent.
export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [opened, setOpened] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `QR Vault enquiry from ${name.trim()}`;
    const body = `${message.trim()}\n\n${name.trim()}\n${email.trim()}`;
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  };

  return (
    <form onSubmit={handleSubmit} className="panel space-y-5 p-6 md:p-8">
      <div>
        <h2 className="font-display text-2xl font-semibold text-text">Send a message</h2>
        <p className="mt-1 text-sm text-soft">
          This opens your email app with the message ready to send.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-2 block text-xs font-medium text-soft">
            Name
          </label>
          <input
            id="cf-name"
            required
            value={name}
            onChange={e => setName(e.target.value)}
            type="text"
            autoComplete="name"
            placeholder="Your name"
            className="field"
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="mb-2 block text-xs font-medium text-soft">
            Email
          </label>
          <input
            id="cf-email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className="field"
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" className="mb-2 block text-xs font-medium text-soft">
          Message
        </label>
        <textarea
          id="cf-message"
          required
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="How can we help?"
          rows={5}
          className="field resize-none"
        />
      </div>

      <button type="submit" className="btn-gold w-full">
        <IoSendOutline aria-hidden />
        Send message
      </button>

      {opened && (
        <p role="status" className="flex items-center gap-2 text-sm text-soft">
          <IoCheckmarkCircle className="shrink-0 text-gold" aria-hidden />
          Your email app should now be open. If not, write to {SUPPORT_EMAIL}.
        </p>
      )}
    </form>
  );
}
