"use client"

import { useState } from "react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData)
      setIsSubmitting(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
      alert("Message sent successfully!")
    }, 2000)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <div className="input-wrapper">
            <i className="fas fa-user input-icon"></i>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-wrapper">
            <i className="fas fa-envelope input-icon"></i>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="input-wrapper">
          <i className="fas fa-tag input-icon"></i>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="form-group">
        <div className="input-wrapper">
          <i className="fas fa-comment input-icon"></i>
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
      </div>
      <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <i className="fas fa-spinner fa-spin"></i> Sending...
          </>
        ) : (
          <>
            <i className="fas fa-paper-plane"></i> Send Message
          </>
        )}
      </button>
    </form>
  )
}

export default ContactForm
