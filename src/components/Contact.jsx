// Contact component - Contact form and information
// Learning: Form handling, controlled inputs with useState

import { useState } from 'react'

function Contact() {
  // State for form inputs - we need one state for each input field
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  // Event handler for input changes
  // This is called whenever user types in any input field
  const handleChange = (e) => {
    // e.target.name is the name attribute of the input
    // e.target.value is what the user typed
    setFormData({
      ...formData, // Keep existing values
      [e.target.name]: e.target.value // Update only the changed field
    })
  }

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault() // Prevent page refresh
    console.log('Form submitted:', formData)
    // In a real app, you'd send this data to a server
    alert('Thank you for your message! (This is just a demo)')
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's work together!</h3>
            <p>I'm always open to discussing new projects and opportunities.</p>
            <div className="contact-details">
              <p>📧 raphaelgziade@gmail.com</p>
              <p>📱 +961 03 635 951</p>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="contact-form">
            {/* 
              Controlled inputs: value is controlled by React state
              onChange updates the state when user types
            */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
            <button type="submit" className="btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
