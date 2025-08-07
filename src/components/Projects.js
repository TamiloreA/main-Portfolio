import React from "react"
import ProjectCard from "./ProjectCard"

const Projects = React.forwardRef((props, ref) => {
  const projects = [
    {
      title: "Social Media App",
      description:
        "Full-featured social media platform with posts, comments, likes, and real-time messaging functionality.",
      technologies: ["MongoDB", "Node.js", "Socket.io", "Express", "Tailwind CSS", "TypeScript", "Next.js"],
      image: "/Screenshot 2025-08-08 at 00.36.10.png",
      github: "https://github.com/TamiloreA/vybe-social-media",
      live: "https://vybe-social-media-4jtt.vercel.app",
      icon: "fas fa-users",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Paystack"],
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      live: "#",
      icon: "fas fa-shopping-cart",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management tool with real-time updates using Socket.io. Built with modern React and Express.js.",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL", "Node.js"],
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      live: "#",
      icon: "fas fa-tasks",
    },
    {
      title: "Weather Dashboard",
      description:
        "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      technologies: ["JavaScript", "API Integration", "CSS3", "Chart.js"],
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      live: "#",
      icon: "fas fa-cloud-sun",
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website with smooth animations, dark mode, and optimized performance.",
      technologies: ["React", "CSS3", "JavaScript"],
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      live: "#",
      icon: "fas fa-globe",
    },
    {
      title: "API Management Tool",
      description:
        "Developer tool for testing and managing APIs with request history, environment variables, and team collaboration.",
      technologies: ["React", "Electron", "Node.js", "SQLite"],
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      live: "#",
      icon: "fas fa-cog",
    },
  ]

  return (
    <section ref={ref} className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <i className="fas fa-briefcase"></i> Featured Projects
          </h2>
          <div className="section-line"></div>
          <p className="section-description">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
})

export default Projects
