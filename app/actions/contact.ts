'use server';

import { validateContact, type ContactInput, type ContactResult } from '@/lib/contact';

const ENDPOINT = 'https://hub-form.vercel.app/api/f/kbUvOf91Kjwv';

export async function sendContact(input: ContactInput): Promise<ContactResult> {
  // Bots fill the hidden field; pretend it worked so they don't retry.
  if (input._gotcha) return { ok: true };

  const errors = validateContact(input);
  const [field] = Object.keys(errors) as (keyof typeof errors)[];
  if (field) return { ok: false, field, error: errors[field]! };

  if (!process.env.HUB_KEY) {
    console.error('HUB_KEY is not set');
    return { ok: false, error: 'The contact form is not configured yet. Please email us instead.' };
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.HUB_KEY}`,
      },
      body: JSON.stringify({
        name: input.name.trim(),
        email: input.email.trim(),
        message: input.message.trim(),
      }),
      cache: 'no-store',
    });
    const data = await res.json().catch(() => null);
    if (data?.ok) return { ok: true };

    return {
      ok: false,
      code: data?.code,
      field: ['name', 'email', 'message'].includes(data?.field) ? data.field : undefined,
      error: data?.error || 'Something went wrong. Please try again.',
    };
  } catch {
    return { ok: false, error: 'Could not reach the server. Please try again.' };
  }
}
