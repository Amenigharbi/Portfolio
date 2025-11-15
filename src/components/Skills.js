import React, { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Tous');
  const sectionRef = useRef(null);

  const skills = [
    { 
      name: 'JavaScript/TypeScript', 
      level: 90,
      icon: '⚡',
      color: '#f7df1e',
      category: 'Frontend',
      description: 'Développement d\'applications web interactives et performantes'
    },
    { 
      name: 'React.js', 
      level: 85,
      icon: '⚛️',
      color: '#61dafb',
      category: 'Frontend',
      description: 'Création d\'interfaces utilisateur modernes et réactives'
    },
    { 
      name: 'NextJs', 
      level: 80,
      icon: '▲',
      color: '#000000',
      category: 'Frontend',
      description: 'Framework React pour le rendu côté serveur et les applications fullstack'
    },
    { 
      name: 'Python', 
      level: 75,
      icon: '🐍',
      color: '#3776ab',
      category: 'Backend',
      description: 'Scripting, analyse de données et développement web'
    },
    { 
      name: 'Java', 
      level: 70,
      icon: '☕',
      color: '#ed8b00',
      category: 'Backend',
      description: 'Développement d\'applications d\'entreprise et Android'
    },
    { 
      name: 'Kafka', 
      level: 75,
      icon: '🔗',
      color: '#231f20',
      category: 'Backend',
      description: 'Plateforme de streaming de données en temps réel et messagerie distribuée'
    },
    { 
      name: 'SQL/NoSQL', 
      level: 85,
      icon: '🗄️',
      color: '#336791',
      category: 'Database',
      description: 'Conception et optimisation de bases de données'
    },
    // DevOps & Infrastructure
    { 
      name: 'Docker', 
      level: 85,
      icon: '🐳',
      color: '#2496ed',
      category: 'DevOps',
      description: 'Conteneurisation et déploiement d\'applications'
    },
    { 
      name: 'Kubernetes', 
      level: 80,
      icon: '☸️',
      color: '#326ce5',
      category: 'DevOps',
      description: 'Orchestration de conteneurs et gestion de clusters'
    },
    { 
      name: 'Terraform', 
      level: 75,
      icon: '🏗️',
      color: '#7b42bc',
      category: 'DevOps',
      description: 'Infrastructure as Code et provisioning cloud'
    },
    { 
      name: 'Ansible', 
      level: 70,
      icon: '⚙️',
      color: '#e00',
      category: 'DevOps',
      description: 'Automatisation de configuration et déploiement'
    },
    { 
      name: 'Vagrant', 
      level: 65,
      icon: '📦',
      color: '#1563ff',
      category: 'DevOps',
      description: 'Création et gestion d\'environnements de développement'
    },
    { 
      name: 'GitLab CI/CD', 
      level: 80,
      icon: '🦊',
      color: '#fc6d26',
      category: 'DevOps',
      description: 'Intégration et déploiement continus'
    },
    { 
      name: 'GitHub Actions', 
      level: 75,
      icon: '⚡',
      color: '#2088ff',
      category: 'DevOps',
      description: 'Automatisation des workflows de développement'
    },
    { 
      name: 'Prometheus', 
      level: 70,
      icon: '📊',
      color: '#e6522c',
      category: 'DevOps',
      description: 'Monitoring et alerting des systèmes distribués'
    },
    { 
      name: 'Grafana', 
      level: 75,
      icon: '📈',
      color: '#f46800',
      category: 'DevOps',
      description: 'Visualisation de données et tableaux de bord'
    },
    { 
      name: 'AWS/Cloud', 
      level: 80,
      icon: '☁️',
      color: '#ff9900',
      category: 'DevOps',
      description: 'Infrastructure cloud et services managés'
    },
    // Tools
    { 
      name: 'Git/GitHub', 
      level: 90,
      icon: '📚',
      color: '#f05032',
      category: 'Tools',
      description: 'Gestion de versions et collaboration en équipe'
    },
    // Architecture
    { 
      name: 'Architecture logicielle', 
      level: 85,
      icon: '🏛️',
      color: '#667eea',
      category: 'Architecture',
      description: 'Conception de systèmes évolutifs et maintenables'
    },
    { 
      name: 'Microservices', 
      level: 80,
      icon: '🔗',
      color: '#4caf50',
      category: 'Architecture',
      description: 'Architecture distribuée et APIs découplées'
    }
  ];

  const categories = ['Tous', ...new Set(skills.map(skill => skill.category))];
  
  const filteredSkills = activeCategory === 'Tous' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const getSkillLevelText = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 70) return 'Avancé';
    if (level >= 50) return 'Intermédiaire';
    return 'Débutant';
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="competences" className="skills-modern" ref={sectionRef}>
      {/* Background animé amélioré */}
      <div className="skills-background">
        <div className="tech-particles">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="tech-particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            >
              {['</>', '{}', '[]', '()', ';;', '🐳', '☸️', '🏗️'][i % 8]}
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="skills-header">
          <h2 className="section-title-modern">
            Mes <span className="title-gradient">Compétences</span>
          </h2>
          <p className="skills-subtitle">
            Un panorama complet de mes expertises techniques en développement et DevOps
          </p>
        </div>

        {/* Navigation par catégories améliorée */}
        <div className="skills-categories">
          {categories.map(category => (
            <button 
              key={category} 
              className={`category-filter ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              <span className="filter-icon">
                {category === 'Tous' && '🌟'}
                {category === 'Frontend' && '🎨'}
                {category === 'Backend' && '⚙️'}
                {category === 'Database' && '🗄️'}
                {category === 'DevOps' && '🚀'}
                {category === 'Tools' && '🛠️'}
                {category === 'Architecture' && '🏛️'}
              </span>
              {category}
              <span className="filter-count">
                {category === 'Tous' ? skills.length : skills.filter(s => s.category === category).length}
              </span>
            </button>
          ))}
        </div>

        {/* Statistiques rapides */}
        <div className="skills-stats">
          <div className="skill-stat-card">
            <div className="stat-number">{skills.length}</div>
            <div className="stat-label">Technologies</div>
          </div>
          <div className="skill-stat-card">
            <div className="stat-number">
              {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%
            </div>
            <div className="stat-label">Niveau moyen</div>
          </div>
          <div className="skill-stat-card">
            <div className="stat-number">{categories.length - 1}</div>
            <div className="stat-label">Domaines</div>
          </div>
          <div className="skill-stat-card">
            <div className="stat-number">
              {skills.filter(s => s.level >= 70).length}
            </div>
            <div className="stat-label">Compétences avancées</div>
          </div>
        </div>

        {/* Grille des compétences améliorée */}
        <div className="skills-grid-modern">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name} 
              className={`skill-card ${isVisible ? 'animate-in' : ''}`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                borderLeft: `4px solid ${skill.color}`
              }}
            >
              {/* En-tête de la carte */}
              <div className="skill-card-header">
                <div 
                  className="skill-icon" 
                  style={{ 
                    backgroundColor: `${skill.color}20`,
                    border: `2px solid ${skill.color}40`
                  }}
                >
                  <span className="icon-emoji">{skill.icon}</span>
                </div>
                <div className="skill-meta">
                  <div className="skill-category-tag" style={{ backgroundColor: `${skill.color}20`, color: skill.color }}>
                    {skill.category}
                  </div>
                  <h3 className="skill-name">{skill.name}</h3>
                  <p className="skill-description">{skill.description}</p>
                </div>
              </div>

              {/* Visualisation du niveau */}
              <div className="skill-visualization">
                <div className="skill-level-header">
                  <span className="skill-level-text">{getSkillLevelText(skill.level)}</span>
                  <span 
                    className="percentage-number"
                    style={{ color: skill.color }}
                  >
                    {skill.level}%
                  </span>
                </div>
                
                <div className="skill-level-indicator">
                  <div 
                    className="skill-level-fill"
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                      boxShadow: `0 2px 8px ${skill.color}40`
                    }}
                  >
                    <div className="level-glow"></div>
                  </div>
                </div>

                <div className="skill-dots-container">
                  {[...Array(10)].map((_, dotIndex) => (
                    <div
                      key={dotIndex}
                      className={`skill-dot ${dotIndex < skill.level / 10 ? 'active' : ''}`}
                      style={{ 
                        backgroundColor: dotIndex < skill.level / 10 ? skill.color : '#e2e8f0'
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Cercle de progression */}
              <div className="skill-progress-ring">
                <svg width="70" height="70" viewBox="0 0 70 70">
                  <defs>
                    <linearGradient id={`gradient-${skill.name.replace(/\s+/g, '-')}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={skill.color} />
                      <stop offset="100%" stopColor={`${skill.color}dd`} />
                    </linearGradient>
                  </defs>
                  <circle 
                    cx="35" 
                    cy="35" 
                    r="28" 
                    stroke="#f1f5f9" 
                    strokeWidth="4" 
                    fill="none"
                  />
                  <circle 
                    cx="35" 
                    cy="35" 
                    r="28" 
                    stroke={`url(#gradient-${skill.name.replace(/\s+/g, '-')})`}
                    strokeWidth="4" 
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 28}`}
                    strokeDashoffset={isVisible ? `${2 * Math.PI * 28 * (1 - skill.level / 100)}` : `${2 * Math.PI * 28}`}
                    transform="rotate(-90 35 35)"
                    className="progress-ring"
                  />
                </svg>
                <div className="ring-percentage" style={{ color: skill.color }}>
                  {skill.level}%
                </div>
              </div>

              {/* Badge de niveau */}
              <div 
                className="skill-level-badge"
                style={{ 
                  backgroundColor: skill.color,
                  color: 'white'
                }}
              >
                {getSkillLevelText(skill.level)}
              </div>
            </div>
          ))}
        </div>

        {/* Légende améliorée */}
        <div className="skills-legend-modern">
          <div className="legend-title">Échelle de compétence</div>
          <div className="legend-items">
            <div className="legend-item">
              <div className="legend-color beginner"></div>
              <div className="legend-info">
                <span className="legend-level">Débutant</span>
                <span className="legend-range">0-40%</span>
              </div>
            </div>
            <div className="legend-item">
              <div className="legend-color intermediate"></div>
              <div className="legend-info">
                <span className="legend-level">Intermédiaire</span>
                <span className="legend-range">40-70%</span>
              </div>
            </div>
            <div className="legend-item">
              <div className="legend-color advanced"></div>
              <div className="legend-info">
                <span className="legend-level">Avancé</span>
                <span className="legend-range">70-90%</span>
              </div>
            </div>
            <div className="legend-item">
              <div className="legend-color expert"></div>
              <div className="legend-info">
                <span className="legend-level">Expert</span>
                <span className="legend-range">90-100%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section spéciale DevOps */}
        <div className="devops-highlight">
          <div className="devops-content">
            <h3>Expertise DevOps & Cloud</h3>
            <p>
              Spécialisée dans l'automatisation, la conteneurisation et l'orchestration, 
              je maîtrise l'ensemble de la chaîne DevOps moderne - du développement au déploiement et monitoring.
            </p>
            <div className="devops-stack">
              <div className="stack-category">
                <h4>🛠️ Infrastructure as Code</h4>
                <span>Terraform, Ansible, Vagrant</span>
              </div>
              <div className="stack-category">
                <h4>🐳 Conteneurisation</h4>
                <span>Docker, Kubernetes, Helm</span>
              </div>
              <div className="stack-category">
                <h4>⚡ CI/CD</h4>
                <span>GitLab CI, GitHub Actions, Jenkins</span>
              </div>
              <div className="stack-category">
                <h4>📊 Monitoring</h4>
                <span>Prometheus, Grafana, ELK Stack</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;