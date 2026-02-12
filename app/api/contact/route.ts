import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const result = await resend.emails.send({
      from: 'Website Contact <info@factorinc.com>',
      to: 'jthomas@factorinc.com',
      subject: 'New Contact Form Submission',
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // If Resend returns an error object, handle it
    if (result.error) {
      console.error('Resend error:', result.error);
      return NextResponse.json(
        { error: result.error },
        { status: result.error.statusCode || 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
