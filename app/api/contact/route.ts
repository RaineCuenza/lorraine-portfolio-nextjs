import { NextResponse } from 'next/server';

function clean(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const name = clean(body.name);
  const email = clean(body.email);
  const subject = clean(body.subject);
  const message = clean(body.message);
  const errors: string[] = [];

  if (!name) errors.push('Please enter your name.');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Please enter a valid email address.');
  if (!subject) errors.push('Please enter a subject.');
  if (!message) errors.push('Please enter a message.');

  if (errors.length) return NextResponse.json({ errors }, { status: 400 });

  // Validation-only starter endpoint. Connect Resend, Nodemailer, Formspree,
  // or another provider here when you are ready to send real email.
  return NextResponse.json({ ok: true });
}
