import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Budgety',
      description:
        'Finance manangement system based on web. Used pure javascript and html,css.',
      image: 'budgeteee.JPG',
      link: 'https://example.com/project1',
    },
    {
      title: 'Dice game pro',
      description: 'Two player dice game. Used pure javascript and html css.',
      image: './img/dicegame.JPG',
      link: 'https://example.com/project2',
    },
    {
      title: 'SEDAY',
      description:
        'Online watching movies web site.Used reactjs and  pure css.',
      image: 'project3.jpg',
      link: 'https://example.com/project3',
    },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-content">
        <h2>Portfolio</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <div className="project" key={index}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link}>View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
