"use client"

import { useState } from "react"

const Navigation = ({ currentSection, scrollToSection, darkMode, toggleDarkMode, refs }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (e, ref) => {
    e.preventDefault()
    scrollToSection(ref)
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-pill">
        <div className="nav-logo">
          <span className="logo-text">
            <i className="fas fa-code"></i>
            <span className="logo-full">DevPortfolio</span>
            <span className="logo-short">Dev</span>
          </span>
        </div>

        <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <a
            href="#home"
            className={`nav-link ${currentSection === "home" ? "active" : ""}`}
            onClick={(e) => handleNavClick(e, refs.heroRef)}
          >
            <i className="fas fa-home"></i>
            <span>Home</span>
          </a>
          <a
            href="#about"
            className={`nav-link ${currentSection === "about" ? "active" : ""}`}
            onClick={(e) => handleNavClick(e, refs.aboutRef)}
          >
            <i className="fas fa-user"></i>
            <span>About</span>
          </a>
          <a
            href="#experience"
            className={`nav-link ${currentSection === "experience" ? "active" : ""}`}
            onClick={(e) => handleNavClick(e, refs.experienceRef)}
          >
            <i className="fas fa-briefcase"></i>
            <span>Experience</span>
          </a>
          <a
            href="#skills"
            className={`nav-link ${currentSection === "skills" ? "active" : ""}`}
            onClick={(e) => handleNavClick(e, refs.skillsRef)}
          >
            <i className="fas fa-cogs"></i>
            <span>Skills</span>
          </a>
          <a
            href="#projects"
            className={`nav-link ${currentSection === "projects" ? "active" : ""}`}
            onClick={(e) => handleNavClick(e, refs.projectsRef)}
          >
            <i className="fas fa-folder-open"></i>
            <span>Projects</span>
          </a>
          <a
            href="#contact"
            className={`nav-link ${currentSection === "contact" ? "active" : ""}`}
            onClick={(e) => handleNavClick(e, refs.contactRef)}
          >
            <i className="fas fa-envelope"></i>
            <span>Contact</span>
          </a>
        </div>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleDarkMode} title="Toggle Theme">
            <i className={darkMode ? "fas fa-sun" : "fas fa-moon"}></i>
          </button>

          <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
