export default function Header({ business, openPopup }) {
  return (
    <header className="site-header header">
      <div className="container header-inner">
        <a href="#top" className="brand-mark" aria-label={`${business.name} home`}>
          <img
            src={business.logo}
            alt={`${business.name} logo`}
            className="brand-logo"
          />

          <div className="brand-copy">
            <h2>{business.name}</h2>
          </div>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#why-us">Why Us</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="header-actions">
          <button type="button" className="btn btn-secondary header-btn" onClick={openPopup}>
            Request Quote
          </button>
        </div>
      </div>
    </header>
  );
}