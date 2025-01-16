import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { contactFormSchema } from '@/lib/schemas/contact-form-schema'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const validatedData = contactFormSchema.parse(body)

    // Format challenges for email
    const challengesList = validatedData.predefinedChallenges
      .map(challenge => `<li>${challenge}</li>`)
      .join('')

    // Send email notification
    await resend.emails.send({
      from: 'onboarding@resend.dev', // Update this with your verified domain
      to: 'cyberstark03@gmail.com', // Update this with your email
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
