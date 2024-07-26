
import { NextRequest, NextResponse } from 'next/server';
import { sendMail } from '../Mail/Email';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    await sendMail(name, email, message);
    return NextResponse.json({ message: 'Email sent successfully, you will receive a confirmation email shortly' });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}

