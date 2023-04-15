import { Contact } from '@/types/types'

export async function sendContactForm(data: Contact) {
  fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
}
