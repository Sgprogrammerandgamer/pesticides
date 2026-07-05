export default function WhyChoose({ business }) {
  return (
    <section className="section">
      <div className="container two-col-section">
        <div>
          <p className="eyebrow">Why Choose Us</p>
          <h2>Safety-focused service backed by quality and long-term results</h2>
          <p className="section-copy">
            We combine strong service standards from the Hygiene reference with the broader operational strengths described in the Expert content.
          </p>
        </div>

        <div className="split-lists">
          <div className="card compact-card">
            <h3>Core strengths</h3>
            <div className="check-list">
              {business.usp.map((item) => (
                <div className="check-item" key={item}>
                  <span>•</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card compact-card">
            <h3>Service benefits</h3>
            <div className="check-list">
              {business.benefits.map((item) => (
                <div className="check-item" key={item}>
                  <span>•</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}