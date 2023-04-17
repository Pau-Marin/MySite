import projectPortfolio from '../assets/img/portfolio/project-portfolio.png'

export default function Head({ title }: { title: string }) {
  return (
    <>
      <title>{title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="title" property="og:title" content={title} />
      <meta name="image" property="og:image" content={projectPortfolio.src} />
      <meta name="author" content="Pau Marin Jubete"></meta>
      <link rel="icon" href="/favicon.ico" />
      {/* <style>{"* {border: 1px solid red;}"}</style> */}
    </>
  )
}
