import { NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'
import { z } from 'zod'

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(1000),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = contactSchema.parse(body)

    // Send notification email to site owner
    await sgMail.send({
      from: process.env.SENDGRID_FROM_EMAIL || 'customdigital360@gmail.com',
      to: process.env.CONTACT_EMAIL || 'libe@example.com',
      replyTo: email,
      subject: `Nouveau message de ${name}`,
      html: `
        <h2>Nouveau message depuis le portfolio</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    // Send confirmation email to form submitter
    await sgMail.send({
      from: process.env.SENDGRID_FROM_EMAIL || 'customdigital360@gmail.com',
      to: email,
      subject: 'Confirmation de votre message',
      html: `
        <h2>Merci de nous avoir contactés !</h2>
        <p>Bonjour ${name},</p>
        <p>Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais.</p>
        <p><strong>Votre message :</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <br>
        <p>Cordialement,</p>
        <p>L'équipe Libe</p>
      `,
    })

    return NextResponse.json({
      success: true,
      message: 'Message envoyé avec succès',
    })
  } catch (error) {
    console.error('Contact form error:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: 'Données invalides',
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      {
        success: false,
        error: "Erreur lors de l'envoi du message",
      },
      { status: 500 }
    )
  }
}
