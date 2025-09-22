import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./App.css"
import Header from "./components/Header/Header"
import About from './components/About/About';
import Contact from "./components/Contact/Contact"
import Footer from './components/Footer/Footer';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Certifications from './components/Certifications/Certifications';
import Achievements from './components/Achievements/Achievements';

// Theme Context
export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    return savedTheme || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Router>
        <div className={`app ${theme}`}>
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Education />
                <Certifications />
                <Achievements />
                <Contact />
              </>
            } />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
