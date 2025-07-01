import React from "react"
import ExperienceCard from "./ExperienceCard"

const Experience = React.forwardRef((props, ref) => {
  const experiences = [
    {
      title: "Blockchain Architect",
      company: "GlobPay",
      location: "Remote",
      duration: "2025 - Present",
      type: "Part-time",
      description:
        "Architecting and implementing blockchain-integrated systems with a focus on scalability, performance, and security. Leading the design of decentralized components while integrating them with React-based frontends and Node.js microservices. Collaborating with cross-functional teams to deliver enterprise-grade financial solutions.",
      achievements: [
        "Designed and deployed a smart contract-based payment system handling 1M+ daily requests",
        "Led a team of 5 developers on major product releases",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Optimized blockchain transaction throughput and backend API performance, improving system speed by 40%",
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Ethereum", "Solidity", "Docker"],
      icon: "fas fa-laptop-code",
    },
    {
      title: "Frontend Developer",
      company: "Holmee",
      location: "Remote",
      duration: "2025 - Present",
      type: "Part-time",
      description:
        "Developed and maintained multiple client projects using modern web technologies. Collaborated with design and product teams to deliver high-quality solutions.",
      achievements: [
        "Built 15+ responsive web applications from scratch",
        "Reduced bug reports by 50% through comprehensive testing",
        "Implemented real-time features using WebSocket technology",
        "Optimized database queries improving load times by 35%",
      ],
      technologies: ["React", "Git", "NextJs", "TailwindCSS","TypeScript" ],
      icon: "fas fa-rocket",
    },
    {
      title: "Full-Stack Developer Intern",
      company: "The Code Center",
      location: "Lagos, Nigeria",
      duration: "2024 - 2024",
      type: "Full-time",
      description:
        "Contributed to full-stack web development across multiple client projects, building scalable backend APIs with MongoDB and Express, and dynamic, responsive frontends using React. Collaborated cross-functionally with designers and developers to deliver high-quality, production-ready applications.",
      achievements: [
        "Delivered 20+ client projects on time and within budget",
        "Improved website loading speeds by 45% on average",
        "Implemented accessibility standards (WCAG 2.1)",
        "Mentored 3 junior developers and interns",
      ],
      technologies: ["JavaScript", "React", "CSS3", "API", "NextJs", "MongoDB"],
      icon: "fas fa-paint-brush",
    },
    {
      title: "Full-Stack Engineer Intern",
      company: "SilverEdge Projects",
      location: "Lagos, Nigeria",
      duration: "2023 - 2024",
      type: "Full-time",
      description:
        "Started my professional journey building websites and learning modern development practices. Gained experience in both frontend and backend technologies.",
      achievements: [
        "Successfully completed 10+ website projects",
        "Learned and implemented responsive design principles",
        "Contributed to team code reviews and best practices",
        "Achieved 95% client satisfaction rating",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Nodejs", "MySQL"],
      icon: "fas fa-seedling",
    },
  ]

  return (
    <section ref={ref} className="experience" id="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <i className="fas fa-briefcase"></i> Professional Experience
          </h2>
          <div className="section-line"></div>
          <p className="section-description">
            My journey through various roles and companies, building expertise in modern web development
          </p>
        </div>
        <div className="experience-timeline">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
})

export default Experience
