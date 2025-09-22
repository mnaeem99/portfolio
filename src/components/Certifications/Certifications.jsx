import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCertificate, 
  FaCalendarAlt, 
  FaExternalLinkAlt,
  FaAward,
  FaCloud,
  FaCode,
  FaCogs,
  FaJava,
  FaGraduationCap
} from 'react-icons/fa';
import { FaAws } from 'react-icons/fa';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "DevOps on AWS: Code, Build, and Test",
      issuer: "Coursera",
      date: "August 2022",
      credentialId: "Coursera-DevOps-AWS",
      icon: <FaAws />,
      color: "#FF9900",
      description: "Comprehensive course covering AWS DevOps practices, CI/CD pipelines, and infrastructure as code.",
      skills: [
        "AWS CodePipeline",
        "AWS CodeBuild",
        "AWS CodeDeploy",
        "Infrastructure as Code",
        "CI/CD Best Practices",
        "AWS CloudFormation"
      ],
      verificationUrl: "https://coursera.org/verify/certificate",
      category: "Cloud & DevOps"
    },
    {
      id: 2,
      title: "Building Modern Java Applications on AWS",
      issuer: "Coursera",
      date: "September 2022",
      credentialId: "Coursera-Java-AWS",
      icon: <FaJava />,
      color: "#F89820",
      description: "Advanced course on developing and deploying Java applications using AWS services and best practices.",
      skills: [
        "AWS Lambda",
        "Amazon RDS",
        "Amazon S3",
        "AWS Elastic Beanstalk",
        "Java on AWS",
        "Microservices Architecture"
      ],
      verificationUrl: "https://coursera.org/verify/certificate",
      category: "Programming & Cloud"
    },
    {
      id: 3,
      title: "AWS Cloud Technical Essentials",
      issuer: "Coursera",
      date: "August 2022",
      credentialId: "Coursera-AWS-Essentials",
      icon: <FaCloud />,
      color: "#FF9900",
      description: "Fundamental AWS cloud concepts, services, and architecture patterns for cloud computing.",
      skills: [
        "AWS Core Services",
        "Cloud Computing Fundamentals",
        "AWS Security",
        "Networking in AWS",
        "Storage Solutions",
        "Compute Services"
      ],
      verificationUrl: "https://coursera.org/verify/certificate",
      category: "Cloud Computing"
    },
    {
      id: 4,
      title: "Java Programming: Principles of Software Design",
      issuer: "Coursera",
      date: "October 2022",
      credentialId: "Coursera-Java-Design",
      icon: <FaCode />,
      color: "#F89820",
      description: "Advanced Java programming concepts including design patterns, SOLID principles, and software architecture.",
      skills: [
        "Object-Oriented Design",
        "Design Patterns",
        "SOLID Principles",
        "Java Collections",
        "Exception Handling",
        "Software Architecture"
      ],
      verificationUrl: "https://coursera.org/verify/certificate",
      category: "Programming"
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

  const categories = [...new Set(certifications.map(cert => cert.category))];

  return (
    <section id="certifications" className="section">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Certifications</h2>
          <p>Professional certifications and continuous learning</p>
        </motion.div>

        <motion.div
          className="certifications-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              className="certification-card"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="certification-header">
                <div 
                  className="certification-icon"
                  style={{ backgroundColor: cert.color }}
                >
                  {cert.icon}
                </div>
                <div className="certification-info">
                  <h3>{cert.title}</h3>
                  <div className="certification-meta">
                    <div className="meta-item">
                      <FaGraduationCap />
                      <span>{cert.issuer}</span>
                    </div>
                    <div className="meta-item">
                      <FaCalendarAlt />
                      <span>{cert.date}</span>
                    </div>
                    <div className="meta-item category">
                      <FaAward />
                      <span>{cert.category}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="certification-content">
                <p className="certification-description">{cert.description}</p>
                
                <div className="skills-section">
                  <h5>Key Skills & Technologies</h5>
                  <div className="skills-grid">
                    {cert.skills.map((skill, idx) => (
                      <div key={idx} className="skill-tag">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="certification-footer">
                  <div className="credential-info">
                    <span className="credential-label">Credential ID:</span>
                    <span className="credential-id">{cert.credentialId}</span>
                  </div>
                  <a 
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="verify-link"
                  >
                    <FaExternalLinkAlt />
                    Verify Certificate
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="certifications-summary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="summary-card">
            <h3>Continuous Learning Journey</h3>
            <p>
              I believe in continuous learning and staying updated with the latest technologies. 
              These certifications represent my commitment to professional development and expertise 
              in modern software development practices.
            </p>
            <div className="stats-grid">
              <div className="stat-item">
                <FaCertificate />
                <div>
                  <span className="stat-number">{certifications.length}</span>
                  <span className="stat-label">Certifications</span>
                </div>
              </div>
              <div className="stat-item">
                <FaCogs />
                <div>
                  <span className="stat-number">{categories.length}</span>
                  <span className="stat-label">Categories</span>
                </div>
              </div>
              <div className="stat-item">
                <FaAward />
                <div>
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Completion Rate</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
