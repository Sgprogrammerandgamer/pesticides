export default function Industries({ business }) {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Industries We Serve</p>
          <h2>Support for residential, commercial, and industrial properties</h2>
          <p className="section-copy">
            We serve a broad range of spaces including homes, offices, hospitality, healthcare, education, and storage environments.
          </p>
        </div>

        <div className="industry-grid">
          {business.industries.map((item) => (
            <div className="card chip-card" key={item}>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}