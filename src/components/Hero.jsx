// Hero component - The main introduction section
// We'll learn about useState hook here for interactive elements

import { useState } from 'react'

function Hero() {
  // useState is a React Hook that lets you add state to functional components
  // [currentValue, setterFunction] = useState(initialValue)
  const [greeting, setGreeting] = useState('Hello!')

  // Event handler function
  const handleClick = () => {
    const greetings = ['Hello!', 'Hola!', 'Bonjour!', 'Ciao!', 'Namaste!']
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)]
    setGreeting(randomGreeting) // This updates the state and re-renders the component
  }

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>{greeting} I'm a Software Developer</h1>
        <p className="hero-subtitle">I build beautiful and functional software experiences, you will get to know me better as you scroll down</p>
        {/* <button onClick={handleClick} className="cta-button">
          Change Greeting
        </button> */}
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="#contact" className="btn-secondary">Get In Touch</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
