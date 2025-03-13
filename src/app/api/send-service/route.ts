import { EmailService } from '@/app/components/email-service';
import React from 'react';
import { Resend } from 'resend';

// simply checks if you have the env key and its connected
if (!process.env.RESEND_KEY) {
  throw new Error('RESEND_KEY is not defined in environment variables');
}

const resend = new Resend(process.env.RESEND_KEY);

export async function POST(req: any) {
  // Need to check if the mothod comming in is POST
  if (req.method === 'POST') {
    const content = await req.json()
    const { name, email, service, budget, timeline, message } = content;
  try {
    const { data, error } = await resend.emails.send({
      from: 'unfold@codewithali.com',
      to: ['blazehunterhp@gmail.com', 'aalibrahimi0@gmail.com'],
      subject: 'Your Service is Needed!',
      react: EmailService({ name, email, service, budget, timeline, message }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
}
