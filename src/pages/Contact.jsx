import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Header from '../components/Header'
import WhatsAppButton from '../components/WhatsAppButton'
import MediaBackground from '../components/MediaBackground'
import ContactMobileTweaks from '../mobile/ContactMobile'
import { CONTACT } from '../data/content'

// Fill these in with your EmailJS account (emailjs.com — free tier is enough
// for a contact form). See README.md > "Enviar mensagens do formulário por
// e-mail" for the two-minute setup, or swap this whole handler for a
// Cloudflare Worker if you'd rather keep it in your own stack.
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

const initialForm = { name: '', email: '', phone: '', message: '' }
const initialErrors = {}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState(initialErrors)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  function update(field) {
    return (e) => {
      setForm((f) => ({ ...f, [field]: e.target.value }))
      setErrors((err) => ({ ...err, [field]: undefined }))
    }
  }

  function validate() {
    const next = {}
    if (!form.name.trim()) next.name = 'Digite seu nome.'
    if (!form.email.trim()) next.email = 'Digite seu e-mail.'
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'E-mail inválido.'
    if (!form.message.trim()) next.message = 'Escreva sua mensagem.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return

    setStatus('sending')
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          message: form.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      setStatus('sent')
      setForm(initialForm)
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <>
      <Header theme="dark" />
      <WhatsAppButton />

      <main className="contact">
        <div className="contact__bg">
          {/* Drop the flower/ambient clip at /public/media/contact.mp4 (or .gif) */}
          <MediaBackground src="/media/contact.mp4" alt="" />
          <div className="contact__scrim" aria-hidden="true" />
        </div>

        <div className="container contact__wrap">
          <span className="eyebrow eyebrow--light">{CONTACT.eyebrow}</span>

          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <Field
              id="name"
              label={CONTACT.fields.name.label}
              placeholder={CONTACT.fields.name.placeholder}
              value={form.name}
              onChange={update('name')}
              error={errors.name}
            />
            <Field
              id="email"
              type="email"
              label={CONTACT.fields.email.label}
              placeholder={CONTACT.fields.email.placeholder}
              value={form.email}
              onChange={update('email')}
              error={errors.email}
            />
            <Field
              id="phone"
              type="tel"
              label={CONTACT.fields.phone.label}
              placeholder={CONTACT.fields.phone.placeholder}
              value={form.phone}
              onChange={update('phone')}
            />
            <Field
              id="message"
              as="textarea"
              label={CONTACT.fields.message.label}
              placeholder={CONTACT.fields.message.placeholder}
              value={form.message}
              onChange={update('message')}
              error={errors.message}
            />

            <button
              type="submit"
              className="pill-button pill-button--light contact__submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? CONTACT.submitting : CONTACT.submit}
            </button>

            <p className="contact__status" role="status">
              {status === 'sent' && CONTACT.success}
              {status === 'error' && CONTACT.error}
            </p>

            <p className="contact__terms">{CONTACT.terms}</p>
          </form>
        </div>
      </main>

      <ContactMobileTweaks />

      <style>{`
        .contact {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          color: #fff;
          padding: 140px 0 80px;
        }
        .contact__bg {
          position: absolute;
          inset: 0;
        }
        .contact__scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(160deg, rgba(20,14,10,0.75) 0%, rgba(10,8,6,0.55) 100%);
        }
        .contact__wrap {
          position: relative;
          max-width: 560px;
        }
        .contact__form {
          margin-top: 20px;
          background: rgba(20, 16, 12, 0.35);
          backdrop-filter: blur(6px);
          border: 1px solid var(--line-dark);
          border-radius: 12px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 22px;
        }
        .contact__submit {
          margin-top: 8px;
          justify-content: center;
        }
        .contact__status {
          font-size: 13px;
          min-height: 16px;
          color: var(--white-soft);
        }
        .contact__terms {
          font-size: 12px;
          color: var(--white-faint);
        }
      `}</style>
    </>
  )
}

function Field({ id, label, as = 'input', type = 'text', placeholder, value, onChange, error }) {
  const Tag = as
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <Tag
        id={id}
        name={id}
        type={as === 'input' ? type : undefined}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={as === 'textarea' ? 4 : undefined}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <span id={`${id}-error`} className="field__error">
          {error}
        </span>
      )}

      <style>{`
        .field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .field label {
          font-size: 11px;
          letter-spacing: 0.04em;
          color: var(--white-faint);
        }
        .field input,
        .field textarea {
          background: transparent;
          border: none;
          border-bottom: 1px solid var(--line-dark);
          color: #fff;
          font-size: 15px;
          padding: 8px 0;
          resize: none;
        }
        .field input::placeholder,
        .field textarea::placeholder {
          color: var(--white-faint);
        }
        .field input:focus,
        .field textarea:focus {
          outline: none;
          border-bottom-color: #fff;
        }
        .field__error {
          font-size: 12px;
          color: #ff9b8a;
        }
      `}</style>
    </div>
  )
}
