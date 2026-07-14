import { useEffect } from 'react';

export default function WhyChoose({ business }) {
  useEffect(() => {
    const items = document.querySelectorAll('.why-card');

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

  const benefits = business?.benefits || [];

  return (
    <section className="section why-section" id="benefits">
      <div className="container">
        <div className="section-heading left-aligned">
          <span className="eyebrow">Why Choose Us</span>
          <h2>Why customers trust Expert Pesticides</h2>
          <p className="compact-copy">
            Safe treatment methods, trained technicians, and reliable pest control support.
          </p>
        </div>

        <div className="why-grid">
          {benefits.map((benefit, index) => (
            <article
              className={`why-card reveal-observe delay-${index % 3}`}
              key={benefit}
            >
              <span className="why-card-icon">✓</span>
              <p>{benefit}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}