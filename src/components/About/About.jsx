import "./About.css"
import Img from "../../assets/profile.jpg"
import React from "../../assets/react.png"

let About = () => {
  return (
    <>
      <section id="about">

        <div className="About_Flex">
          <div className="about_img" ><img src={Img} alt="hero left" className="about_img" /></div>
          <div className="about__container">
            <div >
              <h1 className="title animation2">About Me</h1>
              <p className=" about__description animation2">
              Hi, I am a Full stack Web Developer with more than three years of experience. I love to work in a competitive environment that is both challenging and inspiring. I have a clear, logical mind with a practical approach to problem solving and a drive to see things through to completion. 
              <br/>
              I always follow Clean code, OOP concepts, Design patterns, JAVA 8 and 11 features like Lambda Expressions, Stream API, forEach(), etc, String methods, Local-Variable Syntax for Lambda Parameters, and SOLID principles.
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default About