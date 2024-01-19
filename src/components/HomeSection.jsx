import React from 'react';
import faceImage from '../images/face.jpg'; // Import your face image
import { FaGithub, FaLinkedin, FaAt } from 'react-icons/fa'; // Import icons

function HomeSection() {
  return (
    <section id="home" className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1>Hi, I'm Param Desai</h1>
          <p>I'm a full-stack engineer and a software developer with a passion to learn Artificial Intelligence and Machine Learning</p>
        </div>
        <div className="col-md-6 text-center">
          <img src={faceImage} alt="Param Desai" className="profile-image" />
          <div className="social-links">
            <a href="https://github.com/ParamDesai111" className="social-link"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/paramdesai111/" className="social-link"><FaLinkedin /></a>
            <a href="param.desai101@gmail.com" className="social-link"><FaAt /></a>
            {/* Add more social links if needed */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
