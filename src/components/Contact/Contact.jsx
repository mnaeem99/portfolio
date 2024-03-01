import Fiverr from "../../assets/fiverr.png"
import Upwork from "../../assets/upwork.png"
import Linkedin from "../../assets/linkedin.png"
import "./Contact.css"

let Contact = () => {
    return (
        <section className="Contact__data" id="contact">
        <div className="contact__container">
          <h1 id="section_title">Let’s work together</h1>
          <p id="section__description">I work remotely or freelance with the power of the internet and am available on Fiverr, Upwork, and LinkedIn.</p>
          <div className="Contact_icons">
          <div>
            <a href="https://www.fiverr.com/mnaeem99"  className="home__social-icon" target ="_blank">
          <img src={Fiverr} alt="Fiverr"/> </a>
          </div>
          <div>
          <a href="https://www.upwork.com/freelancers/~010ca4aa3692cb42ef" className="home__social-icon" target ="_blank">
          <img src={Upwork} alt="Upwork"/></a>
          </div><div>
          <a href="https://www.linkedin.com/in/mnaeem99" className="home__social-icon" target ="_blank">
          <img src={Linkedin} alt="Linkedin"/></a>
          </div>
          </div>
          <p id="social"><span>Based In:</span> Lahore, Punjab, Pakistan.</p>
          <p id="social"><span>Email:</span> m.naeem9073@gmail.com</p>
          <p id="social"><span>Phone:</span> +923086999073</p>
        </div>
      </section>
      
        )
}

export default Contact