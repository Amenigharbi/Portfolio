import React, { useState } from 'react';
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('Tous');

  const projects = [
    {
      id: 1,
      title: 'Plateforme E-commerce Fullstack',
      description: 'Application web complète de commerce électronique avec panier, paiement sécurisé et dashboard administrateur. Interface responsive et expérience utilisateur optimisée.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express', 'JWT'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'Fullstack',
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 2,
      title: 'Système de Gestion de Projets Agile',
      description: 'Outil de collaboration en équipe avec tableaux Kanban, suivi des tâches en temps réel et rapports d\'avancement. Intégration Git et notifications.',
      technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io', 'Docker', 'Redis'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'Fullstack',
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 3,
      title: 'Algorithme de Recommandation Intelligent',
      description: 'Système de recommandation basé sur le machine learning avec traitement de données en temps réel et API RESTful. Analyse des comportements utilisateurs.',
      technologies: ['Python', 'Flask', 'Scikit-learn', 'Pandas', 'NumPy', 'Docker'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'AI/ML',
      image: '/api/placeholder/400/250'
    },
    {
      id: 4,
      title: 'Application Mobile Fitness & Nutrition',
      description: 'App cross-platform avec suivi d\'activités, planification de repas, et statistiques détaillées. Synchronisation cloud et mode hors-ligne.',
      technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js', 'Expo', 'Push Notifications'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'Mobile',
      image: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: 'Dashboard Analytics Temps Réel',
      description: 'Tableau de bord interactif avec visualisation de données en temps réel, rapports automatisés et alertes personnalisées.',
      technologies: ['React', 'D3.js', 'Node.js', 'WebSocket', 'MongoDB', 'Chart.js'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'Frontend',
      image: '/api/placeholder/400/250'
    },
    {
      id: 6,
      title: 'API Microservices Évolutive',
      description: 'Architecture microservices avec gestion d\'authentification, service de notification et gateway API. Déploiement Kubernetes.',
      technologies: ['Node.js', 'Docker', 'Kubernetes', 'Redis', 'MongoDB', 'JWT'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'Backend',
      image: '/api/placeholder/400/250'
    }
  ];

  const categories = ['Tous', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = activeFilter === 'Tous' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projets" className="projects-modern">
      {/* Background décoratif */}
      <div className="projects-background">
        <div className="project-shapes">
          <div className="project-shape shape-1"></div>
          <div className="project-shape shape-2"></div>
          <div className="project-shape shape-3"></div>
        </div>
      </div>

      <div className="container">
        <div className="projects-header">
          <h2 className="section-title-modern">
            Mes <span className="title-gradient">Projets</span>
          </h2>
          <p className="projects-subtitle">
            Découvrez une sélection de mes réalisations techniques et créatives
          </p>
        </div>

        {/* Filtres par catégorie */}
        <div className="projects-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
              <span className="filter-count">
                {category === 'Tous' ? projects.length : projects.filter(p => p.category === category).length}
              </span>
            </button>
          ))}
        </div>

        {/* Grille des projets */}
        <div className="projects-grid-modern">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className={`project-card ${project.featured ? 'featured' : ''}`}
            >
              {/* Image du projet */}
              <div className="project-image">
                <div className="image-placeholder">
                  <span>🎨</span>
                  <p>Aperçu du projet</p>
                </div>
                <div className="project-overlay">
                  <div className="project-actions">
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="demo-btn"
                    >
                      <span>👁️</span>
                      Voir la démo
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="code-btn"
                    >
                      <span>💻</span>
                      Code source
                    </a>
                  </div>
                </div>
                {project.featured && (
                  <div className="featured-badge">
                    <span>⭐</span>
                    Projet vedette
                  </div>
                )}
              </div>

              {/* Contenu du projet */}
              <div className="project-content">
                <div className="project-category">
                  {project.category}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                {/* Technologies utilisées */}
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="tech-tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions du projet */}
                <div className="project-links">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link github-link"
                  >
                    <span className="link-icon">📂</span>
                    Code Source
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link demo-link"
                  >
                    <span className="link-icon">🚀</span>
                    Voir le projet
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-action */}
        <div className="projects-cta">
          <div className="cta-content">
            <h3>Intéressé par une collaboration ?</h3>
            <p>Discutons de votre prochain projet ensemble</p>
            <a href="#contact" className="cta-btn">
              <span>💬</span>
              Commençons un projet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;