import React from "react"
import SkillCard from "./SkillCard"

const Skills = React.forwardRef((props, ref) => {
  const skills = [
    { name: "JavaScript", level: 95, icon: "fab fa-js-square" },
    { name: "React", level: 90, icon: "fab fa-react" },
    { name: "Node.js", level: 85, icon: "fab fa-node-js" },
    { name: "Python", level: 80, icon: "fab fa-python" },
    { name: "TypeScript", level: 88, icon: "fas fa-code" },
    { name: "MongoDB", level: 75, icon: "fas fa-database" },
    { name: "PostgreSQL", level: 82, icon: "fas fa-server" },
    { name: "Docker", level: 78, icon: "fab fa-docker" },
    { name: "Git", level: 92, icon: "fab fa-git-alt" },
    { name: "AWS", level: 70, icon: "fab fa-aws" },
    { name: "HTML/CSS", level: 95, icon: "fab fa-html5" },
    { name: "Express.js", level: 85, icon: "fas fa-rocket" },
  ]

  return (
    <section ref={ref} className="skills" id="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <i className="fas fa-tools"></i> Skills & Technologies
          </h2>
          <div className="section-line"></div>
          <p className="section-description">Here are the technologies and tools I work with to bring ideas to life</p>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  )
})

export default Skills
