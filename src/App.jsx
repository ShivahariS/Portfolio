import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
 ArrowDownRight,
 ArrowDownToLine,
 ArrowRight,
 ArrowUpRight,
 BookOpen,
 Code2,
 Database,
 GitBranch,
 Github,
 GraduationCap,
 Linkedin,
 Mail,
 PanelsTopLeft,
 Server,
 Sparkles,
 Users
} from "lucide-react";

import "./styles.css";

/* =========================================================
   1. PORTFOLIO DATA
   Update these arrays and objects when your details change.
========================================================= */

const personalInfo = {
 name: "Shivahari S",
 role: "Java Full Stack Developer",
 email: "shivaharipvt@gmail.com",
 github: "https://github.com/ShivahariS",
 linkedin: "https://linkedin.com/in/shivahari-s-560308349",
};

const navigation = [
 { label: "About", href: "#about" },
 { label: "Skills", href: "#skills" },
 { label: "Projects", href: "#projects" },
 { label: "Education", href: "#education" },
 { label: "Contact", href: "#contact" },
];

const skillGroups = [
 {
  title: "Programming Languages",
  subtitle: "Languages and fundamentals",
  icon: Code2,
  skills: ["Java", "C", "Python", "Verilog", "MATLAB"],
 },
 {
  title: "Web UI",
  subtitle: "Frontend development",
  icon: PanelsTopLeft,
  skills: ["HTML", "CSS", "JavaScript", "React"],
 },
 {
  title: "Databases",
  subtitle: "Data storage and queries",
  icon: Database,
  skills: ["SQL"],
 },
 {
  title: "Frameworks & Tools",
  subtitle: "Application development",
  icon: Server,
  skills: ["Maven", "Spring", "Spring Boot", "REST APIs"],
 },
 {
  title: "Cloud & Version Control",
  subtitle: "Development tools",
  icon: GitBranch,
  skills: ["Git", "GitHub", "Docker"],
 },
 {
  title: "Soft Skills",
  subtitle: "How I work with others",
  icon: Users,
  skills: [
   "Communication",
   "Teamwork",
   "Time Management",
   "Adaptability",
  ],
 },
];

const projects = [
 {
  number: "01",
  category: "FULL STACK PROJECT",
  title: "ITSM DeskPro",
  status: "Developed",
  statusClass: "status-complete",
  description:
      "Developed an enterprise IT Service Management portal using Java Spring Boot, React, and MySQL. Implemented secure REST APIs with JWT authentication, Spring Security, Hibernate, and role-based access control. Features include incident tracking, service requests, change management, asset management, and analytics dashboards.",
  technologies: [
   "Java",
   "Spring Boot",
   "React",
   "MySQL",
   "REST APIs",
   "JWT",
   "Spring Security",
   "Hibernate",
  ],
  link: "https://github.com/ShivahariS/ITSM_DeskPro",
 },
 {
  number: "02",
  category: "JAVA APPLICATION",
  title: "Employee Management System",
  status: "Developed",
  statusClass: "status-complete",
  description:
      "Developed a desktop-based Java application for managing employee records. Supports adding, updating, deleting, and viewing employee details using SQL CRUD operations.",
  technologies: ["Java", "SQL", "CRUD Operations"],
  link: "https://github.com/ShivahariS/Employee-Management-System",
 },
];

const education = [
 {
  icon: GraduationCap,
  label: "BACHELOR'S DEGREE",
  qualification: "B.Tech in Electronics and Communication Engineering",
  institution: "Sri Manakula Vinayagar Engineering College",
  details: "Electronics and Communication Engineering",
  score: "7.87",
  scoreLabel: "CGPA",
  period: "2022 – 2026",
 },
 {
  icon: BookOpen,
  label: "HIGHER SECONDARY",
  qualification: "HSC",
  institution: "Aklavya International School",
  details: "ISC Board of Education",
  score: "85.25%",
  scoreLabel: "Percentage",
  period: "2021 - 2022"
 },
 {
  icon: BookOpen,
  label: "SECONDARY EDUCATION",
  qualification: "SSLC",
  institution: "Aklavya International School",
  details: "ICSE Board of Education",
  score: "89.25%",
  scoreLabel: "Percentage",
  period: "2019 - 2020"
 },
];

