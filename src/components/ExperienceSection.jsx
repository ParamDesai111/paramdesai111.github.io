import React from 'react';
import experienceData from '../data/experiencedata.js'; // Adjusted import path

function ExperienceSection() {
  return (
    <section id="experience" className="container mt-5">
      <h2>Experience</h2>
      <div className="timeline">
        {experienceData.map(item => (
          <div key={item.id} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-date">{item.date}</div>
              <h3>{item.title}</h3>
              <h4>{item.company}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;
