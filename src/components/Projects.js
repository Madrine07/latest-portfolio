import React from "react";
import "../styles/Projects.css";
import portfolioImg from '../images/portfolio.JPG';
import phics from '../images/BEL2.jfif';
import dina from '../images/dina.JPG';
import system from '../images/Booksystem.JPG';


const projects = [
  {
    title: "Portfolio Website",
    description:
      "My personal website built with React showcasing my skills and projects.",
    imageUrl: portfolioImg, // Replace with your screenshot
    tech: ["React", "CSS", "JavaScript"],
    liveUrl: "", // Add when hosted
    repoUrl: "https://github.com/Madrine07/latest-portfolio.git",
  },
  {
    title: "Graphics Work",
    description:
      "A collection of graphic design projects and visuals I've created.",
    imageUrl: phics, // Replace with your graphic showcase
    tech: ["Graphic Design"],
    liveUrl: "",
    repoUrl: "",
  },
  {
    title: "Book Management System",
    description:
      "React app to manage books with add, update, and delete features.",
    imageUrl: system, // Replace screenshot
    tech: ["React", "JavaScript"],
    liveUrl: "",
    repoUrl: "https://github.com/Madrine07/Book-management-system.git",
  },
  {
    title: "Apartment Booking Website",
    description:
      "A full-stack booking website for apartments, built with React and Flask.",
    imageUrl: dina, // Replace screenshot
    tech: ["React", "Flask", "MySQL"],
    // liveUrl: "",
    repoUrl: "https://dina-apartments.com/",
  },
];

function Projects() {
  return (
    <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <img
              src={proj.imageUrl}
              alt={proj.title}
              className="project-image"
              onError={(e) =>
                (e.target.src =
                  "https://via.placeholder.com/400x180?text=No+Image")
              }
            />
            <div className="project-content">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div className="tech-list">
                {proj.tech.map((techItem, i) => (
                  <span key={i} className="tech-badge">
                    {techItem}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {proj.liveUrl ? (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    Live Site
                  </a>
                ) : (
                  <span className="no-link">No Live Demo</span>
                )}
                {proj.repoUrl ? (
                  <a
                    href={proj.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn secondary"
                  >
                    GitHub
                  </a>
                ) : (
                  <span className="no-link">No Repo</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
