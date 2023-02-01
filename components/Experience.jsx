export default function Experience() {
  const tecnologies = [
    {
      id: 1,
      name: "React",
      img: "https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      name: "CSS3",
      img: "https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg",
      style: "shadow-orange-500",
    },
    {
      id: 3,
      name: "HTML5",
      img: "https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg",
      style: "shadow-orange-500",
    },
    {
      id: 4,
      name: "JavaScript",
      img: "https://profilinator.rishav.dev/skills-assets/javascript-original.svg",
      style: "shadow-orange-500",
    },
    {
      id: 5,
      name: "TypeScript",
      img: "https://profilinator.rishav.dev/skills-assets/typescript-original.svg",
      style: "shadow-orange-500",
    },
    {
      id: 6,
      name: "Redux",
      img: "https://profilinator.rishav.dev/skills-assets/redux-original.svg",
      style: "shadow-orange-500",
    },
    {
      id: 7,
      name: "Wordpress",
      img: "https://profilinator.rishav.dev/skills-assets/wordpress.png",
      style: "shadow-orange-500",
    },
    {
      id: 8,
      name: "Material UI",
      img: "https://profilinator.rishav.dev/skills-assets/mui.png",
      style: "shadow-orange-500",
    },
    {
      id: 9,
      name: "Styled Components",
      img: "https://profilinator.rishav.dev/skills-assets/styled-components.png",
      style: "shadow-orange-500",
    },
    {
      id: 10,
      name: "NextJS",
      img: "https://profilinator.rishav.dev/skills-assets/nextjs.png",
      style: "shadow-orange-500",
    },
    {
      id: 11,
      name: "MongoDB",
      img: "https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg",
      style: "shadow-orange-500",
    },
    {
      id: 12,
      name: "Node.js",
      img: "https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg",
      style: "shadow-orange-500",
    },
    {
      id: 13,
      name: "Express.js",
      img: "https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg",
      style: "shadow-orange-500",
    },
    {
      id: 14,
      name: "PostgreSQL",
      img: "https://profilinator.rishav.dev/skills-assets/postgresql-original-wordmark.svg",
      style: "shadow-orange-500",
    },
    {
      id: 15,
      name: "Git",
      img: "https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg",
      style: "shadow-orange-500",
    },
    {
      id: 16,
      name: "C#",
      img: "https://profilinator.rishav.dev/skills-assets/csharp-original.svg",
      style: "shadow-orange-500",
    },
    {
      id: 17,
      name: "Java",
      img: "https://profilinator.rishav.dev/skills-assets/java-original-wordmark.svg",
      style: "shadow-orange-500",
    },
    {
      id: 18,
      name: "Unity",
      img: "https://profilinator.rishav.dev/skills-assets/unity.png",
      style: "shadow-orange-500",
    },
  ]

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <div>
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
              Experience
            </p>
            <p className="py-6">Technologies I know</p>
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
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
