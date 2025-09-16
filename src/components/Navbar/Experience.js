import React from 'react';
import './Experience.css';

const experiences = [
  {
    client: "USAA",
    duration: "Jan 2025 – Till Date",
    role: "Frontend Web UI Developer",
    responsibilities: [
      
    ],
    tech: " ",
  },
  {
    client: "Standered Chartered Bank, Dallas, TX",
    duration: "Jul 2020 – Jun 2022",
    role: "UI React Developer",
    responsibilities: [
      
    ],
    tech: " ",
  },
  
];

const Experience = () => {
  return (
    <section className="experience-section">
      <h2 className="experience-heading">Professional Experience</h2>
      {experiences.map((exp, index) => (
        <div className="experience-card" key={index}>
          <div className="experience-header">
            <h3 className="experience-client">{exp.client}</h3>
            <span className="experience-duration">{exp.duration}</span>
          </div>
          <h4 className="experience-role">{exp.role}</h4>
          <ul className="experience-list">
            {exp.responsibilities.map((task, idx) => (
              <li key={idx}>{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;
