import { useEffect, useRef, useState } from 'react';

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

function StarRating() {
  return (
    <div className="testimonial-rating" aria-label="Rated 4.5 out of 5 stars">
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span className="star-half">★</span>
      <span className="rating-text">4.5/5</span>
    </div>
  );
}

export default function TestimonialPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(testimonials[0]);
  const timerRef = useRef(null);

  useEffect(() => {
    const delay = Math.floor(Math.random() * 12000) + 1000;

    timerRef.current = setTimeout(() => {
      const randomItem = testimonials[Math.floor(Math.random() * testimonials.length)];
      setCurrentTestimonial(randomItem);
      setIsVisible(true);
    }, delay);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

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
        <StarRating />
        <blockquote className="testimonial-popup-quote">
          “{currentTestimonial.text}”
        </blockquote>
        <p className="testimonial-popup-name">— {currentTestimonial.name}</p>
      </div>
    </div>
  );
}