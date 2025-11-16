const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <p className="copyright">
              © {currentYear} Ameni Gharbi. Tous droits réservés.
            </p>
            <p className="tagline">
              Développeuse passionnée • Créative • Innovante
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;