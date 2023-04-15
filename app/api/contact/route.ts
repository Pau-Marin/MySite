import { Contact } from '@/types/types'
import { mailOptions, transporter } from '@/config/nodemailer'

export async function POST(req: Request) {
  const data: Contact = await req.json()
  console.log(data)
  if (!data.name || !data.email || !data.message)
    return new Response('Bad request', { status: 400 })

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: `Web message from ${data.name}`,
      text: 'This is a test text',
      html: '<h1>Test title</h1><p>This is a test paragraph.</p>',
    })
    return new Response('OK', { status: 203 })
  } catch (error) {
    console.log(error)
    return new Response(error.message, { status: 400 })
  }
}
