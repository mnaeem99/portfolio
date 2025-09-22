import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaRocket, 
  FaUsers, 
  FaLightbulb,
  FaHeart,
  FaJava,
  FaAws,
  FaDownload,
  FaEnvelope
} from 'react-icons/fa';
import { SiSpringboot, SiReact, SiNodedotjs } from 'react-icons/si';
import Social from '../Home/Social';
import './About.css';

const About = () => {
  const values = [
    {
      icon: <FaCode />,
      title: "Clean Code",
      description: "I follow SOLID principles and write maintainable, readable code that stands the test of time."
    },
    {
      icon: <FaRocket />,
      title: "Performance",
      description: "I build scalable applications that handle high traffic and maintain optimal performance."
    },
    {
      icon: <FaUsers />,
      title: "Collaboration",
      description: "I believe in teamwork and enjoy mentoring junior developers and sharing knowledge."
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "I stay updated with latest technologies and always look for better solutions."
    }
  ];

  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "50+", label: "Projects Delivered" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "3+", label: "Team Members Led" }
  ];

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="about" className="hero-section">
      <div className="hero-background">
        <div className="hero-shapes">
          <motion.div 
            className="shape shape-1"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div 
            className="shape shape-2"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div 
            className="shape shape-3"
            variants={floatingVariants}
            animate="animate"
          />
        </div>
      </div>

      <div className="hero-content">
        <motion.div 
          className="hero-text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-greeting" variants={itemVariants}>
            <span>Hello, I'm</span>
            <motion.span 
              className="wave"
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              👋
            </motion.span>
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            <span className="hero-name">Muhammad Naeem</span>
            <span className="hero-role">Full-Stack Developer</span>
          </motion.h1>

          <motion.p className="hero-description" variants={itemVariants}>
            Expert in Java, Spring Boot, Node.js, React.js & AWS. 
            I build scalable applications with clean code and modern technologies.
          </motion.p>

          <motion.div className="hero-stats" variants={itemVariants}>
            <div className="stat-item">
              <FaCode />
              <span>5+ Years Experience</span>
            </div>
            <div className="stat-item">
              <FaRocket />
              <span>50+ Projects Delivered</span>
            </div>
            <div className="stat-item">
              <FaUsers />
              <span>100% Client Satisfaction</span>
            </div>
          </motion.div>

          <motion.div className="hero-actions" variants={itemVariants}>
            <a 
              href="#contact" 
              className="btn btn-primary"
            >
              <FaEnvelope />
              Get In Touch
            </a>
            <a 
              href="/resume.pdf" 
              download="Muhammad_Naeem_Resume.pdf"
              className="btn btn-outline"
            >
              <FaDownload />
              Download Resume
            </a>
          </motion.div>

          <motion.div className="hero-social" variants={itemVariants}>
            <Social />
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-image-container">
            <div className="hero-image">
              <img 
                src="/profile.png" 
                alt="Muhammad Naeem" 
                className="profile-image"
              />
              <div className="image-overlay">
                <div className="overlay-content">
                  <FaHeart className="heart-icon" />
                  <span>Passionate Developer</span>
                </div>
              </div>
            </div>
            
            <div className="floating-tech-icons">
              <motion.div 
                className="tech-icon java"
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FaJava />
              </motion.div>
              <motion.div 
                className="tech-icon spring"
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <SiSpringboot />
              </motion.div>
              <motion.div 
                className="tech-icon react"
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <SiReact />
              </motion.div>
              <motion.div 
                className="tech-icon node"
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
              >
                <SiNodedotjs />
              </motion.div>
              <motion.div 
                className="tech-icon aws"
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              >
                <FaAws />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* About Details Section */}
      <div className="about-details">
        <div className="container">
          <motion.div
            className="about-content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="about-header" variants={itemVariants}>
              <h2>About Me</h2>
              <p className="about-subtitle">
                Passionate Full-Stack Developer with 5+ years of experience building scalable applications
              </p>
            </motion.div>

            <div className="about-main">
              <motion.div className="about-text" variants={itemVariants}>
                <div className="about-description">
                  <p>
                    I am a full-stack developer with over five years of commercial experience working in a team environment. 
                    My expertise includes developing applications with Java, Spring Boot, Node.js, React.js, and AWS.
                  </p>
                  <p>
                    I adhere to clean code practices, SOLID principles, and modern Java features (Java 8/11/17). 
                    My work spans from backend architecture to responsive frontend design, leveraging industry-standard tools and frameworks.
                  </p>
                  <p>
                    I'm passionate about creating efficient, scalable solutions that solve real-world problems and 
                    deliver exceptional user experiences.
                  </p>
                </div>

                <div className="about-values">
                  <h3>Core Values</h3>
                  <div className="values-grid">
                    {values.map((value, index) => (
                      <motion.div 
                        key={index} 
                        className="value-item"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="value-icon">
                          {value.icon}
                        </div>
                        <h4>{value.title}</h4>
                        <p>{value.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div className="about-stats" variants={itemVariants}>
              <h3>Key Statistics</h3>
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className="stat-item"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;