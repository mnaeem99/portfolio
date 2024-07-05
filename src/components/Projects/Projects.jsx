import "./project.css";
import Project3 from "../../assets/project3.png"
import Project2 from "../../assets/project2.jpg"
import Project1 from  "../../assets/project1.png"
import Project4 from "../../assets/project4.png"
import Project5 from "../../assets/project5.png"
import Project6 from "../../assets/project6.png"


let Projects = () => {
  return (
    <section className="Project section" id="portfolio">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">I have worked on</span>
      <div className="projects-container">
        <div className="project">
          <div className="project__img">
            <img className="image3" src={Project5} alt="Project Preview" />
          </div>
          <div className="project__description">
            <h3>Nsoroma Tracking System</h3>
            <p style={{ marginTop: "2%", marginBottom: "2%" }}>
              Tracking System is a Microservices based Web application.
            </p>
            <span>Java</span> <span>Spring Boot</span> <span>MySQL</span>
            <span>MongoDB</span> <span>Docker</span>
            <br/>
            <a
              href="http://20.163.15.59:8080/"
              className="button"
              target="_blank"
              rel="noreferrer"
            >
              View Project <i class="bx bxs-right-arrow-alt"></i>
            </a>
          </div>
        </div>

        <div className="project">
          <div className="project__description">
            <h3>Attendance Management System</h3>
            <p style={{ marginTop: "2%", marginBottom: "2%" }}>
              Employee Attendance Management System for Sana Cash & Carry
              Employees.
            </p>
            <span>Kotlin</span> <span>Spring Boot</span> <span>PostgreSL</span>
            <span>GraphQL</span> <span>Docker</span> <br />
            <a
              href="https://http://62.72.19.115:3000/"
              className="button"
              target="_blank"
              rel="noreferrer"
            >
              View Project <i class="bx bxs-right-arrow-alt"></i>
            </a>
          </div>
          <div className="project__img">
            <img className="image2" src={Project2} alt="Project Preview" />
          </div>
        </div>

        <div className="project">
          <div className="project__img">
            <img className="image3" src={Project3} alt="Project Preview" />
          </div>
          <div className="project__description">
            <h3>Leave Management System</h3>
            <p style={{ marginTop: "2%", marginBottom: "2%" }}>
              Employee Leave Management System for Eximia Employees.
            </p>
            <span>Javascript</span> <span>NodeJS</span> <span>MongoDB</span>
            <span>ReactJS</span> <span>AWS</span> <br />
            <a
              href="http://44.223.43.55/"
              className="button"
              target="_blank"
              rel="noreferrer"
            >
              View Project <i class="bx bxs-right-arrow-alt"></i>
            </a>
          </div>
        </div>

        <div className="project">
          <div className="project__description">
            <h3>E-commerce GraphQL Server</h3>
            <p style={{ marginTop: "2%", marginBottom: "2%" }}>
              Server Side GraphQL application for e-commerce.
            </p>
            <span>Kotlin</span> <span>Spring Boot</span> <span>PostgreSL</span>
            <span>GraphQL</span> <span>AWS</span> <br />
            <a
              href="https://github.com/mnaeem99/shopping-server"
              className="button"
              target="_blank"
              rel="noreferrer"
            >
              View Project <i class="bx bxs-right-arrow-alt"></i>
            </a>
          </div>
          <div className="project__img">
            <img className="image2" src={Project4} alt="Project Preview" />
          </div>
        </div>

        <div className="project">
          <div className="project__img">
            <img className="image" src={Project1} alt="Project Preview" />
          </div>
          <div className="project__description">
            <h3>Restaurant Place</h3>
            <p style={{ marginTop: "2%", marginBottom: "2%" }}>
              Social Media Restaurant Recommendation Application  .
            </p>
            <span>Kotlin</span> <span>Spring Boot</span> <span>PostgreSQL</span>
            <span>GraphQL</span> <span>Docker</span> <br /> <br />
            <span>AWS</span> <span>ReactJS</span> <span>NextJS</span>
            <span>Redux</span> <span>Material UI</span> <br />
            <a
              href="https://grumpeat.com"
              className="button"
              target="_blank"
              rel="noreferrer"
            >
              View Project <i class="bx bxs-right-arrow-alt"></i>
            </a>
          </div>
        </div>

        <div className="project">
          <div className="project__img">
            <img className="image" src={Project6} alt="Project Preview" />
          </div>
          <div className="project__description">
            <h3>ComeHere</h3>
            <p style={{ marginTop: "2%", marginBottom: "2%" }}>
              Comprehensive store management system.
            </p>
            <span>Java</span> <span>Spring Boot</span> <span>PostgreSQL</span>
            <span>Angular</span> <span>Docker</span> <br /> <br />
            <a
              href="https://comehere.com"
              className="button"
              target="_blank"
              rel="noreferrer"
            >
              View Project <i class="bx bxs-right-arrow-alt"></i>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
