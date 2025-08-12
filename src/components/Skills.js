import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython } from "react-icons/fa";
import { SiFlask, SiAdobephotoshop } from "react-icons/si";
import { MdGroupWork, MdOutlinePsychology, MdRecordVoiceOver } from "react-icons/md";
import "../styles/Skills.css";

const technicalSkills = [
  { icon: <FaHtml5 className="icon html" />, title: "HTML", description: "Structuring web pages with clean, semantic markup." },
  { icon: <FaCss3Alt className="icon css" />, title: "CSS", description: "Styling and designing responsive, visually appealing layouts." },
  { icon: <FaJs className="icon js" />, title: "JavaScript", description: "Adding interactivity and logic to websites." },
  { icon: <FaReact className="icon react" />, title: "React", description: "Building dynamic, component-based UIs with reusable code." },
  { icon: <FaPython className="icon python" />, title: "Python", description: "Writing scripts and backend logic for automation and data handling." },
  { icon: <SiFlask className="icon flask" />, title: "Flask", description: "Creating RESTful APIs and lightweight backend services." },
  { icon: <SiAdobephotoshop className="icon graphics" />, title: "Graphics", description: "Designing simple visual content for branding and presentations." },
];

const softSkills = [
  { icon: <MdGroupWork className="icon teamwork" />, title: "Teamwork", description: "Collaborating effectively to achieve project goals." },
  { icon: <MdOutlinePsychology className="icon problem" />, title: "Problem Solving", description: "Breaking down complex issues into manageable solutions." },
  { icon: <MdRecordVoiceOver className="icon communication" />, title: "Communication Skills", description: "Expressing ideas clearly in written and verbal form." },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title">My Skills</h2>

      <section className="skills-section">
        <h3 className="skills-subtitle cyan">Technical Skills</h3>
        <div className="skills-grid">
          {technicalSkills.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill.icon}
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="skills-section">
        <h3 className="skills-subtitle cyan">Soft Skills</h3>
        <div className="skills-grid">
          {softSkills.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill.icon}
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
