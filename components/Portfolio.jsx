export default function Portfolio() {
  const projects = [
    {
      id: 1,
      img: "",
      deploy: "",
      github: "",
    },
    {
      id: 2,
      img: "",
      deploy: "",
      github: "",
    },
    {
      id: 3,
      img: "",
      deploy: "",
      github: "",
    },
    {
      id: 4,
      img: "",
      deploy: "",
      github: "",
    },
    {
      id: 5,
      img: "",
      deploy: "",
      github: "",
    },
    {
      id: 6,
      img: "",
      deploy: "",
      github: "",
    },
  ]

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px0">
          {projects.map(({ id, img, deploy, github }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
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
