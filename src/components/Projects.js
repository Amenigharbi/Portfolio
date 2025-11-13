import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Plateforme E-commerce',
      description: 'Application web complète de commerce électronique avec React et Node.js',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 2,
      title: 'Application de Gestion de Projets',
      description: 'Outil de collaboration en équipe avec tableaux Kanban et suivi des tâches',
      technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 3,
      title: 'Système de Recommandation',
      description: 'Algorithme de recommandation basé sur le machine learning',
      technologies: ['Python', 'Flask', 'Scikit-learn', 'Pandas'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 4,
      title: 'Application Mobile de Fitness',
      description: 'App mobile cross-platform pour le suivi des activités sportives',
      technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    }
  ];

  return (
    <section id="projets" className="projects">
      <div className="container">
        <h2 className="section-title">Projets Réalisés</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  Code Source
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  Démo Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;