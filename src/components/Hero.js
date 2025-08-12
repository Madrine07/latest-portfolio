import React from "react";
import { ReactTyped } from "react-typed";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import "../styles/hero.css";
import profileLarge from "../images/bigpic.jpeg"; // replace with your large image
import { FaGithub } from "react-icons/fa6";

function Home() {
  return (
    <div className="home">
      <div className="home-left">
        <img src={profileLarge} alt="Madrine" className="home-image" />
      </div>
      <div className="home-right">
        <h1>Hi, my name is <span className="cyan">Madrine Denla Nansimbi</span></h1>
        <h2 style={{textAlign: 'centre'}}>And I am </h2>
            <ReactTyped
              strings={["A Computer Science Student", "A Web Developer", "An Aspiring App Developer"]}
              typeSpeed={80}
              backSpeed={50}
              loop
              className="typed-text"
    /> 
    
        <div className="social-icons">
          <a href="https://x.com/dunamis25172?t=Qwa9oWlWkikfGR1jEBPTDw&s=09" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.linkedin.com/in/madrine-denla-nansimbi-7192132b9/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/Madrine07" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>
      </div>
    </div>
  );
}

export default Home;
