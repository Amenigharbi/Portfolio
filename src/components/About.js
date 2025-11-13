import React from 'react';

const About = () => {
  return (
    <section id="apropos" className="about">
      <div className="container">
        <h2 className="section-title">À propos de moi</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Ingénieure en génie logiciel passionnée avec une expertise 
              dans le développement d'applications web et mobiles. 
              Je suis spécialisée dans les technologies modernes comme 
              React, Node.js, Python et les bases de données.
            </p>
            <p>
              Mon objectif est de créer des solutions logicielles 
              efficaces qui répondent aux besoins des utilisateurs 
              tout en maintenant des standards de qualité élevés.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <strong>Diplôme :</strong> Ingénieur en Génie Logiciel
              </div>
              <div className="detail-item">
                <strong>Email :</strong> ameni.gharbi@email.com
              </div>
              <div className="detail-item">
                <strong>Localisation :</strong> Tunis, Tunisie
              </div>
              <div className="detail-item">
                <strong>Disponibilité :</strong> Ouverte aux nouvelles opportunités
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;