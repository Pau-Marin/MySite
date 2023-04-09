import logoNextjs from '../assets/img/experience/logo-next.png'
import logoReact from '../assets/img/experience/logo-react.svg'
import logoRedux from '../assets/img/experience/logo-redux.svg'
import logoTailwind from '../assets/img/experience/logo-tailwindcss.svg'
import logoJavascript from '../assets/img/experience/logo-javascript.svg'
import logoTypescript from '../assets/img/experience/logo-typescript.svg'
import logoNode from '../assets/img/experience/logo-node.svg'
import logoExpress from '../assets/img/experience/logo-express.png'
import logoSequelize from '../assets/img/experience/logo-sequelize.png'
import logoMongoose from '../assets/img/experience/logo-mongoose.png'
import logoPostgresql from '../assets/img/experience/logo-postgresql.svg'
import logoMongodb from '../assets/img/experience/logo-mongodb.svg'
import logoUnity from '../assets/img/experience/logo-unity.png'
import logoCsharp from '../assets/img/experience/logo-csharp.svg'
import logoJava from '../assets/img/experience/logo-java.svg'
import logoGit from '../assets/img/experience/logo-git.svg'
import logoDocker from '../assets/img/experience/logo-docker.svg'

export default function Experience() {
  const tecnologies = [
    {
      id: 1,
      name: 'NextJS',
      img: logoNextjs.src,
      style: 'shadow-gray-700',
    },
    {
      id: 2,
      name: 'React',
      img: logoReact.src,
      style: 'shadow-sky-300',
    },
    {
      id: 3,
      name: 'Redux',
      img: logoRedux.src,
      style: 'shadow-violet-600',
    },
    {
      id: 4,
      name: 'Tailwind',
      img: logoTailwind.src,
      style: 'shadow-teal-300',
    },
    {
      id: 5,
      name: 'JavaScript',
      img: logoJavascript.src,
      style: 'shadow-yellow-300',
    },
    {
      id: 6,
      name: 'TypeScript',
      img: logoTypescript.src,
      style: 'shadow-blue-500',
    },
    {
      id: 7,
      name: 'Node.js',
      img: logoNode.src,
      style: 'shadow-green-500',
    },
    {
      id: 8,
      name: 'Express.js',
      img: logoExpress.src,
      style: 'shadow-slate-400',
    },
    {
      id: 9,
      name: 'Sequelize',
      img: logoSequelize.src,
      style: 'shadow-sky-500',
    },
    {
      id: 10,
      name: 'Mongoose',
      img: logoMongoose.src,
      style: 'shadow-red-600',
    },
    {
      id: 11,
      name: 'PostgreSQL',
      img: logoPostgresql.src,
      style: 'shadow-blue-400',
    },
    {
      id: 12,
      name: 'MongoDB',
      img: logoMongodb.src,
      style: 'shadow-green-600',
    },
    {
      id: 13,
      name: 'Unity',
      img: logoUnity.src,
      style: 'shadow-slate-600',
    },
    {
      id: 14,
      name: 'C#',
      img: logoCsharp.src,
      style: 'shadow-purple-500',
    },
    {
      id: 15,
      name: 'Java',
      img: logoJava.src,
      style: 'shadow-rose-600',
    },
    {
      id: 16,
      name: 'Git',
      img: logoGit.src,
      style: 'shadow-red-500',
    },
    {
      id: 17,
      name: 'Docker',
      img: logoDocker.src,
      style: 'shadow-sky-400',
    },
  ]

  return (
    <div
      data-name="experience"
      className="min-h-screen bg-gradient-to-b from-gray-800 to-black w-full"
    >
      <div className="max-w-screen-lg mx-auto mt-20 p-4 flex flex-col justify-center w-full h-auto text-white">
        <div>
          <div>
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
              Experience
            </p>
            <p className="py-6">Technologies I know</p>
          </div>
          <div className="w-full h-auto grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {tecnologies.map(({ id, name, img, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={img} alt={name} className="w-20 mx-auto" />
                <p className="mt-4">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
