import React from 'react'
import "./App.css"
import Header from "./components/Header/Header"
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from "./components/Contact/Contact"
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';

  function App() {
    return (
     <>
     <Header/>
     <Home/>
     <About/>
     <Services/>
     <Projects/>
     <Contact/>
     <Footer/>
     </>
 
    );
  }


export default App;
