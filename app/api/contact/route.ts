import { Contact } from '@/types/types'

export async function POST(req: Request) {
  const data: Contact = await req.json()
  console.log(data)
  return new Response('All OK!')
}
