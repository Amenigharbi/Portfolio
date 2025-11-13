import React from 'react';

const Hero = () => {
  return (
    <section id="accueil" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Ameni Gharbi</h1>
          <h2>Ingénieure en Génie Logiciel</h2>
          <p>
            Passionnée par le développement de solutions innovantes, 
            je crée des applications robustes et évolutives avec les 
            technologies modernes.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => document.getElementById('projets').scrollIntoView({ behavior: 'smooth' })}
            >
              Voir mes projets
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Me contacter
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-placeholder">
            <span>Photo de profil</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;