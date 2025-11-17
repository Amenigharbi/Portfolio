import './Footer.css';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <p className="copyright">
              © {currentYear} Ameni Gharbi
            </p>
            <p className="tagline">
              Développeuse passionnée • Créative • Innovante
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Développé avec ❤️ en Tunisie</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;