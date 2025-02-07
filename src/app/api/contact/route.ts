import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import { rateLimit } from '@/lib/rate-limit';

const resend = new Resend(process.env.RESEND_API_KEY);

const limiter = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 500
});

// Reuse the same validation schema from the frontend
const formSchema = z.object({
  name: z.string().min(2).nonempty(),
  surname: z.string().min(2).nonempty(),
  phone: z.string().regex(/^\+[1-9][0-9]{6,14}$/),
  email: z.string().email(),
  message: z.string().min(10),
  acceptTerms: z.boolean().refine((val) => val === true),
});

export async function POST(request: Request) {
  try {
    // Rate limiting check
    const ip = request.headers.get('x-forwarded-for') || 'anonymous';
    const rateLimitResult = await limiter.check(5, `contact_form_${ip}`);
    
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const validatedData = formSchema.parse(body);

    // Send email notification
    await resend.emails.send({
      from: 'onboarding@resend.dev', // Update this with your verified domain
      to: 'contact@moagoafrica.com', // Update this with your email
      subject: 'New Contact Form Submission',
      html: `
        <h1>New Contact Form Submission</h1>
        <h2>Contact Information</h2>
        <p><strong>Name:</strong> ${validatedData.name} ${validatedData.surname}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone:</strong> ${validatedData.phone}</p>
        
        <h2>Message</h2>
        <p>${validatedData.message}</p>
      `,
    });

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Form submission error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: 'Form submission failed', error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 