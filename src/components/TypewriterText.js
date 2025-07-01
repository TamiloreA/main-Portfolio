"use client"

import { useState, useEffect } from "react"

const TypewriterText = () => {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const words = ["Software Developer", "Full Stack Engineer", "Problem Solver", "Code Enthusiast"]

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % words.length
      const fullText = words[current]

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1))

      setTypingSpeed(isDeleting ? 30 : 150)

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500)
      } else if (isDeleting && text === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleType, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, words])

  return (
    <h2 className="typewriter">
      I'm a <span className="typed-text">{text}</span>
      <span className="cursor">|</span>
    </h2>
  )
}

export default TypewriterText
