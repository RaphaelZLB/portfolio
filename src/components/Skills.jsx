// Skills component - Display your technical skills
// Learning: Arrays, map() function, and rendering lists in React

function Skills() {
  // Array of skills - in React, we often work with arrays of data
  const skills = [
    { name: 'Flutter', level: 90 },
    { name: 'Node.js', level: 70 },
    { name: 'Laravel', level: 50 },
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 75 },
    { name: 'Git', level: 90 },
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {/* 
            .map() is used to transform an array into JSX elements
            Each skill becomes a div element
            key prop is required for list items in React (helps React track changes)
          */}
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <h3>{skill.name}</h3>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                >
                  {/* Inline styles in React use objects, not strings */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
