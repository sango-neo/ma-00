import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'
import { rateLimit } from '@/lib/rate-limit'

const resend = new Resend(process.env.RESEND_API_KEY)

const subscribeSchema = z.object({
  email: z.string().email()
})

const limiter = rateLimit({
  interval: 60 * 60 * 1000, // 1 hour in milliseconds
  uniqueTokenPerInterval: 500, // Max number of unique tokens per interval
})

const RATE_LIMIT = 3 // attempts per hour

export async function POST(req: Request) {
  try {
    // Get IP address
    const ip = req.headers.get('x-forwarded-for') || 'unknown'
    
    // Check rate limit
    const { success, error } = await limiter.check(RATE_LIMIT, `subscribe_${ip}`)
    
    if (!success) {
      return NextResponse.json(
        { 
          success: false,
          error: 'Too many attempts. Please try again later.' 
        },
        { status: 429 }
      )
    }

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