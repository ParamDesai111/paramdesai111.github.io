import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import { FaGithub, FaLink } from 'react-icons/fa'; // Import icon components

function ProjectsSection() {
  return (
    <section id="projects" className="container mt-5">
      <h2 className="text-center mb-4">Projects</h2>
      <div className="row">
        {/* Project 1 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card h-100 project-card">
            <div className="card-body">
              <h5 className="card-title">TIC TAC EMOJI</h5>
              <div className="tech-stack">Zustand React TypeScript Framer Motion</div>
              <div className="project-links">
                <a href="https://github.com/your-username/your-project-repo" className="project-btn">
                  <FaGithub /> {/* GitHub Icon */}
                </a>
                <a href="https://your-live-project-link.com" className="project-btn">
                  <FaLink /> {/* Link Icon */}
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* More projects */}
      </div>
    </section>
  );
}

export default ProjectsSection;
