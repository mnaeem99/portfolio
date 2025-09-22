
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaLinkedin, 
  FaEnvelope, 
  FaWhatsapp, 
  FaGithub,
} from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';
import './home.css';

const Social = () => {
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
      name: "Email",
      icon: <FaEnvelope />,
      url: "mailto:m.naeem9073@gmail.com",
      color: "#ea4335"
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      url: "https://wa.me/923086999073",
      color: "#25d366"
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

  return (
    <div className="home__social">
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          className="home__social-icon"
          target="_blank"
          rel="noopener noreferrer"
          style={{ '--social-color': social.color }}
          whileHover={{ 
            scale: 1.2,
            y: -5
          }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5,
            delay: index * 0.1
          }}
          aria-label={`Visit my ${social.name} profile`}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default Social;