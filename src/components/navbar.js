import React, { useState } from "react";
import "../styles/Navbar.css";
import profileSmall from "../images/smallpic.jpeg";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  return (
    <nav className="navbar">
      {/* Left side with profile image & name */}
      <div className="navbar-left" onClick={() => handleScroll("home")}>
        <img src={profileSmall} alt="Madrine" className="navbar-image" />
        <span className="navbar-name">Madrine Denla Nansimbi</span>
      </div>

      {/* Navigation links */}
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li onClick={() => handleScroll("home")}>Home</li>
        <li onClick={() => handleScroll("about")}>About Me</li>
        <li onClick={() => handleScroll("projects")}>Projects</li>
        <li onClick={() => handleScroll("skills")}>Skills</li>
        <li onClick={() => handleScroll("contact")}>Contact Me</li>
        <li><a href="../src/components/Madrine-CV.pdf" target="_blank" download style={{textDecoration: 'none', color: 'white'}}>Download CV</a></li>

      </ul>

      {/* Mobile menu icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;
