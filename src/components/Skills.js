import React, { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    { 
      name: 'JavaScript/TypeScript', 
      level: 90,
      icon: '⚡',
      color: '#f7df1e',
      category: 'Frontend'
    },
    { 
      name: 'React.js', 
      level: 85,
      icon: '⚛️',
      color: '#61dafb',
      category: 'Frontend'
    },
    { 
      name: 'Node.js', 
      level: 80,
      icon: '🟢',
      color: '#68a063',
      category: 'Backend'
    },
    { 
      name: 'Python', 
      level: 75,
      icon: '🐍',
      color: '#3776ab',
      category: 'Backend'
    },
    { 
      name: 'Java', 
      level: 70,
      icon: '☕',
      color: '#ed8b00',
      category: 'Backend'
    },
    { 
      name: 'SQL/NoSQL', 
      level: 85,
      icon: '🗄️',
      color: '#336791',
      category: 'Database'
    },
    { 
      name: 'Docker', 
      level: 75,
      icon: '🐳',
      color: '#2496ed',
      category: 'DevOps'
    },
    { 
      name: 'Git/GitHub', 
      level: 90,
      icon: '📚',
      color: '#f05032',
      category: 'Tools'
    },
    { 
      name: 'AWS/Cloud', 
      level: 70,
      icon: '☁️',
      color: '#ff9900',
      category: 'DevOps'
    },
    { 
      name: 'Architecture logicielle', 
      level: 80,
      icon: '🏗️',
      color: '#667eea',
      category: 'Architecture'
    }
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

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
      <div className="container">
        <div className="skills-header">
          <h2 className="section-title-modern">Mes Compétences</h2>
          <p className="skills-subtitle">
            Un panorama de mes expertises techniques et des technologies que je maîtrise
          </p>
        </div>

        {/* Navigation par catégories */}
        <div className="skills-categories">
          {categories.map(category => (
            <button key={category} className="category-filter">
              {category}
            </button>
          ))}
        </div>

        {/* Grille des compétences */}
        <div className="skills-grid-modern">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={`skill-card ${isVisible ? 'animate-in' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-card-header">
                <div className="skill-icon" style={{ backgroundColor: `${skill.color}20` }}>
                  <span className="icon-emoji">{skill.icon}</span>
                </div>
                <div className="skill-meta">
                  <span className="skill-category">{skill.category}</span>
                  <h3 className="skill-name">{skill.name}</h3>
                </div>
              </div>

              <div className="skill-visualization">
                <div className="skill-level-indicator">
                  <div 
                    className="skill-level-fill"
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`
                    }}
                  ></div>
                </div>
                <div className="skill-percentage-modern">
                  <span 
                    className="percentage-number"
                    style={{ color: skill.color }}
                  >
                    {skill.level}%
                  </span>
                  <div className="skill-dots">
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
              </div>

              <div className="skill-progress-ring">
                <svg width="60" height="60" viewBox="0 0 60 60">
                  <circle 
                    cx="30" 
                    cy="30" 
                    r="25" 
                    stroke="#e2e8f0" 
                    strokeWidth="4" 
                    fill="none"
                  />
                  <circle 
                    cx="30" 
                    cy="30" 
                    r="25" 
                    stroke={skill.color}
                    strokeWidth="4" 
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 25}`}
                    strokeDashoffset={isVisible ? `${2 * Math.PI * 25 * (1 - skill.level / 100)}` : `${2 * Math.PI * 25}`}
                    transform="rotate(-90 30 30)"
                    className="progress-ring"
                  />
                </svg>
                <div className="ring-percentage" style={{ color: skill.color }}>
                  {skill.level}%
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Légende des niveaux */}
        <div className="skills-legend">
          <div className="legend-item">
            <div className="legend-color beginner"></div>
            <span>Débutant (0-40%)</span>
          </div>
          <div className="legend-item">
            <div className="legend-color intermediate"></div>
            <span>Intermédiaire (40-70%)</span>
          </div>
          <div className="legend-item">
            <div className="legend-color advanced"></div>
            <span>Avancé (70-90%)</span>
          </div>
          <div className="legend-item">
            <div className="legend-color expert"></div>
            <span>Expert (90-100%)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;