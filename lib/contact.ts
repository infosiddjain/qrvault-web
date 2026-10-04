// Shared by the contact form and its server action so both reject the same input.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ContactField = 'name' | 'email' | 'message';

export type ContactInput = {
  name: string;
  email: string;
  message: string;
  _gotcha?: string;
};

export type ContactErrors = Partial<Record<ContactField, string>>;

export type ContactResult =
  | { ok: true }
  | { ok: false; error: string; field?: ContactField; code?: string };

export function validateContact(input: ContactInput): ContactErrors {
  const name = input.name.trim();
  const email = input.email.trim();
  const message = input.message.trim();
  const errors: ContactErrors = {};

  if (!name) errors.name = 'Please enter your name.';
  else if (name.length < 2) errors.name = 'Name should be at least 2 characters.';
  else if (name.length > 100) errors.name = 'Name is too long.';

  if (!email) errors.email = 'Please enter your email.';
  else if (!EMAIL_RE.test(email)) errors.email = 'Please enter a valid email address.';

  if (!message) errors.message = 'Please write a message.';
  else if (message.length < 10) errors.message = 'Message should be at least 10 characters.';
  else if (message.length > 5000) errors.message = 'Message is too long (max 5000 characters).';

  return errors;
}
