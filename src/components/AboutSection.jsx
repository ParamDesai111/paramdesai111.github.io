// import React from 'react';
import React, { useRef } from 'react';
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
import cssLogo from '../images/css.png';
import sqlLogo from '../images/sql.png';
import certificationImage from '../images/certification.png'; // Import your certification image
import certificationImage2 from '../images/Automate.jpg'; // Import your certification image
import certificationImage3 from '../images/beyond.jpg'; // Import your certification image
import certificationImage4 from '../images/platform.jpg'; // Import your certification image
import certificationImage5 from '../images/visio.jpg'; // Import your certification image




function AboutSection() {
  const scrollContainer = useRef(null);

  const scroll = (scrollOffset) => {
    scrollContainer.current.scrollLeft += scrollOffset;
  };
  
  return (
    <section id="about" className="container mt-5">
      <h3 className="centered-heading">Technical Skills</h3>
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
          <span>C/C++</span>
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
        <div className="tech-item">
          <img src={nodejsLogo} alt="Node.js" />
          <span>Node.js</span>
        </div>
        <div className="tech-item">
          <img src={pythonLogo} alt="Python" />
          <span>Python</span>
        </div>
        <div className="tech-item">
          <img src={cssLogo} alt="CSS" />
          <span>CSS</span>
        </div>
        <div className="tech-item">
          <img src={sqlLogo} alt="SQL" />
          <span>SQL</span>
        </div>
      </div>

      <h3 className="centered-heading">Certifications</h3>
      <div className="certifications-container">
        <button onClick={() => scroll(-200)} className="scroll-button left">&#8249;</button>
        <div ref={scrollContainer} className="certifications-scroll">
          <div className="certification-card" onClick={() => window.open('https://verify.openedg.org/?id=bzCH.dXru.2Xw3', '_blank')}>
            <img src={certificationImage} alt="Certification" className="certification-image"/>
            <h4 className="certification-title">PCEP Certified Entry-Level Python Programmer</h4>
            <span className="certification-label">Python</span>
          </div>
          <div className="certification-card" onClick={() => window.open('https://www.linkedin.com/learning/certificates/2335a7906538be6d11329ebb7d8dd839c5eae9d262565ff150473fe57dcfc25a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B8YKWP369ThWrP1XDyVxo4w%3D%3D', '_blank')}>
            <img src={certificationImage2} alt="Certification" className="certification-image"/>
            <h4 className="certification-title">Power Automate Essential Training</h4>
            <span className="certification-label">Azure, Power Platform</span>
          </div>
          <div className="certification-card" onClick={() => window.open('https://www.linkedin.com/learning/certificates/5613ebc6de66886d155a601cbecfbb14837ba4b8c74ef14db729d113fa20bed7?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B8YKWP369ThWrP1XDyVxo4w%3D%3D', '_blank')}>
            <img src={certificationImage3} alt="Certification" className="certification-image"/>
            <h4 className="certification-title">Power Automate: Beyond the Basics</h4>
            <span className="certification-label">Azure</span>
          </div>
          <div className="certification-card" onClick={() => window.open('https://www.linkedin.com/learning/certificates/02adaa05c0c28ba67f765408f0aab4fb73dc38d711de8562836341a241f4fe61?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B8YKWP369ThWrP1XDyVxo4w%3D%3D', '_blank')}>
            <img src={certificationImage4} alt="Certification" className="certification-image"/>
            <h4 className="certification-title">Microsoft Power Platform Foundations</h4>
            <span className="certification-label">Azure</span>
          </div>
          <div className="certification-card" onClick={() => window.open('https://www.linkedin.com/learning/certificates/4eed290b2dbdb1e982116edfad6ec3b05e533b8c3cca6ebec87b020af68d1e6e?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BLT6QMFdMQcC9PgMu0XEfZA%3D%3D', '_blank')}>
            <img src={certificationImage5} alt="Certification" className="certification-image"/>
            <h4 className="certification-title">Visio 2021 Essential Training</h4>
            <span className="certification-label">Microsoft Visio</span>
          </div>

          {/* Repeat for other certifications */}
        </div>
        <button onClick={() => scroll(200)} className="scroll-button right">&#8250;</button>
      </div>
 
    </section>
  );
}

export default AboutSection;
