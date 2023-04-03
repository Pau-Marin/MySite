import logoExpress from "../assets/img/experience/logo-express.png"

export default function Experience() {
  const tecnologies = [
    {
      id: 1,
      name: "NextJS",
      img: "https://profilinator.rishav.dev/skills-assets/nextjs.png",
      style: "shadow-gray-700",
    },
    {
      id: 2,
      name: "React",
      img: "https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg",
      style: "shadow-sky-300",
    },
    {
      id: 3,
      name: "Redux",
      img: "https://profilinator.rishav.dev/skills-assets/redux-original.svg",
      style: "shadow-violet-600",
    },
    {
      id: 4,
      name: "Tailwind",
      img: "https://profilinator.rishav.dev/skills-assets/tailwindcss.svg",
      style: "shadow-teal-300",
    },
    {
      id: 5,
      name: "JavaScript",
      img: "https://profilinator.rishav.dev/skills-assets/javascript-original.svg",
      style: "shadow-yellow-300",
    },
    {
      id: 6,
      name: "TypeScript",
      img: "https://profilinator.rishav.dev/skills-assets/typescript-original.svg",
      style: "shadow-blue-500",
    },
    {
      id: 7,
      name: "Node.js",
      img: "https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg",
      style: "shadow-green-500",
    },
    {
      id: 8,
      name: "Express.js",
      img: logoExpress.src,
      style: "shadow-slate-400",
    },
    {
      id: 9,
      name: "Sequelize",
      img: "https://avatars.githubusercontent.com/u/3591786",
      style: "shadow-sky-500",
    },
    {
      id: 10,
      name: "Mongoose",
      img: "https://camo.githubusercontent.com/a4bb207f53a07bd13cc9001408af82a05f9011ca1bd9938a473b9084cd77f298/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f6d6f6e676f6f73652e706e67",
      style: "shadow-red-600",
    },
    {
      id: 11,
      name: "PostgreSQL",
      img: "https://profilinator.rishav.dev/skills-assets/postgresql-original-wordmark.svg",
      style: "shadow-blue-400",
    },
    {
      id: 12,
      name: "MongoDB",
      img: "https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg",
      style: "shadow-green-600",
    },
    {
      id: 13,
      name: "Unity",
      img: "https://profilinator.rishav.dev/skills-assets/unity.png",
      style: "shadow-slate-600",
    },
    {
      id: 14,
      name: "C#",
      img: "https://profilinator.rishav.dev/skills-assets/csharp-original.svg",
      style: "shadow-purple-500",
    },
    {
      id: 15,
      name: "Java",
      img: "https://profilinator.rishav.dev/skills-assets/java-original-wordmark.svg",
      style: "shadow-rose-600",
    },
    {
      id: 16,
      name: "Git",
      img: "https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg",
      style: "shadow-red-500",
    },
    {
      id: 17,
      name: "Docker",
      img: "https://camo.githubusercontent.com/6819655dad2979647adee4b2f01fc7da674eb0bff06cf25bd576427f091064a1/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f646f636b65722d6f726967696e616c2d776f72646d61726b2e737667",
      style: "shadow-sky-400",
    },
  ]

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-auto"
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
