import React from "react"
import ContactForm from "./ContactForm"

const Contact = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <i className="fas fa-handshake"></i> Let's Work Together
          </h2>
          <div className="section-line"></div>
          <p className="section-description">Ready to bring your ideas to life? Let's discuss your next project</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <h3>
              <i className="fas fa-phone-alt"></i> Get In Touch
            </h3>
            <p>
              I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your
              ideas to life!
            </p>
            <div className="contact-methods">
              <div className="contact-method">
                <span className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </span>
                <div className="contact-details">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">tamiloreakinsola@gmail.com</span>
                </div>
              </div>
              <div className="contact-method">
                <span className="contact-icon">
                  <i className="fas fa-phone"></i>
                </span>
                <div className="contact-details">
                  <span className="contact-label">Phone</span>
                  <span className="contact-value">+234 91 6642 8213</span>
                </div>
              </div>
              <div className="contact-method">
                <span className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <div className="contact-details">
                  <span className="contact-label">Location</span>
                  <span className="contact-value">Lagos, Nigeria</span>
                </div>
              </div>
              <div className="contact-method">
                <span className="contact-icon">
                  <i className="fab fa-linkedin"></i>
                </span>
                <div className="contact-details">
                  <span className="contact-label">LinkedIn</span>
                  <span className="contact-value">linkedin.com/in/Akinsola Oluwatamilore</span>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
})

export default Contact
