export default function Footer({ business }) {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo-row">
            <img
              src={business.logo}
              alt={`${business.name} logo`}
              className="brand-logo"
            />
            <div className="footer-company-name">
              <h3>{business.name}</h3>
            </div>
          </div>

          <p className="footer-about">
            Safe, professional, and reliable pest control services for homes,
            offices, shops, and commercial properties.
          </p>
        </div>

        <div className="footer-links-block">
          <h4>Quick links</h4>
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#benefits">Benefits</a>
            <a href="#clients">Clients</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <a href={`tel:${business.phoneRaw}`}>{business.phoneDisplay}</a>
          <a href={`mailto:${business.email}`}>{business.email}</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {business.name}. All Rights Reserved.</p>
      </div>
    </footer>
  );
}