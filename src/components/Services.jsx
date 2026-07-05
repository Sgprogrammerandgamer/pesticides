export default function Services({ business = {}, openPopup }) {
  const whatsappNumber = business.whatsappNumber || '918809691313';
  const phoneRaw = business.phoneRaw || '918809691313';
  const services = business.services || [];

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Hello, I need help with pest control services.'
  )}`;

  return (
    <section className="section alt-section" id="services">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Services Offered</p>
          <h2>Professional pest control for homes and businesses</h2>
          <p className="section-copy">
            Our professionals inspect the property, identify the infestation, and apply customized treatment using safe, approved methods.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article key={service.title} className="card service-card">
              <div className="service-image-wrap">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="service-image"
                  loading="lazy"
                  width="800"
                  height="500"
                />
              </div>

              <h3>{service.title}</h3>
              <p>{service.text}</p>

              <div className="card-actions">
                <a className="text-link" href={`tel:${phoneRaw}`}>
                  Call Now
                </a>
                <a
                  className="text-link"
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Now
                </a>
                <button
                  className="text-link button-link"
                  type="button"
                  onClick={openPopup}
                >
                  Get Quote
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}