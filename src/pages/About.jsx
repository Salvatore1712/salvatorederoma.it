import AboutHero from '../components/sections/AboutHero.jsx'
import AboutProfile from '../components/sections/AboutProfile.jsx'
import AboutTimeline from '../components/sections/AboutTimeline.jsx'
import AboutCta from '../components/sections/AboutCta.jsx'

function About() {
  return (
    <main className="about-page">
      <title>About — Salvatore De Roma</title>
      <meta name="description" content="About Salvatore De Roma, web developer." />
      <AboutHero />
      <AboutProfile image="/salvatore_deroma.png"/>
      <AboutTimeline />
      <AboutCta />
    </main>
  )
}

export default About
