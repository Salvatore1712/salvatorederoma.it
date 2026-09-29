import Hero from '../components/sections/Hero.jsx'
import Services from '../components/sections/Services.jsx'
import Contact from '../components/sections/Contact.jsx'

function Home() {
  return (
    <main className="page home">
      <title>Salvatore De Roma — Web Developer</title>
      <meta name="description" content="Salvatore De Roma, web developer: siti web progettati per attrarre clienti e rafforzare il tuo brand." />
      <Hero />
      <Services />
      <Contact />
    </main>
  )
}

export default Home
