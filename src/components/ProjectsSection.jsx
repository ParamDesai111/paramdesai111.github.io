import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import { FaGithub, FaLink } from 'react-icons/fa'; // Import icon components
import projectData from '../data/projectdata'; // Your projects data

function ProjectsSection() {
  return (
    <section id="projects" className="container mt-5">
      <h2 className="text-center mb-4">Projects</h2>
      <div className="row">
        {projectData.map(item => (
          <div key={item.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 project-card">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <div className="tech-stack">{item.tech}</div>
                <div className="project-links">
                  <a href={item.github_url} className="project-btn">
                    <FaGithub /> {/* GitHub Icon */}
                  </a>
                  <a href={item.live_url} className="project-btn">
                    <FaLink/> {/* External Link Icon */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
