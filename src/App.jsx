import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import './App.css'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import Home from './pages/Home.jsx'
import Project from './pages/Project.jsx'
import About from './pages/About.jsx'

function App() {
  const { pathname } = useLocation()

  // Ogni nuova pagina parte dall'alto
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
