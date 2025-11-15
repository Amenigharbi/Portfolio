
const About = () => {
  return (
    <section id="apropos" className="about-modern">
      <div className="about-background">
        <div className="floating-elements">
          <div className="floating-element element-1"></div>
          <div className="floating-element element-2"></div>
          <div className="floating-element element-3"></div>
        </div>
      </div>

      <div className="container">
        <div className="about-header">
          <h2 className="section-title-modern">
            À <span className="title-gradient">propos</span> de moi
          </h2>
          <p className="section-subtitle">
            Découvrez mon parcours, mes passions et ma vision
          </p>
        </div>

        <div className="about-content-modern">
          <div className="about-card-main">
            <div className="about-intro">
              <div className="intro-text">
                <h3 className="intro-title">
                  Ingénieure en <span>Génie Logiciel</span> Passionnée
                </h3>
                <div className="intro-description">
                  <p>
                    Avec une expertise solide dans le développement d'applications 
                    <span className="accent"> web et mobiles modernes</span>, je mets 
                    mes compétences au service de projets innovants et ambitieux.
                  </p>
                  <p>
                    Mon objectif est de créer des solutions logicielles 
                    <span className="accent"> efficaces et évolutives</span> qui 
                    répondent parfaitement aux besoins des utilisateurs tout en 
                    maintenant des standards de qualité exceptionnels.
                  </p>
                </div>
              </div>

              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon">💼</div>
                  <div className="stat-content">
                    <span className="stat-number">3+</span>
                    <span className="stat-label">Ans d'expérience</span>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">🚀</div>
                  <div className="stat-content">
                    <span className="stat-number">50+</span>
                    <span className="stat-label">Projets réalisés</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-grid">
            <div className="info-card education-card">
              <div className="card-header">
                <div className="card-icon">🎓</div>
                <h4 className="card-title">Éducation</h4>
              </div>
              <div className="card-content">
                <h5 className="card-subtitle">Ingénieur en Génie Logiciel</h5>
                <p className="card-description">
                  Diplômée avec mention, spécialisée en développement 
                  d'applications modernes et architectures cloud.
                </p>
              </div>
            </div>

            <div className="info-card location-card">
              <div className="card-header">
                <div className="card-icon">📍</div>
                <h4 className="card-title">Localisation</h4>
              </div>
              <div className="card-content">
                <h5 className="card-subtitle">Sousse, Tunisie</h5>
                <p className="card-description">
                  Ouverte aux opportunités en remote et sur site.
                </p>
              </div>
            </div>

            <div className="info-card availability-card">
              <div className="card-header">
                <div className="card-icon">✅</div>
                <h4 className="card-title">Disponibilité</h4>
              </div>
              <div className="card-content">
                <h5 className="card-subtitle">Ouverte aux opportunités</h5>
                <p className="card-description">
                  Recherche active de nouveaux défis et projets 
                  innovants dans le domaine du développement.
                </p>
              </div>
            </div>

          </div>

          <div className="values-section">
            <h3 className="values-title">Mes Valeurs</h3>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">💡</div>
                <h4 className="value-name">Innovation</h4>
                <p className="value-description">
                  Toujours à la recherche des dernières technologies 
                  et meilleures pratiques.
                </p>
              </div>
              <div className="value-item">
                <div className="value-icon">⚡</div>
                <h4 className="value-name">Performance</h4>
                <p className="value-description">
                  Code optimisé et applications rapides pour une 
                  expérience utilisateur exceptionnelle.
                </p>
              </div>
              <div className="value-item">
                <div className="value-icon">🔒</div>
                <h4 className="value-name">Qualité</h4>
                <p className="value-description">
                  Respect des standards et bonnes pratiques pour 
                  un code maintenable et robuste.
                </p>
              </div>
              <div className="value-item">
                <div className="value-icon">🤝</div>
                <h4 className="value-name">Collaboration</h4>
                <p className="value-description">
                  Travail d'équipe et communication efficace pour 
                  atteindre les objectifs communs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;