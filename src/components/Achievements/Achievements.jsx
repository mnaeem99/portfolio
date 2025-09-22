import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaTrophy, 
  FaAward, 
  FaStar, 
  FaRocket, 
  FaUsers, 
  FaCode,
  FaGraduationCap,
  FaHandshake,
  FaChartLine,
  FaMedal
} from 'react-icons/fa';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Best Employee of the Month",
      organization: "Eximia",
      date: "2022",
      icon: <FaTrophy />,
      color: "#FFD700",
      description: "Recognized for outstanding performance and contribution to multiple enterprise projects.",
      impact: "Led development of critical features that improved system performance by 40%",
      category: "Professional Excellence"
    },
    {
      id: 2,
      title: "Top Rated Seller",
      organization: "Fiverr",
      date: "2020-2023",
      icon: <FaStar />,
      color: "#1DBF73",
      description: "Maintained 100% job success score and 4.9/5 average rating across 50+ completed projects.",
      impact: "Delivered high-quality solutions that exceeded client expectations consistently",
      category: "Client Satisfaction"
    },
    {
      id: 3,
      title: "Honors Graduate",
      organization: "University of Management & Technology",
      date: "2021",
      icon: <FaGraduationCap />,
      color: "#3B82F6",
      description: "Graduated with honors in Software Engineering with CGPA of 3.59/4.00.",
      impact: "Demonstrated academic excellence and strong foundation in software engineering principles",
      category: "Academic Excellence"
    },
    {
      id: 4,
      title: "Scalable Solutions Delivery",
      organization: "Multiple Projects",
      date: "2021-Present",
      icon: <FaRocket />,
      color: "#8B5CF6",
      description: "Successfully delivered multiple scalable software solutions serving thousands of users.",
      impact: "Built systems that handle high traffic and maintain performance under load",
      category: "Technical Achievement"
    },
    {
      id: 5,
      title: "Team Leadership",
      organization: "Eximia",
      date: "2022-Present",
      icon: <FaUsers />,
      color: "#F59E0B",
      description: "Led development teams and mentored junior developers in best practices.",
      impact: "Improved team productivity and code quality through effective leadership",
      category: "Leadership"
    },
    {
      id: 6,
      title: "Innovation in Development",
      organization: "FastCode Platform",
      date: "2022",
      icon: <FaCode />,
      color: "#10B981",
      description: "Developed innovative code generation tools that accelerated development processes.",
      impact: "Reduced development time by 60% for standard CRUD operations",
      category: "Innovation"
    }
  ];

  const stats = [
    {
      label: "Years of Experience",
      value: "5+",
      icon: <FaChartLine />
    },
    {
      label: "Projects Delivered",
      value: "50+",
      icon: <FaRocket />
    },
    {
      label: "Client Satisfaction",
      value: "100%",
      icon: <FaHandshake />
    },
    {
      label: "Team Members Led",
      value: "3+",
      icon: <FaUsers />
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

  return (
    <section id="achievements" className="section">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Achievements & Recognition</h2>
          <p>Milestones and accomplishments throughout my career</p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="achievements-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="stat-icon">
                  {stat.icon}
                </div>
                <div className="stat-content">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          className="achievements-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              className="achievement-card"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="achievement-header">
                <div 
                  className="achievement-icon"
                  style={{ backgroundColor: achievement.color }}
                >
                  {achievement.icon}
                </div>
                <div className="achievement-info">
                  <h3>{achievement.title}</h3>
                  <div className="achievement-meta">
                    <span className="organization">{achievement.organization}</span>
                    <span className="date">{achievement.date}</span>
                  </div>
                  <div className="achievement-category">
                    <FaMedal />
                    <span>{achievement.category}</span>
                  </div>
                </div>
              </div>

              <div className="achievement-content">
                <p className="achievement-description">
                  {achievement.description}
                </p>
                <div className="achievement-impact">
                  <h5>Impact:</h5>
                  <p>{achievement.impact}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Section */}
        <motion.div
          className="achievements-summary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="summary-card">
            <h3>Driven by Excellence</h3>
            <p>
              These achievements reflect my commitment to continuous improvement, 
              technical excellence, and delivering value to both clients and organizations. 
              I believe in setting high standards and consistently exceeding expectations 
              through dedication, innovation, and collaborative teamwork.
            </p>
            <div className="summary-highlights">
              <div className="highlight-item">
                <FaAward />
                <span>Consistent high performance across all roles</span>
              </div>
              <div className="highlight-item">
                <FaRocket />
                <span>Proven track record of delivering scalable solutions</span>
              </div>
              <div className="highlight-item">
                <FaUsers />
                <span>Strong leadership and mentoring capabilities</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
