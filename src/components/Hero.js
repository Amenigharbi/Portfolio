import '../styles/Hero.css'; 

const Hero = () => {
  const handleProjectClick = () => {
    document.getElementById('projets').scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="accueil" className="hero">
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          
          <h1 className="hero-title">
            <span className="title-main">Ameni</span>
            <span className="title-accent">Gharbi</span>
          </h1>
          
          <h2 className="hero-subtitle">
            <span className="subtitle-text">Ingénieure en Génie Logiciel</span>
            <div className="typing-cursor"></div>
          </h2>
          
          <p className="hero-description">
            Passionnée par le <span className="highlight">développement de solutions innovantes</span>, 
            je crée des applications <span className="highlight">robustes et évolutives</span> avec les 
            technologies modernes. Spécialisée dans la création d'expériences digitales exceptionnelles.
          </p>
          
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={handleProjectClick}
            >
              <span className="btn-icon">🚀</span>
              Voir mes projets
            </button>
            <button 
              className="btn btn-secondary"
              onClick={handleContactClick}
            >
              <span className="btn-icon">💬</span>
              Me contacter
            </button>
          </div>

          {/* Stats rapides */}
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Ans d'expérience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projets réalisés</span>
            </div>
          
          </div>
        </div>
        
        <div className="hero-image">
          <div className="image-container">
            <img 
              src="./ameniii.PNG" 
              alt="Ameni Gharbi - Ingénieure en Génie Logiciel"
              className="profile-image"
            />
            <div className="image-border"></div>
            <div className="floating-badge">
              <span>💻 Disponible</span>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;