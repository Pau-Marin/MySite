import { MdOutlineKeyboardArrowRight } from "react-icons/md"

import "../styles/globals.css"
import SocialLinks from "../components/SocialLinks"

import profilePicture from "../assets/img/profilePicture.jpg" //"../assets/img/Pau.jpg"
import About from "../components/About"
import Portfolio from "../components/Portfolio"

export default function Home() {
  return (
    <div>
      <div
        name="home"
        className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
      >
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
              I'm a Full Stack Web Developer
            </h2>
            <p className="text-gray-500 py-4 max-w-md">
              ¡Buenas! Me llamo Pau y soy un desarrollador web apasionado. He
              estado escribiendo código durante más de 10 años y he trabajado
              con varios lenguajes y herramientas. Actualmente, estoy enfocado
              en el desarrollo web con React y NextJS. Si estás interesado en
              ver algunos de mis proyectos, ¡dale un vistazo a mi portfolio!
            </p>
            <div>
              <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </button>
            </div>
          </div>
          <div>
            <img
              src={profilePicture.src}
              alt="Mi foto"
              className="rounded-2xl mx-auto w-2/3 md:w-full"
            />
          </div>
        </div>
      </div>
      <About />
      <Portfolio />
      <SocialLinks />
    </div>
  )
}
