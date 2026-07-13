export default function Hero({ business, openPopup }) {
  return (
    <section className="hero-section" id="top">
      <div className="container hero-layout">
        <div className="hero-copy">
          <h1>
            <span className="highlighted-heading">Safe & Reliable</span> Pest Control
            Services in Noida
          </h1>

          <p className="hero-text">
            {business.description}
          </p>

          <div className="hero-tags">
            <span>Safe treatment</span>
            <span>Fast support</span>
            <span>Residential & commercial</span>
          </div>
        </div>

        <div className="hero-panel quick-enquiry-box">
          <div className="hero-panel-top">
            <span className="mini-badge">Quick Assistance</span>
            <h3>Book inspection or get pricing on WhatsApp.</h3>
          </div>

          <div className="hero-panel-points">
            <div>
              <strong>Home Protection</strong>
              <p>
                Safe pest control solutions for apartments, villas, kitchens, and
                full-home coverage.
              </p>
            </div>

            <div>
              <strong>Business Support</strong>
              <p>
                Professional pest management for offices, shops, restaurants, hotels,
                and warehouses.
              </p>
            </div>

            <div>
              <strong>Fast Response</strong>
              <p>
                Connect quickly through call, WhatsApp, or the free quote form below.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-primary hero-panel-btn"
            onClick={openPopup}
          >
            Request a Quote
          </button>
        </div>
      </div>
    </section>
  );
}