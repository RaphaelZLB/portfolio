// Footer component - Simple footer with social links
// Learning: Simple component structure

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {currentYear} Raphael's Portfolio. All rights reserved.</p>
          <div className="social-links">
            <a href="https://github.com/RaphaelZLB" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/raphael-ziade-1b2ba128a/?trk=PROFILE_DROP_DOWN" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
