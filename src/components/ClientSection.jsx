import { useEffect } from 'react';

export default function ClientSection({ business }) {
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

  const clients = business?.clients || [];

  return (
    <section className="section client-section" id="clients">
      <div className="container">
        <div className="section-heading left-aligned">
          <span className="eyebrow">Clients</span>
          <h2>Trusted by homes, businesses, and institutions</h2>
        </div>

        <div className="clients-grid">
  {clients.map((client, index) => (
    <article
      className={`client-card reveal-observe delay-${index % 4}`}
      key={index}
    >
      <div className="client-image-wrap">
        <img
          src={client.image}
          alt={client.alt}
          loading="lazy"
          className="client-image"
        />
      </div>
    </article>
  ))}
</div>
      </div>
    </section>
  );
}