import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaGraduationCap, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaAward,
  FaTrophy,
  FaCertificate
} from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor's in Software Engineering",
      institution: "University of Management & Technology",
      location: "Lahore, Pakistan",
      duration: "2017 - 2021",
      cgpa: "3.59/4.00",
      status: "Honors Graduate",
      icon: <FaGraduationCap />,
      description: "Comprehensive study of software engineering principles, algorithms, data structures, and modern development practices.",
      highlights: [
        "Specialized in Java, C++, and database management",
        "Completed multiple software engineering projects",
        "Active participation in programming competitions",
        "Mentored junior students in programming courses"
      ],
      relevantCourses: [
        "Data Structures & Algorithms",
        "Software Engineering",
        "Database Management Systems",
        "Object-Oriented Programming",
        "Web Development",
        "Mobile Application Development",
        "Software Testing & Quality Assurance",
        "Project Management"
      ]
    },
    {
      id: 2,
      degree: "Intermediate in Pre-engineering",
      institution: "Muslim College Lar",
      location: "Multan, Pakistan",
      duration: "2015 - 2017",
      cgpa: "837/1100",
      status: "Completed",
      icon: <FaCertificate />,
      description: "Foundation studies in mathematics, physics, and chemistry with focus on engineering preparation.",
      highlights: [
        "Strong foundation in mathematics and physics",
        "Participated in science exhibitions",
        "Maintained consistent academic performance"
      ],
      relevantCourses: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "English",
        "Urdu"
      ]
    },
    {
      id: 3,
      degree: "Matriculation in Science",
      institution: "Govt. High School",
      location: "Ayazabad, Multan, Pakistan",
      duration: "2013 - 2015",
      cgpa: "767/1100",
      status: "Completed",
      icon: <FaAward />,
      description: "Secondary education with focus on science subjects and basic computer literacy.",
      highlights: [
        "Excellent performance in science subjects",
        "Basic computer programming introduction",
        "Active in school activities and competitions"
      ],
      relevantCourses: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "English",
        "Urdu",
        "Computer Science"
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="education" className="section">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Education</h2>
          <p>My academic journey and achievements</p>
        </motion.div>

        <motion.div
          className="education-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="education-item"
              variants={itemVariants}
            >
              <div className="education-card">
                <div className="education-header">
                  <div className="education-icon">
                    {edu.icon}
                  </div>
                  <div className="education-info">
                    <h3>{edu.degree}</h3>
                    <h4>{edu.institution}</h4>
                    <div className="education-meta">
                      <div className="meta-item">
                        <FaCalendarAlt />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="meta-item">
                        <FaMapMarkerAlt />
                        <span>{edu.location}</span>
                      </div>
                      <div className="meta-item">
                        <FaTrophy />
                        <span>{edu.cgpa}</span>
                      </div>
                      <div className="meta-item status">
                        <FaAward />
                        <span>{edu.status}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="education-content">
                  <p className="education-description">{edu.description}</p>
                  
                  <div className="highlights-section">
                    <h5>Key Highlights</h5>
                    <ul className="highlights-list">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="courses-section">
                    <h5>Relevant Courses</h5>
                    <div className="courses-grid">
                      {edu.relevantCourses.map((course, idx) => (
                        <div key={idx} className="course-item">
                          {course}
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

export default Education;
