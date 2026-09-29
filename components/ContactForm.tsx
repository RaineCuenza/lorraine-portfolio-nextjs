'use client';

import { FormEvent, useState } from 'react';

type Status = { type: 'idle' | 'success' | 'error'; messages?: string[] };

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ type: 'idle' });
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: 'idle' });

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok) {
        setStatus({ type: 'error', messages: result.errors ?? ['Please check the form and try again.'] });
      } else {
        setStatus({ type: 'success' });
        form.reset();
      }
    } catch {
      setStatus({ type: 'error', messages: ['Something went wrong. Please try again.'] });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="contact-form reveal" onSubmit={onSubmit} noValidate>
      {status.type === 'success' && (
        <div className="form-alert success">Thanks! Your message has been validated successfully. Connect this form to your preferred email service before deployment to send messages.</div>
      )}
      {status.type === 'error' && (
        <div className="form-alert error"><strong>Please check the form:</strong><ul>{status.messages?.map((message) => <li key={message}>{message}</li>)}</ul></div>
      )}
      <label>Name<input type="text" name="name" autoComplete="name" required /></label>
      <label>Email<input type="email" name="email" autoComplete="email" required /></label>
      <label>Subject<input type="text" name="subject" required /></label>
      <label>Message<textarea name="message" rows={6} required /></label>
      <button className="btn btn-dark" type="submit" disabled={submitting}>{submitting ? 'Sending…' : 'Send Message ↗'}</button>
    </form>
  );
}
