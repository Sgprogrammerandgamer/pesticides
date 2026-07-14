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
              <div className="service-image-wrap">
                <img
                  src={service.image}
                  alt={service.alt || service.title}
                  className="service-image"
                  loading="lazy"
                />
              </div>

              <div className="service-copy">
                <h3>{service.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}