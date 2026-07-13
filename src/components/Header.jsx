import { useState } from 'react';

export default function Header({ business, openPopup }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header header">
      <div className="container header-inner header-inner-compact">
        <a
          href="#top"
          className="brand-mark"
          aria-label={`${business.name} home`}
          onClick={closeMenu}
        >
          <img
            src={business.logo}
            alt={`${business.name} logo`}
            className="brand-logo"
          />

          <div className="brand-copy">
            <h2>{business.name}</h2>
          </div>
        </a>

        <div className="header-actions">
          <button
            type="button"
            className="menu-toggle"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>

          <button
            type="button"
            className="btn btn-secondary header-btn"
            onClick={openPopup}
          >
            Request Quote
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="header-menu-panel">
          <nav className="header-menu-links" aria-label="Main navigation">
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#benefits" onClick={closeMenu}>Benefits</a>
            <a href="#clients" onClick={closeMenu}>Clients</a>
            <a href="#faq" onClick={closeMenu}>FAQ</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}