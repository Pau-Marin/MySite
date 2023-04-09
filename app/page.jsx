import "../styles/globals.css"

import SocialLinks from "../components/SocialLinks"
import About from "../components/About"
import Portfolio from "../components/Portfolio"
import Experience from "../components/Experience"
import Contact from "../components/Contact"
import Header from "../components/Header"

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  )
}
