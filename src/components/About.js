import React from "react";
import "../styles/About.css";
import aboutImage from "../images/Madrine.jfif"; // replace with your image

function About() {
  return (
    <div className="about">
      <div className="about-left">
        <h2 className="about-title">About Me</h2>
        <p>
          I’m <span className="cyan">Madrine Denla Nansimbi</span>, a passionate
          Computer Scientist persuing a Diploma in Computer Science at Women's Institute In Technology Uganda and aspiring app developer. I have hands-on
          experience in <span className="cyan">web development</span>, creating
          responsive and user-friendly websites.
        </p>
        <p>
          I also enjoy exploring <span className="cyan">graphic design</span> to
          bring a creative touch to my projects. My goal is to grow into a
          versatile developer, building both web and mobile applications that
          solve real-world problems.
        </p>
        <p>
          I believe technology should be functional, beautiful, and impactful —
          and I’m excited to keep learning and creating.
        </p>
        <a href="/contact" className="about-btn">Contact Me</a>
        
      </div>
      <div className="about-right">
        <img src={aboutImage} alt="Madrine" className="about-image" />
      </div>
    </div>
  );
}

export default About;
