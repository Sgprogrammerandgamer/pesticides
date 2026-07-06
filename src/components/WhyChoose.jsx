import { useEffect } from 'react';

export default function WhyChoose({ business }) {
  useEffect(() => {
    const cards = document.querySelectorAll('.benefit-card.ripple-observe');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in-view');
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section why-section" id="benefits">
      <div className="container why-layout">
        <div className="section-heading left-aligned compact-copy">
          <span className="eyebrow">Why choose us</span>
          <h2>
            <span className="highlighted-heading">Service benefits</span> built around safety and consistency
          </h2>
          <p>{business.about}</p>
        </div>

        <div className="benefits-grid">
          {business.benefits.map((benefit, index) => (
            <article
              key={benefit}
              className={`benefit-card ripple-card ripple-observe delay-${index % 3}`}
            >
              <span className="benefit-dot" />
              <h3>{benefit}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}