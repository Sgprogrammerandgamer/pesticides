export default function Contact({ business, openPopup }) {
  const whatsappLink = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    'Hello, I want a free pest control quote.'
  )}`;

  return (
    <section className="section" id="contact">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">Contact Us</p>
          <h2>Book pest control service or request a callback today</h2>
          <p className="section-copy">
            Reach our team by call, WhatsApp, or website enquiry to discuss home, office, or commercial pest control requirements.
          </p>
        </div>

        <div className="card contact-card">
          <p><strong>Phone:</strong> {business.phoneDisplay}</p>
          <p><strong>WhatsApp:</strong> {business.phoneDisplay}</p>
          <p><strong>Address:</strong> {business.location}</p>
          <p><strong>Service Area:</strong> {business.serviceArea}</p>

          <div className="stack-actions">
            <a className="btn btn-primary full-width" href={`tel:${business.phoneRaw}`}>
              Call Now
            </a>
            <a className="btn btn-outline full-width" href={whatsappLink} target="_blank" rel="noopener noreferrer">
              WhatsApp Now
            </a>
            <button className="btn btn-secondary full-width" type="button" onClick={openPopup}>
              Open Quote Form
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}