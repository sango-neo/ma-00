import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { contactFormSchema } from '@/lib/schemas/contact-form-schema'
import { z } from 'zod'
import { rateLimit } from '@/lib/rate-limit'

const resend = new Resend(process.env.RESEND_API_KEY)

const limiter = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 500
})

export async function POST(req: Request) {
  try {
    // Rate limiting check
    const ip = req.headers.get('x-forwarded-for') || 'anonymous'
    const rateLimitResult = await limiter.check(5, `form_submit_${ip}`)
    
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await req.json()

    // Validate phone number format
    const validatedData = contactFormSchema.parse(body)

    // Additional phone number security checks
    const phone = validatedData.phone
    if (phone) {
      // Check for suspicious patterns
      const suspicious = [
        /^0{5,}/, // Too many leading zeros
        /(\d)\1{4,}/, // Same digit repeated too many times
        /^1{1,}/, // All ones
      ]

      if (suspicious.some(pattern => pattern.test(phone))) {
        return NextResponse.json(
          { error: 'Invalid phone number format' },
          { status: 400 }
        )
      }

      // Check country code validity (basic check)
      if (phone.startsWith('+')) {
        const countryCode = phone.match(/^\+(\d+)/)?.[1]
        if (countryCode && (countryCode.length > 4 || countryCode === '0')) {
          return NextResponse.json(
            { error: 'Invalid country code' },
            { status: 400 }
          )
        }
      }
    }

    // Format challenges for email
    const challengesList = validatedData.predefinedChallenges
      .map(challenge => `<li>${challenge}</li>`)
      .join('')

    // Send email notification
    await resend.emails.send({
      from: 'contact@moagoafrica.com', // Update this with your verified domain
      to: 'moagoafrica@gmail.com', // Update this with your email
      subject: 'New Contact Form Submission',
      html: `
        <h1>New Contact Form Submission</h1>
        
        <h2>Selected Challenges</h2>
        <ul>
          ${challengesList}
        </ul>
        ${validatedData.customChallenges ? `
          <h3>Custom Challenges</h3>
          <p>${validatedData.customChallenges}</p>
        ` : ''}
        
        <h2>Company Information</h2>
        <p><strong>Company:</strong> ${validatedData.companyName}</p>
        <p><strong>Industry:</strong> ${validatedData.industry}</p>
        ${validatedData.jobTitle ? `<p><strong>Job Title:</strong> ${validatedData.jobTitle}</p>` : ''}
        ${validatedData.companySize ? `<p><strong>Company Size:</strong> ${validatedData.companySize}</p>` : ''}
        
        <h2>Contact Information</h2>
        <p><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        ${validatedData.phone ? `<p><strong>Phone:</strong> ${validatedData.phone}</p>` : ''}
        
        ${validatedData.message ? `
          <h2>Additional Message</h2>
          <p>${validatedData.message}</p>
        ` : ''}
      `,
    })

    return NextResponse.json({ 
      success: true,
      message: 'Form submitted successfully' 
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Form submission error:', error)
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to submit form' 
      },
      { status: 500 }
    )
  }
}
