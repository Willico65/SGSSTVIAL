import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

type ContactPayload = {
  name?: string
  email?: string
  phone?: string
  company?: string
  service?: string
  message?: string
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, phone, company, service, message } = (req.body ?? {}) as ContactPayload

  if (!name || !email || !service || !message) {
    return res.status(400).json({ error: 'Faltan campos requeridos' })
  }

  try {
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'Sisstvial Web <onboarding@resend.dev>',
      to: process.env.CONTACT_TO_EMAIL || 'sisstvial@gmail.com',
      replyTo: email,
      subject: `Solicitud de contacto — ${name}`,
      text: [
        `Nombre: ${name}`,
        `Correo: ${email}`,
        `Teléfono: ${phone || 'No indicado'}`,
        `Empresa: ${company || 'No indicada'}`,
        `Servicio de interés: ${service}`,
        '',
        'Mensaje:',
        message,
      ].join('\n'),
    })

    if (error) {
      console.error('Resend error:', error)
      return res.status(502).json({ error: 'No se pudo enviar el correo' })
    }

    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return res.status(502).json({ error: 'No se pudo enviar el correo' })
  }
}