/* =========================================================
   2. REUSABLE COMPONENTS
========================================================= */

function SectionTitle({ eyebrow, children }) {
 return (
     <div className="section-title">
      <p className="micro-label">{eyebrow}</p>
      <h2>{children}</h2>
     </div>
 );
}

function SectionLink({ href, children }) {
 return (
     <a className="text-link" href={href}>
      {children}
      <ArrowUpRight size={16} aria-hidden="true" />
     </a>
 );
}

function SkillCard({ group, index }) {
 const Icon = group.icon;

 return (
     <motion.article
         className="skill-card"
         initial={{ opacity: 0, y: 24 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, amount: 0.2 }}
         transition={{ duration: 0.45, delay: index * 0.08 }}
     >
      <div className="skill-card-top">
       <div className="skill-icon">
        <Icon size={22} />
       </div>

       <span className="skill-number">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3>{group.title}</h3>
      <p className="skill-subtitle">{group.subtitle}</p>

      <div className="skill-list">
       {group.skills.map((skill) => (
           <span key={skill}>{skill}</span>
       ))}
      </div>
     </motion.article>
 );
}

function ProjectCard({ project, index }) {
 return (
     <motion.article
         className="project-card"
         initial={{ opacity: 0, y: 24 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, amount: 0.15 }}
         transition={{ duration: 0.45, delay: index * 0.1 }}
     >
      <div className="project-card-header">
       <span className="project-number">{project.number}</span>

       <span className={`project-status ${project.statusClass}`}>
          {project.status}
        </span>
      </div>

      <p className="micro-label">{project.category}</p>

      <h3>{project.title}</h3>

      <p className="project-description">{project.description}</p>

      <div className="project-tags">
       {project.technologies.map((technology) => (
           <span className="project-tag" key={technology}>
            {technology}
          </span>
       ))}
      </div>
      <a
          className="project-link"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
      >
       View Project
       <ArrowUpRight size={18} />
      </a>
     </motion.article>
 );
}


function EducationCard({ item, index }) {
 const Icon = item.icon;

 return (
     <motion.article
         className="education-card"
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, amount: 0.2 }}
         transition={{ duration: 0.4, delay: index * 0.1 }}
     >
      <div className="education-icon">
       <Icon size={23} aria-hidden="true" />
      </div>

      <div className="education-details">
       <p className="micro-label">{item.label}</p>
       <h3>{item.qualification}</h3>
       <p>{item.institution}</p>
       <span>{item.details}</span>
      </div>

      <div className="education-result">
       <strong>{item.score}</strong>
       <span>{item.scoreLabel}</span>
       {item.period && <small>{item.period}</small>}
      </div>

      <Icon
          className="education-watermark"
          size={76}
          aria-hidden="true"
      />
     </motion.article>
 );
}


/* =========================================================
   3. MAIN PORTFOLIO PAGE
========================================================= */

