import { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('Tous');

const projects = [
    {
      id: 1,
      title: 'HealthFlow - Plateforme de Santé Digitale',
      description: 'Une plateforme médicale complète permettant aux patients et professionnels de santé de gérer les rendez-vous, dossiers médicaux et consultations en ligne. Système d\'authentification sécurisé avec rôles multiples (PATIENT/DOCTOR), interface moderne avec design glassmorphism et animations fluides.',
      technologies: ['Next.js 14', 'TypeScript', 'NextAuth', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'Zod', 'React Hook Form'],
      github: 'https://github.com/Amenigharbi/HealthFlow-Plateforme-de-Telemedecine-et-Gestion-de-Sante-Digitale',
      category: 'Fullstack',
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 2,
      title: 'Plateforme de Collaboration Scientifique',
      description: 'Un écosystème numérique complet conçu pour révolutionner la façon dont les chercheurs, universitaires et scientifiques collaborent entre institutions et disciplines. Cette plateforme comble les distances géographiques et facilite le partage des connaissances au sein de la communauté scientifique grâce à des technologies de communication en temps réel.',
      technologies: ['NextJs', 'MongoDB', 'WebSocket', 'JWT et OAuth'],
      github: 'https://github.com/Amenigharbi/Scientific_collaboration_platform',
      category: 'Fullstack',
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 3,
      title: 'Application web Ecommerce multi-vendeurs et multi-partenaires',
      description: 'Une plateforme B2B innovante connectant les petits détaillants et restaurants avec des fournisseurs et partenaires multiples. Cette solution digitale optimise la supply chain tout en garantissant une sécurité renforcée grâce aux pratiques DevSecOps.',
      technologies: ['NextJs', 'ReactJs', 'MongoDB', 'GitlabCi', 'Docker', 'Sonarqube','Trivy','Gitleaks','Prometheus','Grafana','Ansible'],
      github: 'https://github.com/Amenigharbi/Marketplace_B2B_BackOffice_with_devSecOps',
      category: 'Fullstack',
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 4,
      title: 'Application Mobile de Messagerie Instantanée',
      description: 'Une application mobile de messagerie instantanée sécurisée et performante, inspirée de WhatsApp, offrant une communication en temps réel avec une expérience utilisateur optimale.',
      technologies: ['React Native', 'Firebase'],
      github: 'https://github.com/Amenigharbi/AppMobile_ReactNative',
      category: 'Mobile',
      image: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: 'Système de Réservation Hôtelière - Architecture Microservices',
      description: 'Une plateforme de réservation hôtelière scalable construite avec une architecture microservices utilisant Spring Boot et API Gateway, intégrant des pratiques DevOps complètes',
      technologies: ['SpringBoot', 'Spring Security', 'JWT', 'Docker', 'Sonarqube', 'GitlabCi','Aws','Kubernetes'],
      github: 'https://github.com/Amenigharbi/MicroServices_Project_with_Devops',
      category: 'Fullstack',
      image: '/api/placeholder/400/250'
    },
    {
      id: 6,
      title: 'Plateforme Universitaire - Architecture Spring Boot Avancée',
      description: 'Une plateforme universitaire complète exploitant les architectures modernes avec Spring Boot, CQRS, Kafka et AOP pour une gestion scalable des processus académiques.',
      technologies: ['SpringBoot', 'Kafka', 'CQRS', 'AOP', 'MySQL', 'Docker'],
      github: 'https://github.com/Amenigharbi/ProjetAOP_versionFinale',
      category: 'Backend',
      image: '/api/placeholder/400/250'
    },
    {
      id: 7,
      title: 'Site web vitrine Royalty Marketing',
      description: 'Architecture microservices avec gestion d\'authentification, service de notification et gateway API. Déploiement Kubernetes.',
      technologies: ['Html', 'css', 'Js', 'Docker'],
      github: 'https://github.com/Amenigharbi/site_web_vitrine_Royalty_Marketing',
      category: 'Frontend',
      image: '/api/placeholder/400/250'
    },
     {
      id: 8,
      title: 'Site web Les délices de madame Gharbi',
      description: 'Les Délices de Madame Gharbi est une plateforme élégante dédiée à la présentation des créations pâtissières exceptionnelles de Madame Gharbi, mettant en valeur son savoir-faire unique et son univers gourmand..',
      technologies: ['html', 'css', 'js', 'JQuery','Docker'],
      github: 'https://github.com/Amenigharbi/project_cake_design',
      category: 'Frontend',
      image: '/api/placeholder/400/250'
    },
     {
      id: 9,
      title: 'Boutique Solidaire',
      description: 'Une plateforme e-commerce innovante qui valorise le talent créatif des personnes handicapées en commercialisant leurs créations vestimentaires uniques.',
      technologies: ['ReactJs', 'NodeJs', 'Mongodb'],
      github: 'https://github.com/Amenigharbi/ProjetFeriel',
      category: 'Fullstack',
      image: '/api/placeholder/400/250'
    },
     {
      id: 10,
      title: 'Jeu Puissance 4',
      description: 'Puissance 4 est une implémentation en Python du jeu de stratégie classique où deux joueurs s\'affrontent pour aligner 4 pions horizontalement, verticalement ou en diagonale.',
      technologies: ['Python'],
      github: ' https://github.com/Amenigharbi/jeu_puissance4_python',
      category: 'Backend',
      image: '/api/placeholder/400/250'
    },
    {
      id: 11,
      title: ' Application Web de Gestion Administrative - ENOVA Robotics',
      description: 'Plateforme de gestion administrative pour ENOVA Robotics permettant de superviser l\'ensemble des robots, interventions, maintenance et performances en temps réel..',
      technologies: ['NextJs','MongoDb'],
      github: 'https://github.com/Amenigharbi/Enova',
      category: 'Fullstack',
      image: '/api/placeholder/400/250'
    },
     {
      id: 12,
      title: ' Application E-commerce Magento 2 - Parfums de Femmes',
      description: 'Boutique en ligne spécialisée dans la vente de parfums féminins de luxe, offrant une expérience d\'achat premium et personnalisée.',
      technologies: ['Magento2','PHP','MySQL','Docker','n8n'],
      github: 'https://github.com/Amenigharbi/Magento2_Project',
      category: 'Fullstack',
      image: '/api/placeholder/400/250'
    },
     {
      id: 13,
      title: 'Projet Blog Littéraire - Plateforme de Partage de Livres d\'Auteurs',
      description: 'Blog Littéraire Collaboratif permettant aux auteurs de partager leurs œuvres, chapitres et réflexions, tout en créant une communauté de lecteurs engagés.',
      technologies: ['Angular','NodeJs','ExpressJs','MongoDb'],
      github: 'https://github.com/Amenigharbi/Blog_Mean_stack',
      category: 'Fullstack',
      image: '/api/placeholder/400/250'
    },
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
           <span className="title-gradient">  Mes Projets</span>
          </h2>
          <p className="projects-subtitle">
            Découvrez une sélection de mes réalisations techniques et créatives
          </p>
        </div>

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

        <div className="projects-grid-modern">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className={`project-card ${project.featured ? 'featured' : ''}`}
            >
              <div className="project-image">
                <div className="image-placeholder">
                  <span>🎨</span>
                  <p>Aperçu du projet</p>
                </div>
                <div className="project-overlay">
                  <div className="project-actions">
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

              <div className="project-content">
                <div className="project-category">
                  {project.category}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
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
                </div>
              </div>
            </div>
          ))}
        </div>

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