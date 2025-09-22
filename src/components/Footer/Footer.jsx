
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaLinkedin,
  FaHeart,
  FaArrowUp
} from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/mnaeem99',
      color: '#0077b5'
    },
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/mnaeem99',
      color: '#333'
    },
    {
      name: 'Fiverr',
      icon: <FaBriefcase />,
      url: 'https://www.fiverr.com/m_naeem9',
      color: '#1dbf73'
    },
    // {
    //   name: 'Upwork',
    //   icon: <FaBriefcase />,
    //   url: 'https://www.upwork.com/freelancers/~010ca4aa3692cb42ef',
    //   color: '#14a800'
    // }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-main">
            <div className="footer-info">
              <motion.div
                className="footer-brand"
                whileHover={{ scale: 1.05 }}
              >
                <h3>Muhammad Naeem</h3>
                <p>Full-Stack Developer</p>
                <span className="footer-tagline">
                  Building scalable solutions with passion and precision
                </span>
              </motion.div>

              <div className="footer-contact">
                <div className="contact-item">
                  <FaEnvelope />
                  <a href="mailto:m.naeem9073@gmail.com">m.naeem9073@gmail.com</a>
                </div>
                <div className="contact-item">
                  <FaPhone />
                  <a href="tel:+923086999073">+92 308 6999073</a>
                </div>
                <div className="contact-item">
                  <FaMapMarkerAlt />
                  <span>Lahore, Punjab, Pakistan</span>
                </div>
              </div>
            </div>

            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a href={link.href}>{link.name}</a>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="footer-social">
              <h4>Connect With Me</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ '--social-color': social.color }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    aria-label={`Visit my ${social.name} profile`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>
                &copy; {currentYear} Muhammad Naeem. All rights reserved.
              </p>
              <p className="footer-heart">
                Made with <FaHeart className="heart-icon" /> in Pakistan
              </p>
            </div>

            <motion.button
              className="scroll-to-top"
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              aria-label="Scroll to top"
            >
              <FaArrowUp />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
