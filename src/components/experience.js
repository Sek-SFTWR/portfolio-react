import React from 'react';

const Experience = () => {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'Java',
    'PHP',
    'Bootstrap',
    'Python',
    'MSSQL, MYSQL',
    'C',
  ];

  return (
    <section className="experience" id="experience">
      <div className="experience-content">
        <h2>Skills and Experience</h2>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <div key={index}>
              <p>{skill}</p>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
