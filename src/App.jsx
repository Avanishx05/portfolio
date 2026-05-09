import { useEffect } from 'react'
import { useCursor } from './hooks/useCursor'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import './App.css'

export default function App() {
  useCursor()

  return (
    <>
      {/* Custom cursor */}
      <div className="cursor-dot" />													

      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
