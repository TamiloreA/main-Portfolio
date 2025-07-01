const ExperienceCard = ({
    title,
    company,
    location,
    duration,
    type,
    description,
    achievements,
    technologies,
    icon,
    index,
  }) => {
    return (
      <div className={`experience-item ${index % 2 === 0 ? "left" : "right"}`}>
        <div className="experience-content">
          <div className="experience-header">
            <div className="experience-icon">
              <i className={icon}></i>
            </div>
            <div className="experience-info">
              <h3 className="experience-title">{title}</h3>
              <div className="experience-company">
                <i className="fas fa-building"></i>
                <span>{company}</span>
              </div>
              <div className="experience-meta">
                <div className="experience-duration">
                  <i className="fas fa-calendar-alt"></i>
                  <span>{duration}</span>
                </div>
                <div className="experience-location">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{location}</span>
                </div>
                <div className="experience-type">
                  <i className="fas fa-clock"></i>
                  <span>{type}</span>
                </div>
              </div>
            </div>
          </div>
  
          <p className="experience-description">{description}</p>
  
          <div className="experience-achievements">
            <h4>
              <i className="fas fa-trophy"></i> Key Achievements:
            </h4>
            <ul>
              {achievements.map((achievement, idx) => (
                <li key={idx}>
                  <i className="fas fa-check-circle"></i>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
  
          <div className="experience-technologies">
            <h4>
              <i className="fas fa-tools"></i> Technologies Used:
            </h4>
            <div className="tech-tags">
              {technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">
                  <i className="fas fa-tag"></i>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="timeline-dot"></div>
      </div>
    )
  }
  
  export default ExperienceCard
  