export default function Testimonials({ business }) {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Client Testimonials</p>
          <h2>What Our Customers Say</h2>
          <p className="section-copy">
            The Hygiene reference highlights successful protection of homes and commercial properties, with testimonial themes focused on professionalism, affordability, and warranty-backed satisfaction.
          </p>
        </div>

        <div className="testimonial-grid">
          {business.testimonials.map((item) => (
            <article className="card testimonial-card" key={item.name}>
              <p>“{item.text}”</p>
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}