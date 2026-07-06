export default function Testimonials({ business }) {
  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-heading left-aligned">
          <span className="eyebrow">Testimonials</span>
          <h2>What customers say after treatment</h2>
        </div>
        <div className="testimonials-grid">
          {business.testimonials.map((item) => (
            <article key={item.name} className="testimonial-card">
              <div className="testimonial-user">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="testimonial-avatar"
                />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.role}</p>
                </div>
              </div>
              <p className="testimonial-text">“{item.text}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}