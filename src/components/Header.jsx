import logo from '../assets/logo.png';

export default function Header({ business, openPopup, theme, setTheme }) {
  const whatsappLink = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    'Hello, I need pest control service.'
  )}`;

  return (
    <header className="site-header">
      <div className="container nav-row">
        <a href="#top" className="brand-mark">
          <img src={logo} alt="Hygiene Pest Control Services logo" className="nav-logo" />
          <div>
            <h2>{business.name}</h2>
            <p>{business.tagline}</p>
          </div>
        </a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? 'Dark' : 'Light'}
          </button>

          <a
            className="btn btn-outline"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>

          <button className="btn btn-primary" type="button" onClick={openPopup}>
            Get Quote
          </button>
        </div>
      </div>
    </header>
  );
}