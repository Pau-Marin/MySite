import "../styles/globals.css"

import profilePicture from "../assets/img/profilePicture.jpg" //"../assets/img/Pau.jpg"

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <img src={profilePicture.src} alt="Mi foto" />
        <p>
          ¡Buenas! Me llamo Pau y soy un desarrollador web apasionado. He estado
          escribiendo código durante más de 10 años y he trabajado con varios
          lenguajes y herramientas. Actualmente, estoy enfocado en el desarrollo
          web con React y NextJS. Si estás interesado en ver algunos de mis
          proyectos, ¡dale un vistazo a mi portfolio!
        </p>
      </div>
    </div>
  )
}
