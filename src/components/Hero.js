"use client"

import React from "react"
import TypewriterText from "./TypewriterText"

const Hero = React.forwardRef(({ scrollToSection, projectsRef, contactRef }, ref) => {
  return (
    <section ref={ref} className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Tamilore Akinsola</span>
            </h1>
            <div className="typing-container">
              <TypewriterText />
            </div>
            <p className="hero-description">
              Passionate software developer crafting digital experiences with clean code and innovative solutions. I
              build applications that make a difference.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection(projectsRef)}>
                <i className="fas fa-eye"></i>
                View My Work
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection(contactRef)}>
                <i className="fas fa-paper-plane"></i>
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-elements">
              <div className="floating-element element-1">
                <i className="fab fa-js-square"></i>
              </div>
              <div className="floating-element element-2">
                <i className="fab fa-react"></i>
              </div>
              <div className="floating-element element-3">
                <i className="fab fa-node-js"></i>
              </div>
              <div className="floating-element element-4">
                <i className="fab fa-python"></i>
              </div>
              <div className="floating-element element-5">
                <i className="fab fa-git-alt"></i>
              </div>
              <div className="floating-element element-6">
                <i className="fab fa-docker"></i>
              </div>
            </div>
            <div className="hero-code-block">
              <div className="code-header">
                <div className="code-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <span className="code-title">
                  <i className="fas fa-file-code"></i> portfolio.js
                </span>
              </div>
              <div className="code-content">
                <div className="code-line">
                  <span className="code-keyword">const</span> <span className="code-variable">developer</span> = {"{"}
                </div>
                <div className="code-line">
                  &nbsp;&nbsp;<span className="code-property">name</span>:{" "}
                  <span className="code-string">"Tammy Akin"</span>,
                </div>
                <div className="code-line">
                  &nbsp;&nbsp;<span className="code-property">skills</span>: [
                  <span className="code-string">"React"</span>, <span className="code-string">"Node.js"</span>],
                </div>
                <div className="code-line">
                  &nbsp;&nbsp;<span className="code-property">passion</span>:{" "}
                  <span className="code-string">"coding"</span>
                </div>
                <div className="code-line">{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow">
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </section>
  )
})

export default Hero
