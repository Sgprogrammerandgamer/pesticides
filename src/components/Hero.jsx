export default function Hero({ business, openPopup }) {
  const whatsappLink = `https://wa.me/${business.whatsappNumber}?text=Hello%20I%20want%20a%20pest%20control%20quote`;

  return (
    <section className="hero-section" id="top">
      <div className="container hero-layout">
        <div className="hero-copy">
          <span className="eyebrow">Trusted pest control in Delhi NCR</span>
          <h1>{business.locationHeadline}</h1>
          <p className="hero-text">{business.description}</p>

          <div className="hero-actions">
            <button type="button" className="btn btn-primary ripple-button" onClick={openPopup}>
              Get Free Quote
            </button>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="hero-tags">
            <span>Certified technicians</span>
            <span>Safe treatment methods</span>
            <span>Fast service response</span>
          </div>
        </div>

        <div className="hero-panel ripple-card in-view">
          <div className="hero-panel-top">
            <span className="mini-badge">Quick service</span>
            <h3>Book a site inspection with our expert team</h3>
          </div>

          <div className="hero-panel-points">
            <div>
              <strong>10+ Years</strong>
              <p>Experience in residential and commercial pest control</p>
            </div>
            <div>
              <strong>23 Quality Checks</strong>
              <p>Process-led service designed for better outcomes</p>
            </div>
            <div>
              <strong>Multi-Year Warranty</strong>
              <p>Support available for selected treatment plans</p>
            </div>
          </div>

          <button type="button" className="btn btn-primary ripple-button hero-panel-btn" onClick={openPopup}>
            Schedule Inspection
          </button>
        </div>
      </div>
    </section>
  );
}