import AboutHero from '../components/sections/AboutHero.jsx'
import AboutProfile from '../components/sections/AboutProfile.jsx'
import AboutTimeline from '../components/sections/AboutTimeline.jsx'
import AboutCta from '../components/sections/AboutCta.jsx'

function About() {
  return (
    <main className="page about-page">
      <title>Chi sono — Salvatore De Roma</title>
      <meta name="description" content="Chi è Salvatore De Roma, web developer: percorso, formazione e metodo di lavoro." />
      <AboutHero />
      <AboutProfile image="/salvatore_deroma.png"/>
      <AboutTimeline />
      <AboutCta />
    </main>
  )
}

export default About
