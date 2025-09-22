import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaBuilding, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaCode, 
  FaRocket,
  FaAward,
  FaUsers,
  FaCogs,
  FaDatabase,
  FaCloud,
  FaMobile,
  FaGraduationCap,
  FaJava,
  FaJs,
  FaAws
} from 'react-icons/fa';
import { 
  SiSpringboot, 
  SiReact, 
  SiNodedotjs, 
  SiDocker,
  SiPostgresql,
    SiMongodb,
    SiGraphql,
    SiKotlin,
    SiTypescript
} from 'react-icons/si';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Eximia",
      position: "Senior Software Engineer",
      location: "Lahore, Pakistan",
      duration: "September 2021 - Present",
      type: "Full-time",
      icon: <FaBuilding />,
      description: "Leading development of enterprise-grade applications and platforms with focus on scalability, performance, and clean architecture.",
      highlights: [
        "Led development of FastCode Platform - enterprise developer tools suite",
        "Built BookingForm SaaS platform with payment integration and admin dashboards",
        "Developed Yumscore restaurant social app with GraphQL and AWS integration",
        "Created multiple internal systems including Leave Management and Appointment System",
        "Implemented CI/CD pipelines and worked in Agile/Scrum environment"
      ],
      technologies: [
        { name: "Java", icon: <FaJava />, color: "#f89820" },
        { name: "Spring Boot", icon: <SiSpringboot />, color: "#6db33f" },
        { name: "React", icon: <SiReact />, color: "#61dafb" },
        { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
        { name: "AWS", icon: <FaAws />, color: "#ff9900" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
        { name: "Docker", icon: <SiDocker />, color: "#2496ed" },
        { name: "GraphQL", icon: <SiGraphql />, color: "#e10098" },
        { name: "Kotlin", icon: <SiKotlin />, color: "#7f52ff" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178c6" }
      ],
      achievements: [
        "Best Employee of the Month",
        "Led team of 3 developers",
        "Delivered 15+ production applications",
        "Improved development velocity by 40%"
      ]
    },
    {
      id: 2,
      company: "Fiverr",
      position: "Freelance Full-Stack Developer",
      location: "Remote",
      duration: "January 2020 - September 2023",
      type: "Freelance",
      icon: <FaCode />,
      description: "Delivered high-quality software solutions for clients worldwide, specializing in mobile apps, web applications, and backend systems.",
      highlights: [
        "Developed iFamily cross-platform mobile app with Ionic + Spring Boot",
        "Built real-time tracking system with Java and Angular",
        "Created employee attendance system with Kotlin and Spring Boot",
        "Integrated third-party APIs including Zoom, Payment, and Shopify",
        "Maintained 100% client satisfaction rating"
      ],
      technologies: [
        { name: "Java", icon: <FaJava />, color: "#f89820" },
        { name: "Spring Boot", icon: <SiSpringboot />, color: "#6db33f" },
        { name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
        { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47a248" },
        { name: "AWS", icon: <FaAws />, color: "#ff9900" },
        { name: "Docker", icon: <SiDocker />, color: "#2496ed" }
      ],
      achievements: [
        "Top Rated Seller",
        "100% Job Success Score",
        "50+ Completed Projects",
        "4.9/5 Average Rating"
      ]
    },
    {
      id: 3,
      company: "University of Management & Technology",
      position: "Teaching Assistant",
      location: "Lahore, Pakistan",
      duration: "April 2020 - July 2021",
      type: "Part-time",
      icon: <FaGraduationCap />,
      description: "Assisted students in programming courses and guided them through software engineering projects.",
      highlights: [
        "Taught Java and C++ programming fundamentals",
        "Supported database management projects using MySQL",
        "Guided students through software engineering term projects",
        "Conducted lab sessions and code reviews",
        "Mentored 50+ students across multiple semesters"
      ],
      technologies: [
        { name: "Java", icon: <FaJava />, color: "#f89820" },
        { name: "C++", icon: <FaCode />, color: "#00599c" },
        { name: "MySQL", icon: <SiPostgresql />, color: "#336791" }
      ],
      achievements: [
        "Improved student pass rate by 25%",
        "Received excellent feedback from students",
        "Developed comprehensive learning materials"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Work Experience</h2>
          <p>My professional journey and key achievements</p>
        </motion.div>

        <motion.div
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="experience-item"
              variants={itemVariants}
            >
              <div className="experience-card">
                <div className="experience-header">
                  <div className="company-icon">
                    {exp.icon}
                  </div>
                  <div className="experience-info">
                    <div className="position-company">
                      <h3>{exp.position}</h3>
                      <h4>{exp.company}</h4>
                    </div>
                    <div className="experience-meta">
                      <div className="meta-item">
                        <FaCalendarAlt />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="meta-item">
                        <FaMapMarkerAlt />
                        <span>{exp.location}</span>
                      </div>
                      <div className="meta-item">
                        <FaRocket />
                        <span>{exp.type}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="experience-content">
                  <p className="experience-description">{exp.description}</p>
                  
                  <div className="highlights-section">
                    <h5>
                      <FaAward />
                      Key Highlights
                    </h5>
                    <ul className="highlights-list">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="technologies-section">
                    <h5>
                      <FaCogs />
                      Technologies Used
                    </h5>
                    <div className="technologies-grid">
                      {exp.technologies.map((tech, idx) => (
                        <div key={idx} className="tech-item">
                          <div 
                            className="tech-icon"
                            style={{ color: tech.color }}
                          >
                            {tech.icon}
                          </div>
                          <span className="tech-name">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="achievements-section">
                    <h5>
                      <FaUsers />
                      Key Achievements
                    </h5>
                    <div className="achievements-grid">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="achievement-item">
                          <FaAward className="achievement-icon" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
