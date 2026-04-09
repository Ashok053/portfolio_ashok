import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Blogs from './components/Blogs'
import Activities from './components/Activities'
import SeoFaq from './components/SeoFaq'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-white focus:text-gray-900 focus:px-3 focus:py-2 focus:rounded-md focus:z-50">
        Skip to main content
      </a>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Blogs />
        <Activities />
        <SeoFaq />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App