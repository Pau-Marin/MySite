import projectEmme3d from '../assets/img/portfolio/project-emme3d.png'
import projectPikemon from '../assets/img/portfolio/project-pikemon.png'
import projectPortfolio from '../assets/img/portfolio/project-portfolio.png'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      name: 'Portfolio Site',
      img: projectPortfolio.src,
      deploy: '/',
      github: 'https://github.com/Pau-Marin/Portfolio-Site/',
    },
    {
      id: 2,
      name: 'Emme-3D',
      img: projectEmme3d.src,
      deploy: 'http://emme-3-d.vercel.app',
      github: 'https://github.com/MacarenaRodriguez1993/Emme-3D',
    },
    {
      id: 3,
      name: 'PIkemon',
      img: projectPikemon.src,
      deploy: 'http://pikemon.ddns.net',
      github: 'https://github.com/Pau-Marin/PI-Pokemon',
    },
    // {
    //   id: 4,
    //   img: "",
    //   deploy: "",
    //   github: "",
    // },
    // {
    //   id: 5,
    //   img: "",
    //   deploy: "",
    //   github: "",
    // },
    // {
    //   id: 6,
    //   img: "",
    //   deploy: "",
    //   github: "",
    // },
  ]

  return (
    <div
      id="projects"
      className="min-h-screen bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className="max-w-screen-lg mt-20 p-4 mx-auto flex flex-col justify-center w-full h-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work :)</p>
        </div>
        <div className="w-full h-auto  grid md:grid-cols-3 gap-8 px-12 sm:grid-cols-2 sm:px0 xs:grid-cols-1">
          {projects.map(({ id, name, img, deploy, github }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <h3 className="text-center text-xl">{name}</h3>
              <img
                src={img}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={deploy}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
                <a
                  href={github}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
