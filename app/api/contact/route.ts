import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const { fullName, email, businessName, services, budget, timeline, message } = body
    
    if (!fullName || !email || !businessName || !services || services.length === 0 || !budget || !timeline || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Get environment variables for email configuration
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com'
    const smtpPort = parseInt(process.env.SMTP_PORT || '587')
    const smtpUser = process.env.SMTP_USER
    const smtpPassword = process.env.SMTP_PASSWORD
    const toEmail = process.env.CONTACT_EMAIL || process.env.SMTP_USER || 'hello@yeelden.com'
    const fromEmail = process.env.FROM_EMAIL || smtpUser || 'noreply@yeelden.com'

    if (!smtpUser || !smtpPassword) {
      console.error('SMTP credentials not configured. Please set SMTP_USER and SMTP_PASSWORD environment variables.')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    })

    // Format services array as readable list
    const servicesList = services.join(', ')

    // Create email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #00A5FF; border-bottom: 2px solid #00A5FF; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="margin-top: 20px;">
          <p><strong>Full Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Business Name:</strong> ${businessName}</p>
          <p><strong>Website:</strong> ${body.website || 'Not provided'}</p>
          <p><strong>Services Interested In:</strong> ${servicesList}</p>
          <p><strong>Budget:</strong> ${budget}</p>
          <p><strong>Timeline:</strong> ${timeline}</p>
        </div>
        
        <div style="margin-top: 30px; padding: 15px; background-color: #f5f5f5; border-radius: 5px;">
          <h3 style="color: #333; margin-top: 0;">Message:</h3>
          <p style="white-space: pre-wrap; color: #666;">${message}</p>
        </div>
        
        <p style="margin-top: 20px; color: #999; font-size: 12px;">
          Submitted at: ${new Date().toLocaleString()}
        </p>
      </div>
    `

    const emailText = `
New Contact Form Submission

Full Name: ${fullName}
Email: ${email}
Business Name: ${businessName}
Website: ${body.website || 'Not provided'}
Services Interested In: ${servicesList}
Budget: ${budget}
Timeline: ${timeline}

Message:
${message}

Submitted at: ${new Date().toLocaleString()}
    `

    // Send email
    await transporter.sendMail({
      from: `"Yeelden Contact Form" <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `New Contact Form Submission from ${fullName} - ${businessName}`,
      text: emailText,
      html: emailHtml,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

