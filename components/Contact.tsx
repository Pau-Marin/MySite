'use client'

import { useState } from 'react'

const initValues = { name: '', email: '', message: '' }

const Contact = () => {
  const [contact, setContact] = useState(initValues)
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    })
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
          {/* <p className="py-6">
            Send me an email:{' '}
            <a href={'mailto:hello@paumarin.com'}>hello@paumarin.com</a>
          </p> */}
          <p className="py-6">Let's talk</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Name*"
              value={contact.name}
              onChange={handleChange}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            ></input>
            <input
              type="email"
              name="email"
              placeholder="Your email*"
              value={contact.email}
              onChange={handleChange}
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            ></input>
            <textarea
              name="message"
              placeholder="I want to talk about..."
              value={contact.message}
              onChange={handleChange}
              rows={10}
              className="p-1 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            ></textarea>
            <p className="text-neutral-500">* Required fields.</p>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Send!
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
