import { EmailContact } from '@/app/components/email-contact';
import React from 'react';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_KEY as string);

export async function POST(req: any) {
  // Need to check if the mothod comming in is POST
  if (req.method === 'POST') {
    const content = await req.json()
    const { email, message } = content;
  try {
    const { data, error } = await resend.emails.send({
      from: 'unfold@codewithali.com',
      to: ['blazehunterhp@gmail.com', 'aalibrahimi0@gmail.com'],
      subject: 'Client Contact Incoming',
      react: EmailContact({ email, message }) as React.ReactElement,
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
