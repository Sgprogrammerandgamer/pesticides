export default function CTASection({ business, openPopup }) {
  return (
    <section className="section cta-section image-overlay-cta" id="quick-assistance">
      <div
        className="cta-overlay-image"
        style={{ backgroundImage: `url(${business.quickAssistBg})` }}
        aria-hidden="true"
      />
      <div className="container cta-card">
        <span className="eyebrow">Quick assistance</span>
        <h2>Need urgent pest control support for home or business?</h2>
        <p>
          Talk to our team for inspection scheduling, treatment planning, and fast quote support
          through phone or WhatsApp.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary ripple-button" onClick={openPopup}>
            Get Free Quote
          </button>
          <a
            className="btn btn-secondary"
            href={`https://wa.me/${business.whatsappNumber}?text=Hello%20I%20need%20pest%20control%20support`}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}