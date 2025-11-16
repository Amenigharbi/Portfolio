import React, { useState, useEffect } from 'react';
import './ExperienceCompact.css';

const ExperienceCompact = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  const experiences = [
    {
      id: 1,
      title: 'Développeuse Full Stack et DevSecOps',
      company: 'Kriga technologies.',
      period: 'Fev 2025 - Juil 2025',
      description: [
    'Conception et développement d\'applications web full-stack avec React/Next.js et Node.js',
    'Implémentation de pratiques DevSecOps dans les pipelines CI/CD pour la sécurité applicative',
    'Optimisation des performances frontend et backend avec monitoring des métriques clés',
    'Mise en place de conteneurisation Docker et orchestration pour les environnements de déploiement',
    'Collaboration avec les équipes produit pour définir les spécifications techniques',
  ],
      technologies: ['React', 'NextJs', 'TypeScript', 'DevSecOps'],
      status: 'Terminé'
    },
   {
  id: 2,
  title: 'Ingénieure Devops',
  company: 'ItGate',
  period: 'Sep 2024 - Oct 2024',
  description: [
    'Mise en place et gestion de pipelines CI/CD',
    'Automatisation des déploiements et processus DevOps',
    'Gestion de l\'infrastructure cloud et conteneurisation',
    'Monitoring et optimisation des performances systèmes',
    'Sécurisation des environnements et conformité'
  ],
  technologies: ['Docker', 'Kubernetes', 'AWS', 'Jenkins', 'GitLab CI', 'Terraform', 'Ansible'],
  status: 'past'
},
   {
  id: 3,
  title: 'Développeuse Magento 2',
  company: 'Satoripop',
  period: 'Juil 2024 - Aout 2024',
  description: [
    'Développement de thèmes et templates Magento 2',
    'Création et customisation de modules PHP',
    'Intégration de composants frontend responsive',
    'Optimisation des performances et SEO',
    'Maintenance et évolution de boutiques e-commerce'
  ],
  technologies: ['Magento 2', 'PHP', 'JavaScript', 'jQuery', 'LESS/CSS', 'MySQL'],
  status: 'past'
},
{
  id: 4,
  title: 'Développeuse Backend Django',
  company: 'SmartOvate',
  period: 'Oct 2023- Jan 2024',
  description: [
    'Développement d\'une application collaborative type Microsoft Teams',
    'Conception et implémentation d\'APIs REST avec Django REST Framework',
    'Gestion de la messagerie en temps réel avec WebSockets',
    'Système de gestion de fichiers et partage d\'équipe',
    'Architecture de base de données pour fonctionnalités collaboratives'
  ],
  technologies: ['Django', 'Python', 'Django REST Framework'],
  status: 'past'
},
{
  id: 5,
  title: 'Développeuse Full Stack',
  company: 'Pembeia',
  period: 'Juil 2023 - Aout 2023',
  description: [
    'Développement d\'une application web de blog complète',
    'Conception et implémentation du frontend avec Angular',
    'Création d\'APIs REST avec Node.js et Express',
    'Gestion de la base de données MongoDB pour les articles et utilisateurs',
    'Mise en place du système d\'authentification et d\'autorisation',
  ],
  technologies: ['MongoDB', 'Express.js', 'Angular', 'Node.js', 'TypeScript', 'JWT', 'REST API'],
  status: 'past'
}
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => [...new Set([...prev, entry.target.dataset.id])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.timeline-item-compact').forEach((item) => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
 <section id="experience" className="experience-compact">
    {/* Ajouter ces éléments d'arrière-plan */}
    <div className="experience-bg">
      <div className="bg-grid"></div>
      <div className="glow-effect glow-1"></div>
      <div className="glow-effect glow-2"></div>
    </div>
    
     <div className="container">
        <div className="experience-header-compact">
          <h2 className="section-title-compact">
            <span className="title-gradient">Mon Parcours Professionnel</span>
          </h2>
          <p className="experience-subtitle-compact">
            Découvrez mon évolution, mes réalisations et l'expertise acquise au fil des années
          </p>
        </div>

        <div className="timeline-compact">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className={`timeline-item-compact ${
                visibleItems.includes(exp.id.toString()) ? 'animate-in' : ''
              }`}
              data-id={exp.id}
            >
              <div className="timeline-marker-compact"></div>

              <div className="timeline-content-compact">
                <div className="experience-header-mini">
                  <div>
                    <h3 className="experience-title-mini">{exp.title}</h3>
                    <div className="experience-company-mini">{exp.company}</div>
                    <div className="experience-period-mini">
                      <span>⏱️</span>
                      {exp.period}
                    </div>
                  </div>
                  <div className={`experience-badge-compact ${
                    exp.status === 'current' ? 'badge-current-compact' : 'badge-past-compact'
                  }`}>
                    {exp.status === 'current' ? 'En cours' : 'Terminé'}
                  </div>
                </div>

                <div className="experience-description-compact">
                  <ul>
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="experience-technologies-compact">
                  <div className="tech-tags-compact">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag-compact">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceCompact;