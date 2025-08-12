import React from "react";
import Navbar from "../src/components/navbar";
import Home from "../src/components/Hero";
import About from "../src/components/About";
import Projects from "../src/components/Projects";
import Skills from "../src/components/Skills";
import Contact from "../src/components/Contact";
import "./App.css";

function App() {
  return (
    <>
      {/* Navbar at the top */}
      <Navbar />

      {/* Each section gets an id so navbar links can scroll to them */}
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default App;
