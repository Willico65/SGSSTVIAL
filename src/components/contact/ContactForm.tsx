import { useState, type FormEvent } from 'react'
import { Button } from '../ui/Button'
import Input from '../ui/Input'
import Label from '../ui/Label'
import Textarea from '../ui/Textarea'
import Select from '../ui/Select'
import { company } from '../../data/content'

const services = [
  'Sistema de Gestión SST',
  'Seguridad Vial / PESV',
  'Auditorías',
  'Capacitación',
  'Otro',
]

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const payload = {
      name: data.get('name'),
      email: data.get('email'),
      phone: data.get('phone'),
      company: data.get('company'),
      service: data.get('service'),
      message: data.get('message'),
    }

    setStatus('sending')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) throw new Error('request failed')

      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="mx-auto max-w-lg rounded-xl border border-line bg-paper-raised p-8 shadow-card sm:p-10">
      <div>
        <h2 className="text-xl font-bold">Cuéntenos qué necesita</h2>
        <p className="mt-2 text-sm text-ink-soft">
          Complete el formulario y le responderemos a través de {company.email}. También puede
          escribirnos o llamarnos directamente desde los datos de contacto.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div>
          <Label htmlFor="name">Nombre completo</Label>
          <Input type="text" id="name" name="name" required />
        </div>

        <div>
          <Label htmlFor="email">Correo electrónico</Label>
          <Input type="email" id="email" name="email" required />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="phone">Teléfono</Label>
            <Input type="tel" id="phone" name="phone" />
          </div>
          <div>
            <Label htmlFor="company">Empresa</Label>
            <Input type="text" id="company" name="company" />
          </div>
        </div>

        <div>
          <Label htmlFor="service">Servicio de interés</Label>
          <Select id="service" name="service" required defaultValue="">
            <option value="" disabled>
              Seleccione un servicio
            </option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </Select>
        </div>

        <div>
          <Label htmlFor="message">Mensaje</Label>
          <Textarea id="message" name="message" rows={4} required />
        </div>

        <Button type="submit" className="w-full" disabled={status === 'sending'}>
          {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
        </Button>

        {status === 'sent' && (
          <p className="text-sm font-semibold text-accent">
            Mensaje enviado. Le responderemos pronto a través de {company.email}.
          </p>
        )}

        {status === 'error' && (
          <p className="text-sm text-ink-soft">
            No pudimos enviar el mensaje. Escríbanos directamente a{' '}
            <a href={`mailto:${company.email}`} className="font-semibold text-accent">
              {company.email}
            </a>
            .
          </p>
        )}
      </form>
    </div>
  )
}
