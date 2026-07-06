export default function Contact({ business, openPopup }) {
  const whatsappLink = `https://wa.me/${business.whatsappNumber}?text=Hello%20I%20need%20pest%20control%20support`;

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-layout">
        <div className="contact-copy">
          <span className="eyebrow">Contact us</span>
          <h2>Talk to our pest control team today</h2>
          <p>
            Reach out for inspections, treatment planning, pricing support, and same-day
            response availability in your service area.
          </p>

          <div className="contact-list">
            <div className="contact-row">
              <span className="contact-label">Phone</span>
              <a href={`tel:${business.phoneRaw}`}>{business.phoneDisplay}</a>
            </div>

            <div className="contact-row">
              <span className="contact-label">Email</span>
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </div>

            <div className="contact-row">
              <span className="contact-label">Address</span>
              <p>{business.location}</p>
            </div>

            <div className="contact-row">
              <span className="contact-label">Service Area</span>
              <p>{business.serviceArea}</p>
            </div>
          </div>
        </div>

        <div className="contact-card-main">
          <h3>Need quick assistance?</h3>
          <p>
            Request a callback, ask for treatment details, or connect instantly through
            WhatsApp for faster support.
          </p>

          <div className="contact-card-actions">
            <button type="button" className="btn btn-primary ripple-button full-btn" onClick={openPopup}>
              Request Free Quote
            </button>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary full-btn"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}