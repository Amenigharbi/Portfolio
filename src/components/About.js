import './About.css';
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
      

          <div className="about-grid">
            <div className="info-card education-card">
              <div className="card-header">
                <div className="card-icon">🎓</div>
                <h4 className="card-title">Éducation</h4>
              </div>
              <div className="card-content-horizontal">
                <div className="card-main-info">
                  <h5 className="card-subtitle">Ingénieur en Génie Logiciel</h5>
                  <p className="card-description">
                    Diplômée avec mention bien, spécialisée en développement 
                    d'applications modernes et architectures cloud.
                  </p>
                </div>
                <div className="card-additional-info">
                  <div className="info-item">
                    <span className="info-label">Année</span>
                    <span className="info-value">2025</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">École</span>
                    <span className="info-value">Issat Sousse</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Mention</span>
                    <span className="info-value">Bien</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="info-card location-card">
              <div className="card-header">
                <div className="card-icon">📍</div>
                <h4 className="card-title">Localisation</h4>
              </div>
              <div className="card-content-horizontal">
                <div className="card-main-info">
                  <h5 className="card-subtitle">Sousse, Tunisie</h5>
                  <p className="card-description">
                    Ouverte aux opportunités en remote, hybride et sur site. 
                    Mobilité nationale et internationale.
                  </p>
                </div>
                <div className="card-additional-info">
                  <div className="info-item">
                    <span className="info-label">Pays</span>
                    <span className="info-value">Tunisie</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Ville</span>
                    <span className="info-value">Sousse</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Remote</span>
                    <span className="info-value">Oui</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="info-card availability-card">
              <div className="card-header">
                <div className="card-icon">✅</div>
                <h4 className="card-title">Disponibilité</h4>
              </div>
              <div className="card-content-horizontal">
                <div className="card-main-info">
                  <h5 className="card-subtitle">Ouverte aux opportunités</h5>
                  <p className="card-description">
                    Recherche active de nouveaux défis et projets 
                    innovants dans le domaine du développement full-stack.
                  </p>
                </div>
                <div className="card-additional-info">
                  <div className="info-item">
                    <span className="info-label">Statut</span>
                    <span className="info-value">Disponible</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Type</span>
                    <span className="info-value">CDI/Freelance</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Début</span>
                    <span className="info-value">Immédiat</span>
                  </div>
                </div>
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
                  et meilleures pratiques pour des solutions modernes.
                </p>
              </div>
              <div className="value-item">
                <div className="value-icon">⚡</div>
                <h4 className="value-name">Performance</h4>
                <p className="value-description">
                  Code optimisé et applications rapides pour une 
                  expérience utilisateur exceptionnelle et fluide.
                </p>
              </div>
              <div className="value-item">
                <div className="value-icon">🔒</div>
                <h4 className="value-name">Qualité</h4>
                <p className="value-description">
                  Respect des standards et bonnes pratiques pour 
                  un code maintenable, robuste et sécurisé.
                </p>
              </div>
              <div className="value-item">
                <div className="value-icon">🤝</div>
                <h4 className="value-name">Collaboration</h4>
                <p className="value-description">
                  Travail d'équipe et communication efficace pour 
                  atteindre les objectifs communs avec succès.
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