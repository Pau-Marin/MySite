import projectPortfolio from '../assets/img/portfolio/project-portfolio.png'

export default function Head({ title }: { title: string }) {
  return (
    <>
      <title>{title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={projectPortfolio.src} />
      <link rel="icon" href="/favicon.ico" />
      {/* <style>{"* {border: 1px solid red;}"}</style> */}
    </>
  )
}
