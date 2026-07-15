export default function Footer({ business }) {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
  <div className="footer-logo-row-wrap">
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
            <a href="#industries">Industries</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <a href={`tel:${business.phoneRaw}`}>{business.phoneDisplay}</a>
          <a href={`mailto:${business.email}`}>{business.email}</a>
          {/* <p>{business.location}</p> */}
          <p>{business.serviceArea}</p>
        </div>
      </div>

      {/* <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>{business.copyright}</p>
          <a
            href={`https://wa.me/${business.whatsappNumber}?text=Hello%20I%20need%20pest%20control%20support`}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Support
          </a>
        </div>
      </div> */}
    </footer>
  );
}