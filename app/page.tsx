import '../styles/globals.css'

import Header from '../components/Header'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import SocialLinks from '../components/SocialLinks'

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
