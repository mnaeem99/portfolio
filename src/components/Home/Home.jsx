import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaDownload,
  FaCode,
  FaRocket,
  FaAward,
  FaJava,
  FaAws
} from 'react-icons/fa';
import { SiSpringboot, SiReact, SiNodedotjs } from 'react-icons/si';
import Social from './Social';
import './home.css';

const Home = () => {

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

  return (
    <section id="home" className="hero-section">
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
            transition={{ delay: 1 }}
          />
          <motion.div 
            className="shape shape-3"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 2 }}
          />
        </div>
      </div>

      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-text" variants={itemVariants}>
            <motion.div 
              className="hero-greeting"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="wave">👋</span>
              <span>Hello, I'm</span>
            </motion.div>

            <motion.h1 
              className="hero-name"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="gradient-text">Muhammad Naeem</span>
            </motion.h1>

            <motion.div 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="title-main">Full-Stack Developer</span>
              <span className="title-sub">Expert in Java, Spring Boot, Node.js, React.js & AWS</span>
            </motion.div>

            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              With over 5 years of experience building scalable applications and leading development teams. 
              I specialize in creating robust backend systems, modern frontend interfaces, and cloud-native solutions.
            </motion.p>

            <motion.div 
              className="hero-stats"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="stat-item">
                <FaCode />
                <span>5+ Years Experience</span>
              </div>
              <div className="stat-item">
                <FaRocket />
                <span>50+ Projects Delivered</span>
              </div>
              <div className="stat-item">
                <FaAward />
                <span>100% Client Satisfaction</span>
              </div>
            </motion.div>

            <motion.div 
              className="hero-actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <a href="#contact" className="btn btn-primary">
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

            <motion.div 
              className="hero-social"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <Social />
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-visual"
            variants={itemVariants}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="hero-image-container">
              <div className="hero-image">
                <img 
                  src="/src/assets/profile.png" 
                  alt="Muhammad Naeem" 
                  className="profile-image"
                />
                <div className="image-overlay"></div>
              </div>
              
              <div className="floating-tech">
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
                    y: [10, -10, 10],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 3.5,
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
                    y: [-8, 12, -8],
                    rotate: [0, 3, 0]
                  }}
                  transition={{ 
                    duration: 2.8,
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
                    y: [12, -8, 12],
                    rotate: [0, -3, 0]
                  }}
                  transition={{ 
                    duration: 3.2,
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
                    y: [-12, 8, -12],
                    rotate: [0, 4, 0]
                  }}
                  transition={{ 
                    duration: 3.8,
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
        </motion.div>
      </div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className="scroll-arrow">
          <div className="scroll-line"></div>
          <div className="scroll-text">Scroll Down</div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;