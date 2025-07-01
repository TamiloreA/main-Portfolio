import React from "react"

const About = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className="about" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <i className="fas fa-user-circle"></i> About Me
          </h2>
          <div className="section-line"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p className="about-paragraph">
              I'm a passionate software developer with over 5 years of experience in creating digital solutions that
              make a difference. My journey in tech started with curiosity and has evolved into a deep love for crafting
              clean, efficient code.
            </p>
            <p className="about-paragraph">
              I specialize in full-stack development, with expertise in modern frameworks and technologies. I believe in
              writing code that not only works but is also maintainable, scalable, and elegant.
            </p>
            <div className="about-stats">
              <div className="stat">
                <i className="fas fa-project-diagram stat-icon"></i>
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <i className="fas fa-calendar-alt stat-icon"></i>
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <i className="fas fa-heart stat-icon"></i>
                <span className="stat-number">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="profile-card">
              <div className="profile-image">
                <div className="avatar">
                  <i className="fas fa-user-tie"></i>
                </div>
              </div>
              <div className="profile-info">
                <h3>Tamilore Akinsola</h3>
                <p>
                  <i className="fas fa-code"></i> Software Developer
                </p>
                <div className="profile-links">
                  <a href="mailto:tamiloreakinsola@gmail.com" className="profile-link" title="Email">
                    <i className="fas fa-envelope"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/akinsola-oluwatamilore-b7337b328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="profile-link" title="LinkedIn">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="profile-link" title="GitHub">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default About
