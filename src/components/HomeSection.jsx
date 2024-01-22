import React from 'react';
import faceImage from '../images/face.jpg'; // Import your face image
import resumepdf from '../images/ResumeParamDesai.pdf'; // Import your resume pdf
import { FaGithub, FaLinkedin, FaAt, FaScroll } from 'react-icons/fa'; // Import icons
import jsLogo from '../images/js.png'; // Import JavaScript logo image

function HomeSection() {
  return (
    <section id="home" className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          
          <div className="solar-system">
            <img src={faceImage} alt="Param Desai" className="profile-image" />
            <img src={jsLogo} alt="JavaScript" className="orbit-logo orbit-1" />
            {/* <img src={reactLogo} alt="React" className="orbit-logo orbit-2" /> */}
            {/* Add more logos in orbits */}
          </div>
          
        </div>
        <div className="col-md-6">
        <h1><span className="typing-animation">Hi, I'm Param Desai.</span></h1>
          <p>I'm a full-stack engineer and a software developer with a passion to learn Artificial Intelligence and Machine Learning</p>
          <div className="button-and-icons">
            <div className="social-links">
              <a href="https://github.com/ParamDesai111" className="social-link" data-tooltip="Github" target="_blank" rel="noopener noreferrer"><FaGithub /><span>Github</span></a>
              <a href="https://www.linkedin.com/in/paramdesai111/" className="social-link" data-tooltip="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedin /><span>LinkedIn</span></a>
              <a href="mailto:param.desai101@gmail.com" className="social-link" data-tooltip="param.desai101@gmail.com"><FaAt /><span>Contact</span></a>
              <a href={resumepdf} className="social-link" data-tooltip="Resume" target="_blank" rel="noopener noreferrer"><FaScroll /><span>Resume</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
