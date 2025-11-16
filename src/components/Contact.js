import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "gharbiameni17@gmail.com",
      link: "mailto:gharbiameni17@gmail.com",
      color: "#EA4335"
    },
    {
      icon: "📱",
      label: "Téléphone",
      value: "+216 27 478 047",
      link: "tel:+21627478047",
      color: "#34A853"
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "Ameni Gharbi",
      link: "https://www.linkedin.com/in/ameni-gharbi123",
      color: "#0077B5"
    },
    {
      icon: "⚡",
      label: "GitHub",
      value: "Amenigharbi",
      link: "https://github.com/Amenigharbi",
      color: "#333333"
    },
    {
      icon: "🔧",
      label: "GitLab",
      value: "gharbiameni17",
      link: "https://gitlab.com/gharbiameni17",
      color: "#FC6D26"
    }
  ];

  const handleContactClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="contact-modern">
      <div className="contact-background">
        <div className="contact-shapes">
          <div className="contact-shape shape-1"></div>
          <div className="contact-shape shape-2"></div>
          <div className="contact-shape shape-3"></div>
          <div className="contact-shape shape-4"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="contact-header">
          <h2 className="section-title-modern">
            <span className="title-gradient">Contact</span>
          </h2>
          <p className="contact-subtitle">
            Prêt à donner vie à vos idées ? Discutons de votre prochain projet
          </p>
        </div>

        <div className="contact-content-modern">
          <div className="contact-main">
            {/* Informations de contact */}
            <div className="contact-info-modern">
              <div className="contact-intro">
                <h3>Travaillons ensemble</h3>
                <p>
                  Je suis toujours ouvert à discuter de nouvelles opportunités, 
                  de collaborations passionnantes ou simplement à échanger sur 
                  les dernières technologies.
                </p>
              </div>

              <div className="contact-details-grid">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index}
                    className="contact-card"
                    onClick={() => handleContactClick(item.link)}
                    style={{ '--accent-color': item.color }}
                  >
                    <div className="contact-card-header">
                      <div className="contact-icon" style={{ backgroundColor: `${item.color}15` }}>
                        <span style={{ color: item.color }}>{item.icon}</span>
                      </div>
                      <div className="contact-meta">
                        <span className="contact-label">{item.label}</span>
                        <span className="contact-value">{item.value}</span>
                      </div>
                    </div>
                    <div className="contact-arrow">
                      <span>→</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Statistiques de contact */}
          <div className="contact-stats">
            <div className="stat-item">
              <div className="stat-number">24h</div>
              <div className="stat-label">Temps de réponse</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Disponible</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">∞</div>
              <div className="stat-label">Passion</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;