// About component - Personal information section
// Learning: Conditional rendering and props

function About() {
  // This is just data - we could also receive this as props from parent component
  const aboutInfo = {
    name: 'Raphael',
    title: 'Mobile Developer',
    description: 'Passionate about creating beautiful, user-friendly mobile applications. I love turning complex problems into simple, elegant solutions between your fingers and the screen.',
    location: 'Lebanon, Beirut',
    email: 'raphaelgziade@gmail.com'
  }

  // Conditional rendering example
  const showDetails = true

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>{aboutInfo.name}</h3>
            <p className="about-title">{aboutInfo.title}</p>
            <p>{aboutInfo.description}</p>
            
            {/* Conditional rendering - only shows if showDetails is true */}
            {showDetails && (
              <div className="about-details">
                <p><strong>Location:</strong> {aboutInfo.location}</p>
                <p><strong>Email:</strong> {aboutInfo.email}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
