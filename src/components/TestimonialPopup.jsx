import { useEffect, useState } from 'react';

const testimonials = [
  {
    name: 'Amit Sharma',
    text: 'Fast service, professional team, and very clear communication.',
  },
  {
    name: 'Priya Nair',
    text: 'They handled the issue quickly and the follow-up was excellent.',
  },
  {
    name: 'Rohit Verma',
    text: 'Great results and very reliable support from start to finish.',
  },
];

export default function TestimonialPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(testimonials[0]);

  useEffect(() => {
    const showAfter = Math.floor(Math.random() * 12000) + 4000;

    const openTimer = setTimeout(() => {
      const randomItem = testimonials[Math.floor(Math.random() * testimonials.length)];
      setCurrentTestimonial(randomItem);
      setIsVisible(true);
    }, showAfter);

    return () => clearTimeout(openTimer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const closeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(closeTimer);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="testimonial-popup-overlay" onClick={() => setIsVisible(false)}>
      <div
        className="testimonial-popup"
        role="dialog"
        aria-modal="true"
        aria-label="Customer testimonial"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="testimonial-popup-close"
          onClick={() => setIsVisible(false)}
          aria-label="Close testimonial popup"
        >
          ×
        </button>

        <p className="testimonial-popup-eyebrow">What customers say</p>
        <h3 className="testimonial-popup-title">Trusted by happy clients</h3>

        <blockquote className="testimonial-popup-quote">
          “{currentTestimonial.text}”
        </blockquote>

        <p className="testimonial-popup-name">— {currentTestimonial.name}</p>
      </div>
    </div>
  );
}