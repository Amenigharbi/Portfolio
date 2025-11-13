import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Développeuse Full Stack Senior',
      company: 'Tech Solutions Inc.',
      period: '2022 - Présent',
      description: [
        'Développement et maintenance d applications web avec React et Node.js',
        'Conception d architectures microservices',
        'Mentorat des développeurs juniors',
        'Optimisation des performances et mise en place de CI/CD'
      ]
    },
    {
      id: 2,
      title: 'Ingénieure Logiciel',
      company: 'Innovation Digital',
      period: '2020 - 2022',
      description: [
        'Développement de features pour plateforme SaaS',
        'Collaboration avec l équipe produit sur la roadmap',
        'Réalisation de tests unitaires et d intégration',
        'Participation aux revues de code'
      ]
    },
    {
      id: 3,
      title: 'Développeuse Frontend',
      company: 'StartUp XYZ',
      period: '2019 - 2020',
      description: [
        'Création d interfaces utilisateur responsive',
        'Intégration avec APIs REST',
        'Optimisation SEO et accessibilité',
        'Collaboration avec designers UX/UI'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Expérience Professionnelle</h2>
        <div className="timeline">
          {experiences.map(exp => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <span className="period">{exp.period}</span>
                <ul>
                  {exp.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;