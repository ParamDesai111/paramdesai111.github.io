import React from 'react';
import jsLogo from '../images/js.png';
import azureLogo from '../images/azure.png';
import cLogo from '../images/C.png';
import gitLogo from '../images/git.png';
import graphLogo from '../images/graphql.png';
import reactLogo from '../images/react.png';
import javaLogo from '../images/java.png';
import mongodbLogo from '../images/mongodb.png';
import nodejsLogo from '../images/nodejs.png';
import pythonLogo from '../images/python.png';

function AboutSection() {
  return (
    <section id="about" className="container mt-5">
      <h2>About Me</h2>
      <p>...</p>

      <h3>Technical Skills</h3>
      <div className="tech-skills">
        <div className="tech-item">
          <img src={jsLogo} alt="JavaScript" />
          <span>JavaScript</span>
        </div>
        <div className="tech-item">
          <img src={azureLogo} alt="Azure" />
          <span>Azure</span>
        </div>
        <div className="tech-item">
          <img src={cLogo} alt="C" />
          <span>C</span>
        </div>
        <div className="tech-item">
          <img src={gitLogo} alt="Git" />
          <span>Git</span>
        </div>
        <div className="tech-item">
          <img src={graphLogo} alt="GraphQL" />
          <span>GraphQL</span>
        </div>
        <div className="tech-item">
          <img src={reactLogo} alt="React" />
          <span>React</span>
        </div>
        <div className="tech-item">
          <img src={javaLogo} alt="Java" />
          <span>Java</span>
        </div>
        <div className="tech-item">
          <img src={mongodbLogo} alt="MongoDB" />
          <span>MongoDB</span>
        </div>
        
        





      </div>
    </section>
  );
}

export default AboutSection;
