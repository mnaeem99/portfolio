import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaJava, 
  FaReact, 
  FaNode, 
  FaAws, 
  FaDocker, 
  FaGit,
  FaDatabase,
  FaMobile,
  FaCloud,
  FaCogs,
  FaJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap
} from 'react-icons/fa';
import { 
  SiSpringboot, 
  SiPostgresql, 
  SiMongodb, 
  SiMysql,
  SiKotlin,
  SiTypescript,
  SiGraphql,
  SiRedis,
  SiJenkins,
  SiKubernetes,
  SiNginx,
  SiJest,
  SiCypress
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FaJs className="skill-category-icon" />,
      skills: [
        { name: "Java", level: 95, icon: <FaJava /> },
        { name: "JavaScript", level: 90, icon: <FaJs /> },
        { name: "TypeScript", level: 85, icon: <SiTypescript /> },
        { name: "Kotlin", level: 80, icon: <SiKotlin /> },
        { name: "Python", level: 70, icon: <FaPython /> }
      ]
    },
    {
      title: "Backend Frameworks",
      icon: <FaNode className="skill-category-icon" />,
      skills: [
        { name: "Spring Boot", level: 95, icon: <SiSpringboot /> },
        { name: "Node.js", level: 90, icon: <FaNode /> },
        { name: "Express.js", level: 85, icon: <FaNode /> },
        { name: "Hibernate", level: 80, icon: <FaDatabase /> },
        { name: "GraphQL", level: 75, icon: <SiGraphql /> }
      ]
    },
    {
      title: "Frontend Frameworks",
      icon: <FaReact className="skill-category-icon" />,
      skills: [
        { name: "React.js", level: 90, icon: <FaReact /> },
        { name: "Redux", level: 85, icon: <FaReact /> },
        { name: "Material-UI", level: 80, icon: <FaReact /> },
        { name: "HTML5", level: 95, icon: <FaHtml5 /> },
        { name: "CSS3", level: 90, icon: <FaCss3Alt /> },
        { name: "Bootstrap", level: 85, icon: <FaBootstrap /> }
      ]
    },
    {
      title: "Mobile Development",
      icon: <FaMobile className="skill-category-icon" />,
      skills: [
        { name: "Ionic", level: 85, icon: <FaMobile /> },
        { name: "Angular", level: 80, icon: <FaReact /> },
        { name: "Flutter", level: 70, icon: <FaMobile /> },
        { name: "React Native", level: 75, icon: <FaReact /> }
      ]
    },
    {
      title: "Databases",
      icon: <FaDatabase className="skill-category-icon" />,
      skills: [
        { name: "PostgreSQL", level: 90, icon: <SiPostgresql /> },
        { name: "MySQL", level: 85, icon: <SiMysql /> },
        { name: "MongoDB", level: 80, icon: <SiMongodb /> },
        { name: "Redis", level: 75, icon: <SiRedis /> }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <FaCloud className="skill-category-icon" />,
      skills: [
        { name: "AWS", level: 85, icon: <FaAws /> },
        { name: "Docker", level: 80, icon: <FaDocker /> },
        { name: "Kubernetes", level: 70, icon: <SiKubernetes /> },
        { name: "Jenkins", level: 75, icon: <SiJenkins /> },
        { name: "Nginx", level: 70, icon: <SiNginx /> }
      ]
    },
    {
      title: "Tools & Testing",
      icon: <FaCogs className="skill-category-icon" />,
      skills: [
        { name: "Git", level: 90, icon: <FaGit /> },
        { name: "Maven", level: 85, icon: <FaCogs /> },
        { name: "Gradle", level: 80, icon: <FaCogs /> },
        { name: "Jest", level: 75, icon: <SiJest /> },
        { name: "Cypress", level: 70, icon: <SiCypress /> }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const categoryVariants = {
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
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Skills & Expertise</h2>
          <p>Technologies and tools I work with</p>
        </motion.div>

        <motion.div
          className="skills-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              variants={categoryVariants}
            >
              <div className="skill-category-header">
                <div className="skill-category-icon-wrapper">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: skillIndex * 0.1 
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="skill-icon">
                      {skill.icon}
                    </div>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <div className="skill-level">
                        <div className="skill-bar-bg">
                          <motion.div
                            className="skill-bar"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 1.5, 
                              delay: skillIndex * 0.1,
                              ease: "easeOut"
                            }}
                            style={{ '--skill-width': `${skill.level}%` }}
                          />
                        </div>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
