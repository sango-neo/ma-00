import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

const subscribeSchema = z.object({
  email: z.string().email()
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email } = subscribeSchema.parse(body)

    // Send email notification
    await resend.emails.send({
      from: 'contact@moagoafrica.com', // Update with your verified domain
      to: 'cyberstark03@gmail.com', // Update with your email
      subject: 'New Newsletter Subscription',
      html: `
        <h1>New Email List Subscription</h1>
        <p><strong>Email:</strong> ${email}</p>
        <p>This email was added to the email list on ${new Date().toLocaleDateString()}</p>
        <p>Please update the email list if necessary.</p>
      `,
    })

    return NextResponse.json({ 
      success: true,
      message: 'Subscription successful' 
    })
  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to subscribe' 
      },
      { status: 500 }
    )
  }
} 