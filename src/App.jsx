import React, { useState, useEffect } from 'react';
import profileImage from './assets/ls.JPG';


const App = () => {
  // Slideshow/Typing effect for roles
  const roles = ["AIML Enthusiast", "Full-Stack Developer", "IoT Enthusiast"];
  const [currentRoleIdx, setCurrentRoleIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIdx((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      title: "Student Helper Portal",
      status: "In Progress",
      desc: "An all-in-one student ecosystem designed to store university syllabus tracking, allow seamless document uploads, and parse notes through an AI engine for structured text explanations.",
      tags: ["React", "Firebase", "Python AI Backend"]
    },
        {
      title: "AutoMail",
      status: "Completed",
      desc: "Built a Python-based hackathon email automation system that sends personalized confirmation emails in bulk using participant data from CSV files, with unique QR codes generated for each team.",
      tags: ["Python", "Gmail SMTP"],
      link:"https://github.com/kanna-05/mail"
    },
    {
      title: "AI Dish & Calorie Tracker",
      status: "Live App",
      desc: "Computer vision application running deep learning models to dynamically isolate culinary dishes from uploaded images and estimate baseline macronutrients.",
      tags: ["TensorFlow", "OpenCV", "Flask", "Python"],
      link: "http://Dish-detect-app.vercel.app"
    },
    {
      title: "Voice-to-Voice Translator",
      status: "Completed",
      desc: "Speech-to-text pipeline that captures microphone audio frequencies, maps them into string matrices, and interfaces with translation engines for vocal output.",
      tags: ["Python", "Google Translate API", "Speech"]
    }
  ];

  return (
    <div className="minimal-portfolio">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">LAKSHMI SRINIVAS</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="about" className="hero-section">
        <div className="hero-grid">
          <div className="hero-text-block">
            <span className="greeting">Hello, I'm</span>
            <h1 className="main-name">Lakshmi Srinivas</h1>
            
            {/* Smooth Role Slideshow */}
            <div className="slideshow-container">
              <span className="role-text animate-fade">{roles[currentRoleIdx]}</span>
            </div>

            <p className="hero-bio">
              B.Tech student specialized in Artificial Intelligence & Machine Learning. 
              I design lightweight user interfaces, write clean backend workflows, and experiment with physical IoT systems.
            </p>
            <div className="cta-buttons">
              <a href="mailto:chundurlakshmisrinivas@gmail.com" className="btn primary-btn">Get In Touch</a>
              <a href="https://www.linkedin.com/in/lakshmi-srinivas-chundru" target="_blank" rel="noreferrer" className="btn secondary-btn">LinkedIn</a>
            </div>
          </div>

          <div className="hero-image-block">
            <div className="image-frame">
              <img src={profileImage} alt="Lakshmi Srinivas" className="profile-img" />
            </div>
          </div>
        </div>
      </header>

      {/* Projects Section */}
      <section id="projects" className="section-container">
        <h2 className="section-title">Projects</h2>
        <div className="compact-projects-grid">
          {projects.map((proj, idx) => (
            <div key={idx} className="minimal-card">
              <div className="card-header">
                <h3>{proj.title}</h3>
                <span className={`status-badge ${proj.status.toLowerCase().replace(" ", "-")}`}>
                  {proj.status}
                </span>
              </div>
              <p className="card-desc">{proj.desc}</p>
              <div className="card-footer">
                <div className="tag-row">
                  {proj.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="mini-tag">{tag}</span>
                  ))}
                </div>
                {proj.link && (
                  <a href={proj.link} target="_blank" rel="noreferrer" className="live-link">Live Link ↗</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Stack Section */}
      <section id="skills" className="section-container">
        <h2 className="section-title">Core Stack</h2>
        <div className="skills-lineup">
          <div className="skill-pill">Python</div>
          <div className="skill-pill">Java</div>
          <div className="skill-pill">React.js</div>
          <div className="skill-pill">JavaScript</div>
          <div className="skill-pill">Firebase</div>
          <div className="skill-pill">OpenCV</div>
          <div className="skill-pill">Arduino IDE</div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="minimal-footer">
        <p>© 2026 </p>
           <p> Chundru Lakshmi Srinivas</p>
      </footer>
    </div>
  );
};

export default App;