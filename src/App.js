"use client"

import { useState, useEffect, useRef } from "react"
import "./App.css"

// Import components
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [currentSection, setCurrentSection] = useState("home")

  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const experienceRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("darkMode")
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme))
    }
  }, [])

  useEffect(() => {
    // Apply theme to body and document
    document.body.className = darkMode ? "dark-mode" : "light-mode"
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light")
    localStorage.setItem("darkMode", JSON.stringify(darkMode))
  }, [darkMode])

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "home", ref: heroRef },
        { id: "about", ref: aboutRef },
        { id: "experience", ref: experienceRef },
        { id: "skills", ref: skillsRef },
        { id: "projects", ref: projectsRef },
        { id: "contact", ref: contactRef },
      ]

      const scrollPosition = window.scrollY + 150

      for (const section of sections) {
        if (section.ref.current) {
          const { offsetTop, offsetHeight } = section.ref.current
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <Navigation
        currentSection={currentSection}
        scrollToSection={scrollToSection}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        refs={{ heroRef, aboutRef, experienceRef, skillsRef, projectsRef, contactRef }}
      />

      <Hero ref={heroRef} scrollToSection={scrollToSection} projectsRef={projectsRef} contactRef={contactRef} />
      <About ref={aboutRef} />
      <Experience ref={experienceRef} />
      <Skills ref={skillsRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  )
}

export default App
