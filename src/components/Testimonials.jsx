import { useState } from 'react';

export default function Testimonials({ business }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = business.testimonials || [];
  const activeItem = testimonials[activeIndex];

  const goPrev = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const goNext = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  if (!testimonials.length) return null;

  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-heading left-aligned compact-heading">
          <span className="eyebrow">Testimonials</span>
          <h2>What customers say after treatment</h2>
        </div>

        <div className="testimonials-slider">
          <button
            type="button"
            className="testimonial-nav testimonial-prev"
            onClick={goPrev}
            aria-label="Previous testimonial"
          >
            ‹
          </button>

          <article className="testimonial-card testimonial-slide">
            <div className="testimonial-user">
              <img
                src={activeItem.image}
                alt={activeItem.name}
                loading="lazy"
                className="testimonial-avatar"
              />
              <div>
                <h3>{activeItem.name}</h3>
                <p>{activeItem.role}</p>
              </div>
            </div>

            <p className="testimonial-text">“{activeItem.text}”</p>
          </article>

          <button
            type="button"
            className="testimonial-nav testimonial-next"
            onClick={goNext}
            aria-label="Next testimonial"
          >
            ›
          </button>
        </div>

        <div className="testimonial-dots" aria-label="Testimonial navigation">
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              type="button"
              className={`testimonial-dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}