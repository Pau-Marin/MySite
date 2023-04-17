'use client'

import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Contact } from '@/types/types'
import { sendContactForm } from '@/lib/api'

const initValues: Contact = { name: '', email: '', message: '' }
const initState = { error: '', contact: initValues }
const initTouched = { name: false, email: false, message: false }
const validationRegex = {
  name: new RegExp('^[a-zA-Z\\s]+$'),
  email: new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'),
  message: new RegExp('^.+$'),
}

const Contact = () => {
  const [state, setState] = useState(initState)
  const [touched, setTouched] = useState(initTouched)

  const { contact, error } = state

  const onBlur = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) =>
    setTouched({
      ...touched,
      [e.target.name]: true,
    })

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setState({
      ...state,
      contact: {
        ...state.contact,
        [e.target.name]: e.target.value,
      },
    })
  }

  const checkRegex = (data: Contact) => {
    // Obtener los valores de los campos del formulario
    const name = data.name
    const email = data.email
    const message = data.message

    // Validar cada campo usando el regex correspondiente
    const isValidName = validationRegex.name.test(name)
    const isValidEmail = validationRegex.email.test(email)
    const isValidMessage = message.length != 0 && !message.includes(' ')

    // Si algún campo no es válido, mostrar un mensaje de error
    if (!isValidName) {
      throw new Error('Invalid name.')
    }

    if (!isValidEmail) {
      throw new Error('Invalid email.')
    }

    if (!isValidMessage) {
      throw new Error("Message can't be empty.")
    }
  }

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      checkRegex(contact)
      await sendContactForm(contact).then(() => {
        toast.success('Message sent.', {
          position: 'top-center',
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        })
        setState(initState)
        setTouched(initTouched)
      })
    } catch (error) {
      if (error instanceof Error) {
        setState({
          ...state,
          error: error.message,
        })
        toast.error(
          `Oops, there was an error sending the email: ${error.message}`,
          {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          }
        )
      } else console.log(error)
    }
  }

  return (
    <div
      id="contact"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col mt-20 p-4 justify-center max-w-screen-lg mx-auto h-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Let's talk</p>
          {error && <p className="text-red-600">{error}</p>}
        </div>
        <div className="flex justify-center items-center">
          <form className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              value={contact.name}
              onChange={handleChange}
              onBlur={onBlur}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            ></input>
            {touched.name && !contact.name && (
              <p className="text-red-600">Required</p>
            )}
            <input
              type="email"
              name="email"
              placeholder="Your email*"
              value={contact.email}
              onChange={handleChange}
              onBlur={onBlur}
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            ></input>
            {touched.email && !contact.email && (
              <p className="text-red-600">Required</p>
            )}
            <textarea
              name="message"
              placeholder="I want to talk about..."
              value={contact.message}
              onChange={handleChange}
              onBlur={onBlur}
              rows={10}
              className="p-1 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            ></textarea>
            {touched.message && !contact.message && (
              <p className="text-red-600">Required</p>
            )}
            <p className="text-neutral-500">* Required fields.</p>
            <button
              className={
                !contact.name || !contact.email || !contact.message
                  ? 'bg-blue-500 text-white font-bold px-6 py-3 my-8 mx-auto flex items-center rounded-md opacity-50 cursor-not-allowed'
                  : 'text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'
              }
              disabled={!contact.name || !contact.email || !contact.message}
              onClick={onSubmit}
            >
              Send!
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Contact
