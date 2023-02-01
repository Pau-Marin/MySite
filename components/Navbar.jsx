"use client"

import Link from "next/link"
import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

export default function Navbar() {
  const [nav, setNav] = useState(false)

  const links = [
    { id: 1, url: "/", name: "home" },
    { id: 2, url: "/about", name: "about" },
    { id: 3, url: "/projects", name: "projects" },
    { id: 4, url: "/contact", name: "contact" },
  ]

  return (
    <header>
      <nav className="flex justify-between items-center w-full px-4 text-white bg-black fixed">
        <h1 className="text-5xl font-signature ml-2">Pau Marin Jubete</h1>
        <ul className="hidden md:flex">
          {links.map(({ id, url, name }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
            >
              <Link href={url}>{name}</Link>
            </li>
          ))}
        </ul>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {links.map(({ id, url, name }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link href={url}>{name}</Link>
              </li>
            ))}{" "}
          </ul>
        )}
      </nav>
    </header>
  )
}
