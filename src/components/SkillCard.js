"use client"

import { useState, useEffect, useRef } from "react"

const SkillCard = ({ name, level, icon }) => {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={cardRef} className="skill-card">
      <div className="skill-icon">
        <i className={icon}></i>
      </div>
      <h3 className="skill-name">{name}</h3>
      <div className="skill-bar">
        <div
          className="skill-progress"
          style={{
            width: isVisible ? `${level}%` : "0%",
            transition: "width 1s ease-in-out",
          }}
        ></div>
      </div>
      <span className="skill-percentage">{level}%</span>
    </div>
  )
}

export default SkillCard
