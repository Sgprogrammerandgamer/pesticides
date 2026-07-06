export default function Header({ business, openPopup, theme, setTheme }) {
  const whatsappLink = `https://wa.me/${business.whatsappNumber}?text=Hello%20I%20need%20pest%20control%20service`;

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="brand-mark">
          <div className="brand-icon">HP</div>
          <div className="brand-copy">
            <h2>{business.name}</h2>
            <p>{business.tagline}</p>
          </div>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#benefits">Benefits</a>
          <a href="#industries">Industries</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? 'Dark' : 'Light'}
          </button>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary header-btn"
          >
            WhatsApp
          </a>

          <button type="button" className="btn btn-primary ripple-button header-btn" onClick={openPopup}>
            Free Quote
          </button>
        </div>
      </div>
    </header>
  );
}