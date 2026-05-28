import { NextResponse } from 'next/server'

const MAKE_WEBHOOK = 'https://hook.us2.make.com/l2g2hwivxjboi2yuefq2bb3atgya6g5l'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const res = await fetch(MAKE_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: body.name,
        email: body.email,
        phone: body.phone,
        propertyType: body.propertyType,
        services: body.services,
        address: body.address,
        message: body.message,
        consentTransactional: body.consentTransactional ?? false,
        consentMarketing: body.consentMarketing ?? false,
        submittedAt: new Date().toISOString(),
      }),
    })

    if (!res.ok) throw new Error(`Make webhook responded with ${res.status}`)

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Webhook error:', err)
    return NextResponse.json({ error: 'Failed to send lead.' }, { status: 500 })
  }
}
