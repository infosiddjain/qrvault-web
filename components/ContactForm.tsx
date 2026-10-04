'use client';

import { useState, useCallback, FormEvent } from 'react';
import { IoSendOutline } from 'react-icons/io5';
import { sendContact } from '@/app/actions/contact';
import { validateContact, type ContactErrors, type ContactField } from '@/lib/contact';
import Toast, { type ToastState } from './Toast';

const EMPTY = { name: '', email: '', message: '' };

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [gotcha, setGotcha] = useState('');
  const [errors, setErrors] = useState<ContactErrors>({});
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState<ToastState>(null);
  const closeToast = useCallback(() => setToast(null), []);

  const update = (field: ContactField, value: string) => {
    setValues(v => ({ ...v, [field]: value }));
    if (errors[field]) setErrors(e => ({ ...e, [field]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const found = validateContact(values);
    setErrors(found);
    if (Object.keys(found).length) {
      setToast({ type: 'error', message: 'Please fix the highlighted fields.' });
      return;
    }

    setSending(true);
    const result = await sendContact({ ...values, _gotcha: gotcha }).catch(() => ({
      ok: false as const,
      error: 'Something went wrong. Please try again.',
      field: undefined,
    }));
    setSending(false);

    if (result.ok) {
      setValues(EMPTY);
      setErrors({});
      setToast({ type: 'success', message: "Thanks! Your message has been sent. We'll reply soon." });
    } else {
      if (result.field) setErrors({ [result.field]: result.error });
      setToast({ type: 'error', message: result.error });
    }
  };

  const fieldClass = (field: ContactField) =>
    `field ${errors[field] ? 'border-danger/70 focus:border-danger focus:ring-danger/20' : ''}`;

  const errorText = (field: ContactField) =>
    errors[field] ? (
      <p id={`cf-${field}-error`} className="mt-1.5 text-xs text-danger">
        {errors[field]}
      </p>
    ) : null;

  const a11y = (field: ContactField) => ({
    'aria-invalid': !!errors[field],
    'aria-describedby': errors[field] ? `cf-${field}-error` : undefined,
  });

  return (
    <>
      <form onSubmit={handleSubmit} noValidate className="panel space-y-5 p-6 md:p-8">
        <div>
          <h2 className="font-display text-2xl font-semibold text-text">Send a message</h2>
          <p className="mt-1 text-sm text-soft">Fill in the form and we'll get back to you by email.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="cf-name" className="mb-2 block text-xs font-medium text-soft">
              Name
            </label>
            <input
              id="cf-name"
              name="name"
              value={values.name}
              onChange={e => update('name', e.target.value)}
              type="text"
              autoComplete="name"
              placeholder="Your name"
              maxLength={100}
              className={fieldClass('name')}
              {...a11y('name')}
            />
            {errorText('name')}
          </div>
          <div>
            <label htmlFor="cf-email" className="mb-2 block text-xs font-medium text-soft">
              Email
            </label>
            <input
              id="cf-email"
              name="email"
              value={values.email}
              onChange={e => update('email', e.target.value)}
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              className={fieldClass('email')}
              {...a11y('email')}
            />
            {errorText('email')}
          </div>
        </div>

        <div>
          <label htmlFor="cf-message" className="mb-2 block text-xs font-medium text-soft">
            Message
          </label>
          <textarea
            id="cf-message"
            name="message"
            value={values.message}
            onChange={e => update('message', e.target.value)}
            placeholder="How can we help?"
            rows={5}
            maxLength={5000}
            className={`${fieldClass('message')} resize-none`}
            {...a11y('message')}
          />
          {errorText('message')}
        </div>

        {/* Spam trap: hidden from people, bots fill it. */}
        <input
          type="text"
          name="_gotcha"
          value={gotcha}
          onChange={e => setGotcha(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden
          className="hidden"
        />

        <button
          type="submit"
          disabled={sending}
          className="btn-gold w-full disabled:cursor-not-allowed disabled:opacity-60"
        >
          <IoSendOutline aria-hidden />
          {sending ? 'Sending…' : 'Send message'}
        </button>
      </form>

      <Toast toast={toast} onClose={closeToast} />
    </>
  );
}
