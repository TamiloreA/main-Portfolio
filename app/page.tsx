"use client"

import { useState, useEffect, useRef } from "react"
import "./globals.css"

export default function Portfolio() {
  const [currentSection, setCurrentSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "home", ref: heroRef },
        { id: "about", ref: aboutRef },
        { id: "skills", ref: skillsRef },
        { id: "projects", ref: projectsRef },
        { id: "contact", ref: contactRef },
      ]

      const scrollPosition = window.scrollY + 100

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
    setIsMenuOpen(false)
  }

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">{"<Dev/>"}</span>
          </div>

          <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            <a
              href="#home"
              className={`nav-link ${currentSection === "home" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(heroRef)
              }}
            >
              Home
            </a>
            <a
              href="#about"
              className={`nav-link ${currentSection === "about" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(aboutRef)
              }}
            >
              About
            </a>
            <a
              href="#skills"
              className={`nav-link ${currentSection === "skills" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(skillsRef)
              }}
            >
              Skills
            </a>
            <a
              href="#projects"
              className={`nav-link ${currentSection === "projects" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(projectsRef)
              }}
            >
              Projects
            </a>
            <a
              href="#contact"
              className={`nav-link ${currentSection === "contact" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(contactRef)
              }}
            >
              Contact
            </a>
          </div>

          <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="hero" id="home">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Hi, I'm <span className="highlight">John Doe</span>
              </h1>
              <div className="typing-container">
                <TypewriterText />
              </div>
              <p className="hero-description">
                Passionate software developer crafting digital experiences with clean code and innovative solutions.
              </p>
              <div className="hero-buttons">
                <button className="btn btn-primary" onClick={() => scrollToSection(projectsRef)}>
                  View My Work
                </button>
                <button className="btn btn-secondary" onClick={() => scrollToSection(contactRef)}>
                  Get In Touch
                </button>
              </div>
            </div>
            <div className="hero-visual">
              <div className="floating-elements">
                <div className="floating-element element-1">{"{ }"}</div>
                <div className="floating-element element-2">{"< />"}</div>
                <div className="floating-element element-3">{"( )"}</div>
                <div className="floating-element element-4">{"[ ]"}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="about" id="about">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <div className="section-line"></div>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p className="about-paragraph">
                I'm a passionate software developer with over 5 years of experience in creating digital solutions that
                make a difference. My journey in tech started with curiosity and has evolved into a deep love for
                crafting clean, efficient code.
              </p>
              <p className="about-paragraph">
                I specialize in full-stack development, with expertise in modern frameworks and technologies. I believe
                in writing code that not only works but is also maintainable, scalable, and elegant.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Client Satisfaction</span>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="image-container">
                <div className="code-snippet">
                  <div className="code-line">const developer = {"{"}</div>
                  <div className="code-line"> name: "John Doe",</div>
                  <div className="code-line"> passion: "coding",</div>
                  <div className="code-line"> coffee: "essential"</div>
                  <div className="code-line">{"}"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="skills" id="skills">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Skills & Technologies</h2>
            <div className="section-line"></div>
          </div>
          <div className="skills-grid">
            <SkillCard name="JavaScript" level={95} icon="JS" />
            <SkillCard name="React" level={90} icon="⚛️" />
            <SkillCard name="Node.js" level={85} icon="🟢" />
            <SkillCard name="Python" level={80} icon="🐍" />
            <SkillCard name="TypeScript" level={88} icon="TS" />
            <SkillCard name="MongoDB" level={75} icon="🍃" />
            <SkillCard name="PostgreSQL" level={82} icon="🐘" />
            <SkillCard name="Docker" level={78} icon="🐳" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="projects" id="projects">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <div className="section-line"></div>
          </div>
          <div className="projects-grid">
            <ProjectCard
              title="E-Commerce Platform"
              description="Full-stack e-commerce solution with React, Node.js, and MongoDB"
              technologies={["React", "Node.js", "MongoDB", "Stripe"]}
              image="/placeholder.svg?height=300&width=400"
            />
            <ProjectCard
              title="Task Management App"
              description="Collaborative task management tool with real-time updates"
              technologies={["React", "Socket.io", "Express", "PostgreSQL"]}
              image="/placeholder.svg?height=300&width=400"
            />
            <ProjectCard
              title="Weather Dashboard"
              description="Beautiful weather app with location-based forecasts"
              technologies={["JavaScript", "API Integration", "CSS3"]}
              image="/placeholder.svg?height=300&width=400"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="contact" id="contact">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Let's Work Together</h2>
            <div className="section-line"></div>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Get In Touch</h3>
              <p>
                I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your
                ideas to life!
              </p>
              <div className="contact-methods">
                <div className="contact-method">
                  <span className="contact-icon">📧</span>
                  <span>john.doe@email.com</span>
                </div>
                <div className="contact-method">
                  <span className="contact-icon">📱</span>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="contact-method">
                  <span className="contact-icon">📍</span>
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2024 John Doe. Crafted with ❤️ and lots of ☕</p>
            <div className="social-links">
              <a href="#" className="social-link">
                GitHub
              </a>
              <a href="#" className="social-link">
                LinkedIn
              </a>
              <a href="#" className="social-link">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Typewriter Component
function TypewriterText() {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const words = ["Software Developer", "Full Stack Engineer", "Problem Solver", "Code Enthusiast"]

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % words.length
      const fullText = words[current]

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1))

      setTypingSpeed(isDeleting ? 30 : 150)

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500)
      } else if (isDeleting && text === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleType, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, words])

  return (
    <h2 className="typewriter">
      I'm a <span className="typed-text">{text}</span>
      <span className="cursor">|</span>
    </h2>
  )
}

// Skill Card Component
function SkillCard({ name, level, icon }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={cardRef} className="skill-card">
      <div className="skill-icon">{icon}</div>
      <h3 className="skill-name">{name}</h3>
      <div className="skill-bar">
        <div
          className="skill-progress"
          style={{
            width: isVisible ? `${level}%` : "0%",
            transition: "width 1s ease-in-out",
          }}
        ></div>
      </div>
      <span className="skill-percentage">{level}%</span>
    </div>
  )
}

// Project Card Component
function ProjectCard({ title, description, technologies, image }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image || "/placeholder.svg"} alt={title} />
        <div className="project-overlay">
          <button className="project-btn">View Project</button>
          <button className="project-btn">View Code</button>
        </div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

// Contact Form Component
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Send Message
      </button>
    </form>
  )
}
