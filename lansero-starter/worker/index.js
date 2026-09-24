const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const LIMITS = { name: 100, email: 200, phone: 40, message: 5000 }

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  })
}

function clean(value, max) {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

async function handleContact(request, env) {
  let data
  try {
    data = await request.json()
  } catch {
    return json({ ok: false, error: 'invalid_json' }, 400)
  }

  // Honeypot: real visitors never see or fill this field.
  if (clean(data.website, 200)) return json({ ok: true })

  const name = clean(data.name, LIMITS.name)
  const email = clean(data.email, LIMITS.email)
  const phone = clean(data.phone, LIMITS.phone)
  const message = clean(data.message, LIMITS.message)

  if (!name || !message || !EMAIL_RE.test(email)) {
    return json({ ok: false, error: 'invalid_fields' }, 400)
  }

  const details = [`Namn: ${name}`, `E-post: ${email}`]
  if (phone) details.push(`Telefon: ${phone}`)
  const text = [
    details.join('\n'),
    message,
    '---\nSkickat från kontaktformuläret på lansero.se. Svara på det här mejlet för att svara kunden.',
  ].join('\n\n')

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: `Lansero hemsida <${env.CONTACT_FROM}>`,
      to: [env.CONTACT_TO],
      reply_to: `${name.replace(/[<>"]/g, '')} <${email}>`,
      subject: `Ny förfrågan från ${name}`,
      text,
    }),
  })

  if (!res.ok) {
    console.error('Resend send failed', res.status, await res.text())
    return json({ ok: false, error: 'send_failed' }, 502)
  }

  return json({ ok: true })
}

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url)

    if (pathname === '/api/contact') {
      if (request.method !== 'POST') return json({ ok: false, error: 'method_not_allowed' }, 405)
      return handleContact(request, env)
    }

    return json({ ok: false, error: 'not_found' }, 404)
  },
}
