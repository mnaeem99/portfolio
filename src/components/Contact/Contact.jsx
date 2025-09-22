import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaLinkedin,
  FaPaperPlane,
  FaCheckCircle,
  FaUser,
  FaComment,
  FaFileAlt
} from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "m.naeem9073@gmail.com",
      link: "mailto:m.naeem9073@gmail.com"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+92 308 6999073",
      link: "tel:+923086999073"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Lahore, Punjab, Pakistan",
      link: null
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/mnaeem99",
      color: "#0077b5"
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/mnaeem99",
      color: "#333"
    },
    {
      name: "Fiverr",
      icon: <FaBriefcase />,
      url: "https://www.fiverr.com/m_naeem9",
      color: "#1dbf73"
    },
    // {
    //   name: "Upwork",
    //   icon: <FaBriefcase />,
    //   url: "https://www.upwork.com/freelancers/~010ca4aa3692cb42ef",
    //   color: "#14a800"
    // }
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
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Get In Touch</h2>
          <p>Let's work together on your next project</p>
        </motion.div>

        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="contact-info"
            variants={itemVariants}
          >
            <div className="contact-intro">
              <h3>Ready to Start Your Project?</h3>
              <p>
                I'm always excited to work on new projects and collaborate with amazing people. 
                Whether you have a specific project in mind or just want to chat about technology, 
                feel free to reach out!
              </p>
            </div>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  className="contact-item"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="contact-icon">
                    {info.icon}
                  </div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link}>{info.value}</a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-grid">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ '--social-color': social.color }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                    <span>{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div> */}
          </motion.div>

          <motion.div 
            className="contact-form-container"
            variants={itemVariants}
          >
            <div className="contact-form-card">
              <h3>Send me a message</h3>
              
              {isSubmitted ? (
                <motion.div 
                  className="success-message"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaCheckCircle />
                  <h4>Message Sent Successfully!</h4>
                  <p>Thank you for reaching out. I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">
                      <FaUser />
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      <FaEnvelope />
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">
                      <FaFileAlt />
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">
                      <FaComment />
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="submit-btn"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="loading-spinner" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
          </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="contact-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="cta-card">
            <h3>Let's Build Something Amazing Together</h3>
            <p>
              I'm passionate about creating software that makes a difference. 
              Whether it's a web application, mobile app, or enterprise solution, 
              I'm here to help bring your ideas to life.
            </p>
            <div className="cta-actions">
              <a href="mailto:m.naeem9073@gmail.com" className="btn btn-primary">
                <FaEnvelope />
                Start a Conversation
              </a>
              <a 
                href="/resume.pdf" 
                download="Muhammad_Naeem_Resume.pdf"
                className="btn btn-outline"
              >
                Download Resume
              </a>
          </div>
          </div>
        </motion.div>
        </div>
      </section>
  );
};
      
export default Contact;