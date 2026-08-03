import { useEffect } from 'react';

export default function Services({ business, openPopup }) {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal-observe');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const services = business?.services || [];

  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-heading left-aligned">
          <span className="eyebrow">Services</span>
          <h2>Pest control services for homes and businesses</h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article
              className={`service-card reveal-observe delay-${index % 4}`}
              key={service.title || index}
            >
              {/* Title ABOVE the image */}
              <h3 className="service-title">{service.title}</h3>

              {/* Image */}
              <div
                className="service-image-wrap"
                style={{ backgroundImage: `url(${service.image})` }}
                role="img"
                aria-label={service.alt || service.title}
              />

              {/* Buttons in place of the old title under the image */}
              <div className="service-actions">
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="service-action-btn service-action-call"
                >
                  Call
                </a>
                <a
                  href={`https://wa.me/${business.whatsappNumber}?text=Hello%20I%20need%20pest%20control%20support%20for%20${encodeURIComponent(
                    service.title || ''
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="service-action-btn service-action-whatsapp"
                >
                  WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}