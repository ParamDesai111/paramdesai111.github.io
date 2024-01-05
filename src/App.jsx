import React from 'react';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';


function App() {
  return (
    <div>
      <Navbar />
      <div id="home" className="section"><HomeSection /></div>
      <div id="about" className="section"><AboutSection /></div>
      <div id="experience" className="section"><ExperienceSection /></div>
      <div id="projects" className="section"><ProjectsSection /></div>
    </div>
  );
}

export default App;
