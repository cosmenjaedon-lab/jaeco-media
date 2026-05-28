import { NextResponse } from 'next/server'

// ⏸ Form delivery wired after user confirms method (email, webhook, CRM, etc.)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function POST(_request: Request) {
  return NextResponse.json(
    { message: 'Form submission endpoint — delivery not yet configured.' },
    { status: 501 }
  )
}