export default function App() {
 const [activeSection, setActiveSection] = useState("#about");

 useEffect(() => {
  const sectionIds = navigation
      .map((item) => item.href.substring(1))
      .filter((id) => document.getElementById(id));

  const handleScroll = () => {
   const atBottom =
       window.innerHeight + window.scrollY >=
       document.documentElement.scrollHeight - 10;

   if (atBottom) {
    setActiveSection(`#${sectionIds[sectionIds.length - 1]}`);
    return;
   }

   let currentSection = `#${sectionIds[0]}`;

   for (const id of sectionIds) {
    const section = document.getElementById(id);

    if (section && section.getBoundingClientRect().top <= 160) {
     currentSection = `#${id}`;
    }
   }

   setActiveSection(currentSection);
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll, {
   passive: true,
  });
  window.addEventListener("resize", handleScroll);

  return () => {
   window.removeEventListener("scroll", handleScroll);
   window.removeEventListener("resize", handleScroll);
  };
 }, []);

 return (
     <main className="portfolio">
      {/* ---------- Navigation ---------- */}
      <header className="site-header">
       <a className="brand" href="#home" aria-label="Go to home">
        <span className="brand-mark">Shivahari's </span>
        <span className="brand-name">Portfolio</span>
       </a>


       <nav className="nav-links" aria-label="Main navigation">
        {navigation.map((item) => (
            <a
                href={item.href}
                key={item.href}
                className={activeSection === item.href ? "active" : ""}
                aria-current={activeSection === item.href ? "location" : undefined}
            >
             {item.label}
            </a>
        ))}
       </nav>


       <a className="header-contact" href="#contact">
        Let&apos;s talk
        <ArrowUpRight size={16} aria-hidden="true" />
       </a>
      </header>

      {/* ---------- Hero ---------- */}

      <section className="hero section-shell" id="home">
       <motion.div
           className="hero-copy"
           initial={{ opacity: 0, y: 24 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.65 }}
       >
        <p className="eyebrow">
         <span className="live-dot" />
         ASPIRING JAVA FULL STACK DEVELOPER
        </p>

        <p className="hero-pretitle">HELLO, I'M</p>

        <h1>
         Shivahari <span className="name-accent">S.</span>
        </h1>

        <p className="hero-role">
         Java Full Stack Developer
        </p>

        <p className="hero-description">
         I'm passionate about building modern web applications with
         clean interfaces, reliable backend systems, and practical
         solutions to real-world problems.
        </p>

        <div className="hero-actions">
         <a className="button button-light" href="#projects">
          Explore my work <ArrowDownRight size={16} />
         </a>

         <a className="button button-outline" href="#contact">
          Get in touch <ArrowUpRight size={16} />
         </a>

         <a href="/resume.pdf" download="Shivahari_S_Resume.pdf" className="secondary-button">
          Download Resume <ArrowDownToLine size={17} aria-hidden="true" />
         </a>
        </div>

        <div className="hero-meta">
         <span><Github size={15} /> GitHub</span>
         <span className="meta-divider" />
         <span><Linkedin size={15} /> LinkedIn</span>
         <span className="meta-divider" />
         <span><Mail size={15} /> Email</span>
        </div>
       </motion.div>

       <motion.div
           className="portrait-column"
           initial={{ opacity: 0, scale: 0.96 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.7, delay: 0.15 }}
       >
        <div className="portrait-orbit orbit-a" />
        <div className="portrait-orbit orbit-b" />

        <div className="portrait-card">
         <img
             src="/profile.png"
             alt="Portrait of Shivahari"
             onError={(event) => {
              event.currentTarget.style.display = "none";
             }}
         />

         <div className="portrait-placeholder">
          <span className="placeholder-monogram">S.</span>
          <p>Java Full Stack Developer</p>
          <small>REACT · JAVA · SPRING BOOT</small>
         </div>

         <div className="portrait-bottom">
          <span>SHIVAHARI S.</span>
          <span>DEVELOPER</span>
         </div>
        </div>

        <div className="float-label float-java">
         <span className="float-icon java">J</span>
         <div>
          <b>Java</b>
          <small>Backend development</small>
         </div>
        </div>

        <div className="float-label float-spring">
         <span className="float-icon spring">S</span>
         <div>
          <b>Spring Boot</b>
          <small>Building APIs</small>
         </div>
        </div>

        <div className="portrait-caption">
         <Sparkles size={13} />
         Always learning. Always building.
        </div>
       </motion.div>
      </section>



      {/* ---------- About ---------- */}
      <section className="section-shell section-block about-section" id="about">
       <SectionTitle eyebrow="01 / ABOUT ME">
        Building with purpose.
        <br />
        <span className="muted-heading">Learning every day.</span>
       </SectionTitle>

       <div className="about-grid">
        <div className="about-main">
         <p>
          I'm an Electronics and Communication Engineering graduate
          with an interest in Java full-stack development. I enjoy
          learning how frontend experiences connect with backend
          logic and databases to create useful applications.
         </p>

         <p>
          My current focus is strengthening my skills in Java,
          Spring Boot, React, REST APIs, and SQL while building
          projects that help me apply what I learn.
         </p>
        </div>

        <div className="about-side">
         <div className="about-detail">
          <span className="about-detail-label">FOCUS</span>
          <strong>Java Full Stack</strong>
         </div>

         <div className="about-detail">
          <span className="about-detail-label">FRONTEND</span>
          <strong>React &amp; JavaScript</strong>
         </div>

         <div className="about-detail">
          <span className="about-detail-label">BACKEND</span>
          <strong>Java &amp; Spring Boot</strong>
         </div>
        </div>
       </div>
      </section>

      {/* ---------- Skills ---------- */}
      <section className="section-shell section-block" id="skills">
       <SectionTitle eyebrow="02 / MY TOOLKIT">
        Skills &amp; <span className="muted-heading">technologies.</span>
       </SectionTitle>

       <div className="skills-grid">
        {skillGroups.map((group, index) => (
            <SkillCard
                group={group}
                index={index}
                key={group.title}
            />
        ))}
       </div>
      </section>

      {/* ---------- Projects ---------- */}
      <section className="section-shell section-block" id="projects">
       <div className="section-heading-row">
        <SectionTitle eyebrow="03 / SELECTED WORK">
         Projects &amp; <span className="muted-heading">ideas.</span>
        </SectionTitle>

        <span className="section-side-note">
            Learning through building
          </span>
       </div>

       <div className="projects-grid">
        {projects.map((project, index) => (
            <ProjectCard
                project={project}
                index={index}
                key={project.number}
            />
        ))}
       </div>
      </section>

      {/* ---------- Education ---------- */}
      <section className="section-shell section-block" id="education">
       <SectionTitle eyebrow="04 / EDUCATION">
        Education &amp; <span className="muted-heading">background.</span>
       </SectionTitle>

       <div className="education-list">
        {education.map((item, index) => (
            <EducationCard
                item={item}
                index={index}
                key={item.label}
            />
        ))}
       </div>
      </section>


      {/* ---------- Contact ---------- */}
      <section
          className="section-shell section-block"
          id="contact"
      >
       <div className="contact-panel">
        <div className="contact-content">
         <p className="micro-label">
          05 / GET IN TOUCH
         </p>

         <h2>
          Have an opportunity?
          <br />
          <span className="muted-heading">
                Let&apos;s connect.
              </span>
         </h2>

         <p className="contact-description">
          I&apos;m open to connecting with developers,
          learning from experienced teams, and exploring
          suitable opportunities in software development.
         </p>

         <a
             className="primary-button contact-cta"
             href={`https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(personalInfo.email)}`}
             target="_blank"
             rel="noopener noreferrer"
         >
          <Mail size={18} aria-hidden="true" />
          <span>Send me an email</span>
          <ArrowRight size={17} aria-hidden="true" />
         </a>
        </div>

        <div className="contact-links">
         <a
             href={`https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(personalInfo.email)}`}
             target="_blank"
             rel="noopener noreferrer"
             className="contact-link"
         >
              <span className="contact-link-icon">
                <Mail size={19} aria-hidden="true" />
              </span>

          <span className="contact-link-text">
                <small>EMAIL</small>
                <strong>{personalInfo.email}</strong>
              </span>

          <ArrowUpRight
              className="contact-link-arrow"
              size={17}
              aria-hidden="true"
          />
         </a>

         <a
             href={personalInfo.github}
             target="_blank"
             rel="noopener noreferrer"
             className="contact-link"
         >
              <span className="contact-link-icon">
                <Github size={19} aria-hidden="true" />
              </span>

          <span className="contact-link-text">
                <small>GITHUB</small>
                <strong>ShivahariS</strong>
              </span>

          <ArrowUpRight
              className="contact-link-arrow"
              size={17}
              aria-hidden="true"
          />
         </a>

         <a
             href={personalInfo.linkedin}
             target="_blank"
             rel="noopener noreferrer"
             className="contact-link"
         >
              <span className="contact-link-icon">
                <Linkedin size={19} aria-hidden="true" />
              </span>

          <span className="contact-link-text">
                <small>LINKEDIN</small>
                <strong>Connect with me</strong>
              </span>

          <ArrowUpRight
              className="contact-link-arrow"
              size={17}
              aria-hidden="true"
          />
         </a>
        </div>
       </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="site-footer section-shell">
       <a className="brand footer-brand" href="#home">
        <span className="brand-mark">S.</span>
        <span className="brand-name">Shivahari</span>
       </a>

       <p className="footer-description">
        Designed and built with React.
       </p>

       <a className="back-to-top" href="#home">
        Back to top
        <ArrowUpRight size={15} aria-hidden="true" />
       </a>

       <span className="footer-copyright">
          © {new Date().getFullYear()} Shivahari S
        </span>
      </footer>

     </main>
 );
}
