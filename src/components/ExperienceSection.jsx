import React from 'react';

function ExperienceSection() {
  return (
    <section id="experience" className="container mt-5">
      <h2>Experience</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-date">Jan 2022 - Present</div>
            <h3>Internship at XYZ Company</h3>
            <p>Developed a full-stack application...</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-date">Jun 2021 - Dec 2021</div>
            <h3>Volunteer Developer at ABC Organization</h3>
            <p>Contributed to open-source projects...</p>
          </div>
        </div>
        {/* More timeline items */}
      </div>
    </section>
  );
}

export default ExperienceSection;
