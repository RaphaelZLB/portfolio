// Projects component - Showcase your work
// Learning: Component composition, props, and more complex data structures

function ProjectCard({ title, description, technologies, link, github }) {
  // This is a component that receives props (properties)
  // Props allow parent components to pass data to child components
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-tech">
        {/* Rendering an array of technologies */}
        {technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
      <div className="project-links">
        {link && <a href={link} target="_blank" rel="noopener noreferrer">Live Demo</a>}
        {github && <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>}
      </div>
    </div>
  )
}

function Projects() {
  // Array of project objects
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      description: 'A fully responsive e-commerce platform with shopping cart functionality.',
      technologies: ['React', 'CSS', 'JavaScript'],
      link: 'https://example.com',
      github: 'https://github.com/example'
    },
    {
      id: 2,
      title: 'Weather App',
      description: 'Real-time weather information using API integration.',
      technologies: ['React', 'API', 'CSS'],
      link: 'https://example.com',
      github: 'https://github.com/example'
    },
    {
      id: 3,
      title: 'Task Manager',
      description: 'A productivity app to organize and track daily tasks.',
      technologies: ['React', 'LocalStorage', 'CSS'],
      link: null, // Some projects might not have a live demo
      github: 'https://github.com/example'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {/* 
            We're using the ProjectCard component we defined above
            We pass each project's data as props using the spread operator {...project}
            This passes all properties of the project object as individual props
          */}
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
              github={project.github}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
