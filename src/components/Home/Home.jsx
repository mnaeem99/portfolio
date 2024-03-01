import React from "react"
import "./home.css"
import Social from "./Social"
import Info from "./Info"

let Home = () => {
return( 
    <div className="home__content">
      <Info/>
      <Social/>   
    </div>
)
}

export default Home