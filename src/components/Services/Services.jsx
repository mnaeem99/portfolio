import "./services.css"
import Java from "../../assets/Java.png"
import kotlin from "../../assets/kotlin.png"
import spring from "../../assets/spring.svg"
import hibernate from "../../assets/hibernate.svg"
import React from "../../assets/react.png"
import Javascript from "../../assets/JS.png"
import NodeJS from "../../assets/node.png"
import NextJS from "../../assets/nextjs.svg"
import MaterialUI from "../../assets/MaterialUI.png"
import Apollo from "../../assets/apollo.svg"
import MongoDB from "../../assets/MongoDB.png"
import TypeScript from "../../assets/Typescript.png"
import Rest from "../../assets/rest.png"
import GraphQL from "../../assets/GraphQL.png"
import MySQL from "../../assets/mysql.png"
import PostgreSql from "../../assets/Postgresql.svg"
import Docker from "../../assets/docker.png"
import AWS from "../../assets/aws.svg"
import CICD from "../../assets/cicd.png"

let Services = () => {

    return (
        <>
        <section id="services">
            <h2 className="section__title animate">Services</h2>
            <span className="section__subtitle animate">What i offer</span>
            <div className="services__container">

                <div className="services__content">
                    <h3 className="services__title">Frontend Development</h3>
                    <ul className="bullets">
                        <li>ReactJS Framework</li>
                        <li>NextJS Framewok</li>
                        <li>Responsive Web Design</li>
                        <li>Single Page Applications</li>
                        <li>Server Side Rendering</li>
                        <li>Redux State Management</li>
                        <li>API Integration</li>
                    </ul>
                </div>

                <div className="services__content">
                   <h3 className="services__title">Backend Development</h3>
                    <ul className="bullets">
                        <li>Java/Kotlin Development</li>
                        <li>Spring Boot, Hibernate, NodeJS</li>
                        <li>Maven/Gradle Application</li>
                        <li>Server Side Development</li>
                        <li>Rest API, GraphQL</li>
                        <li>MySQL, PostgreSQL, MongoDB</li>
                    </ul>
                </div>

                <div className="services__content">
                    <h3 className="services__title">Deployment</h3>
                    <ul className="bullets">
                        <li>AWS Services</li>
                        <li>Linux Ubuntu VM</li>
                        <li>Docker</li>
                        <li>CI/CD Pipeline</li>
                        <li>Terraform Infrastructure</li>
                    </ul>
                </div>
            </div>
        </section>
              <section className="margin">
              <h1 className="title">Technologies</h1>
                <span className="section__subtitle">I work with</span>
                <div className="skills">
                  <div className="border">
                    <img className="skill_img" src={Java} alt="JAVA"/>
                    <h3 className="skills__name">Java</h3>
                    </div>
        
                  <div className="border">
                    <img className="skill_img" src={kotlin} alt="KOTLIN"/>
                    <h3 className="skills__name">Kotlin</h3>
                    </div>
                  <div className="border">
                    <img className="skill_img" src={spring} alt="SPRING"/>
                    <h3 className="skills__name">Spring Boot</h3>
                    </div>
                  <div className="border">
                    <img className="skill_img" src={hibernate} alt="Hibernate"/>
                    <h3 className="skills__name">Hibernate</h3>
                    </div>
        
                  <div className="border">
                    <img className="skill_img" src={Rest} alt="REST API"/>
                    <h3 className="skills__name">REST API</h3>
                    </div>
        
                  <div className="border">
                    <img className="skill_img" src={GraphQL} alt="GRAPHQL"/>
                    <h3 className="skills__name">GRAPHQL</h3>
                    </div>
                  <div className="border">
                    <img className="skill_img" src={MySQL} alt="MySQL"/>
                    <h3 className="skills__name">MySQL</h3>
                    </div>
                  <div className="border">
                    <img className="skill_img" src={PostgreSql} alt="PostgreSql"/>
                    <h3 className="skills__name">PostgreSQL</h3>
                    </div>
        
                  <div className="border">
                    <img className="skill_img" src={Javascript} alt="JavaScript"/>
                    <h3 className="skills__name">Javascript</h3>
                    </div>
                            
                    <div className="border">
                    <img className="skill_img" src={TypeScript} alt="TypeScript"/>
                    <h3 className="skills__name">TypeScript</h3>
                    </div>

                  <div className="border">
                    <img className="skill_img" src={NodeJS} alt="Node"/>
                    <h3 className="skills__name">NodeJs</h3>
                    </div>

                                                 
                    <div className="border">
                    <img className="skill_img" src={MongoDB} alt="MongoDB"/>
                    <h3 className="skills__name">MongoDB</h3>
                    </div>

                    <div className="border">
                    <img className="skill_img" src={React} alt="React"/>
                    <h3 className="skills__name">ReactJS</h3>
                    </div>

                    
                  <div className="border">
                    <img className="skill_img" src={NextJS} alt="Nest"/>
                    <h3 className="skills__name">NextJS</h3>
                    </div>
        
        
                    <div className="border">
                    <img className="skill_img" src={MaterialUI} alt="MaterialUI"/>
                    <h3 className="skills__name">Material UI</h3>
                    </div>
        
                    <div className="border">
                    <img className="skill_img" src={Apollo} alt="Apollo" />
                    <h3 className="skills__name">Apollo GraphQL</h3>
                    </div>
        
        
                    
                    <div className="border">
                    <img className="skill_img" src={AWS} alt="AWS"/>
                    <h3 className="skills__name">AWS</h3>
                    </div>
                    
                    <div className="border">
                      <img className="skill_img" src={Docker} alt="Docker"/>
                      <h3 className="skills__name">Docker</h3>
                      </div>
                    
                    <div className="border">
                      <img className="skill_img" src={CICD} alt="CICD"/>
                      <h3 className="skills__name">CICD Pipeline</h3>
                      </div>
                             
        
                </div>
              </section>
        </>

    )
}

export default Services