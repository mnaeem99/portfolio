import React, { useState, useContext, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaSun, 
  FaMoon, 
  FaBars, 
  FaTimes,
  FaUser,
  FaCode,
  FaBriefcase,
  FaGraduationCap,
  FaCertificate,
  FaTrophy,
  FaEnvelope
} from 'react-icons/fa';
import { ThemeContext } from '../../App';
import './header.css';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'About', icon: <FaUser /> },
    { href: '#skills', label: 'Skills', icon: <FaCode /> },
    { href: '#experience', label: 'Experience', icon: <FaBriefcase /> },
    { href: '#projects', label: 'Projects', icon: <FaBriefcase /> },
    { href: '#education', label: 'Education', icon: <FaGraduationCap /> },
    { href: '#certifications', label: 'Certifications', icon: <FaCertificate /> },
    { href: '#achievements', label: 'Achievements', icon: <FaTrophy /> },
    { href: '#contact', label: 'Contact', icon: <FaEnvelope /> }
  ];

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      className={`header ${scrolled ? 'scrolled' : ''} ${theme}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="nav">
          <motion.div 
            className="nav__logo"
            whileHover={{ scale: 1.05 }}
          >
            <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('#about'); }}>
              {/* <span className="logo-text">Muhammad Naeem</span> */}
            </a>
          </motion.div>

          <div className={`nav__menu ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav__list">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.href}
                  className="nav__item"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a 
                    href={item.href}
                    className="nav__link"
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                  >
                    <span className="nav__icon">{item.icon}</span>
                    <span className="nav__text">{item.label}</span>
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="nav__actions">
              <motion.button
                className="theme-toggle"
                onClick={toggleTheme}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <FaMoon /> : <FaSun />}
              </motion.button>
            </div>
          </div>

          <motion.button
            className="nav__toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTimes />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;