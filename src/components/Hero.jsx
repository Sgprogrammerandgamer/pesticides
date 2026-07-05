export default function Hero({ business, openPopup }) {
  const whatsappLink = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    'Hello, I want to book a pest control inspection.'
  )}`;

  return (
    <section className="hero-section" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{business.tagline}</p>
          <h1>{business.headline}</h1>
          <h2 className="hero-subhead">{business.locationHeadline}</h2>
          <p className="hero-text">{business.description}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href={`tel:${business.phoneRaw}`}>
              Call Now
            </a>
            <a className="btn btn-outline" href={whatsappLink} target="_blank" rel="noopener noreferrer">
              WhatsApp Now
            </a>
            <button className="btn btn-secondary" type="button" onClick={openPopup}>
              Book Inspection
            </button>
          </div>

          <ul className="hero-points" role="list">
            <li>10+ years of experience</li>
            <li>Trained and certified technicians</li>
            <li>Safe, effective, and long-lasting solutions</li>
          </ul>
        </div>

        <aside className="hero-panel">
          <p className="panel-label">Quick enquiry</p>
          <h3>Send Us A Message</h3>
          <p>
            Professional inspections, customized treatment plans, and long-lasting pest management solutions for homes and businesses.
          </p>

          <div className="stat-stack">
            <div>
              <strong>5000+</strong>
              <span>Happy Clients</span>
            </div>
            <div>
              <strong>10K+</strong>
              <span>Orders Processed</span>
            </div>
            <div>
              <strong>4.9</strong>
              <span>Customer Rating</span>
            </div>
          </div>

          <button className="btn btn-primary full-width" type="button" onClick={openPopup}>
            Get Free Pest Control Quote
          </button>
        </aside>
      </div>
    </section>
  );
}