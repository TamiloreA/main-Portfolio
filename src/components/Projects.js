import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard";

const Projects = React.forwardRef((props, ref) => {
  const projects = [
    {
      category: "Full-Stack Web App",
  dateRange: "2025",
  title: "Vybe — Social Media",
  subtitle: "Realtime chat, calls, and rich media",
  subtitleHref: "https://vybe-social-media-4jtt.vercel.app",
  description:
    "Vybe is a full-stack social platform built to fix fragmented online conversations for communities and friends. Designed as a unified hub, it lets users chat in real time, start 1:1 or group audio/video calls, share rich media, and stay in sync across devices. Under the hood, a robust real-time pipeline and clean data model keep timelines consistent and responsive, while an accessible, themable design system ensures a smooth experience in both light and dark modes.",
  features: [
    "Real-Time Messaging: Presence, typing indicators, delivery and read receipts keep conversations feeling live.",
    "Audio/Video Calls: WebRTC with STUN/TURN fallback for reliable 1:1 and group calls, plus echo cancellation.",
    "Rich Threads & Media: Text, images, video, voice notes, files, replies, and reactions—all organized and searchable.",
    "Smart Notifications: Push and in-app alerts with per-thread mute/priority to reduce noise and highlight what matters.",
    "Offline & Reliability: Optimistic updates, local cache, and background sync so messages survive flaky networks."
  ],
  technologies: ["Next.js", "Node.js", "Express", "MongoDB", "Socket.IO", "Tailwind CSS", "TypeScript"],
  images: ["/Screenshot 2025-08-08 at 00.36.10.png", "/vybe2.png",],
      github: "https://github.com/TamiloreA/vybe-social-media",
      live: "https://vybe-social-media-4jtt.vercel.app",
    },
    {
      category: "Full-Stack Web App",
      dateRange: "2025",
      title: "HydroTracker (H2T)",
      subtitle: "Water intake tracker with goals & insights",
      subtitleHref: "#",
      description:
        "HydroTracker (H2T) is a full-stack hydration companion built to turn healthy drinking into a simple daily habit. Designed as a centralized tracker, it lets users set personalized goals, log intake in one tap, and get WHO-aligned feedback in real time. Progress rings, streaks, and smart reminders keep motivation high, while clean analytics reveal patterns across days and weeks—all in an accessible, mobile-first experience with light/dark theming.",
      features: [
        "Goal & Personalization: Set daily targets based on weight, activity level, and climate; auto-adjusts with preferences.",
        "Fast Logging: One-tap quick-add buttons (e.g., 150ml/300ml/500ml) with custom sizes and undo.",
        "Guided Feedback: WHO-aligned tips and progress rings that update instantly as you log.",
        "Insights & Charts: Daily/weekly charts, streak tracking, and quick stats (goal completion, deficit/surplus).",
        "Smart Reminders: Quiet hours, snooze, and adaptive nudges when you’re falling behind.",
        "Offline-First Reliability: Optimistic updates with background sync so logs never get lost.",
        "Accounts & Security: Email login, protected API routes, and MongoDB persistence.",
        "Export & Portability: CSV export of intake history for personal records or coaching."
      ],
      technologies: ["Next.js (App Router)", "React", "MongoDB", "Tailwind CSS", "TypeScript", "Zod", "Prisma"],
      images: [
        "/Screenshot 2025-08-10 at 17.16.08.png",
        "/h2t22.jpeg",
        "/h2t33.jpeg",
      ],
      github: "https://github.com/TamiloreA/water-intake-tracker",
      live: "https://water-intake-tracker-self.vercel.app"
    }
    
  ];

  // reveal-on-scroll
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".fade-in"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="projects projects--dark" id="projects">
      <div className="container">
        <header className="projects-header">
          <div className="projects-heading">Featured Projects</div>
          <div className="projects-underline" />
          <p className="projects-subtitle">
            A showcase of my recent work in full-stack development, AI integration, and mobile applications
          </p>
        </header>

        <div className="featured-list">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} flip={i % 2 === 1} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
});

export default Projects;
