const ProjectCard = ({ title, description, technologies, image, github, live, icon }) => {
    return (
      <div className="project-card">
        <div className="project-image">
          <img src={image || "/placeholder.svg"} alt={title} />
          <div className="project-overlay">
            <a href={live} className="project-btn" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-external-link-alt"></i> Live Demo
            </a>
            <a href={github} className="project-btn" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> View Code
            </a>
          </div>
        </div>
        <div className="project-content">
          <div className="project-header">
            <i className={icon}></i>
            <h3 className="project-title">{title}</h3>
          </div>
          <p className="project-description">{description}</p>
          <div className="project-technologies">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-tag">
                <i className="fas fa-tag"></i> {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  export default ProjectCard
  