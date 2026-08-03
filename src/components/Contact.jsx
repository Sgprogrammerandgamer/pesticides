export default function Contact({ business }) {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-layout single-contact-layout">
          <div className="contact-copy full-contact-copy">
            <span className="eyebrow">Contact Us</span>
            <h2>Get In Touch</h2>
            
            <div className="contact-list">
              <div className="contact-row contact-row-highlight">
                <span className="contact-label">Call Now</span>
                <a
                  href={`tel:+${business.phoneRaw}`}
                  className="contact-phone-link"
                >
                  {business.phoneDisplay}
                </a>
              </div>

              <div className="contact-row">
                <span className="contact-label">WhatsApp</span>
                <a
                  href={`https://wa.me/${business.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </div>

              <div className="contact-row">
                <span className="contact-label">Email</span>
                <a href={`mailto:${business.email}`}>
                  {business.email}
                </a>
              </div>

              {/* <div className="contact-row">
                <span className="contact-label">Address</span>
                <p>{business.location}</p>
              </div> */}

              {/* <div className="contact-row">
                <span className="contact-label">Service Area</span>
                <p>{business.serviceArea}</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}