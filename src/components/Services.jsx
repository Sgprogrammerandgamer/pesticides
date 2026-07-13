import { useEffect } from 'react';

export default function Services({ business, openPopup }) {
  useEffect(() => {
    const cards = document.querySelectorAll('.ripple-observe');

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

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-heading left-aligned">
          <span className="eyebrow">Services</span>
          <h2>Pest control services for homes and businesses</h2>
        </div>

        <div className="services-grid">
          {business.services.map((service, index) => (
            <article
              className={`service-card ripple-card ripple-observe delay-${index % 3}`}
              key={service.title}
            >
              <div className="service-image-wrap">
                <img src={service.image} alt={service.alt} loading="lazy" />
              </div>

              <div className="service-copy">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <button
                  type="button"
                  className="text-link"
                  onClick={openPopup}
                >
                  Get quote
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}