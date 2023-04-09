const About = () => {
  return (
    <div
      id={'about'}
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg mt-20 p-4 mx-auto flex flex-col justify-center w-full h-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl">
          Hello! My name is Pau and I'm a passionate developer. I've been
          writting code for over 10 years. I'm currently focused on backend
          development with both Express and NextJS using TypeScript but I have
          experience with many other languages such as C#, Java or even CL.
        </p>
        <br />
        <p className="text-xl">
          I've worked in lots of different projects, ranging from small web
          applications to big projects with multiple developers teams, including
          change management in a major company.
        </p>
        <br />
        <p className="text-xl">
          In my free time I like to keep learning new skills and technologies to
          improve as a developer.
        </p>
      </div>
    </div>
  )
}

export default About
