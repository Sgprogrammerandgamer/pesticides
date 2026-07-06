export default function Industries({ business }) {
  return (
    <section className="section industries-section" id="industries">
      <div className="container">
        <div className="section-heading left-aligned">
          <span className="eyebrow">Industries we serve</span>
          <h2>Reliable support across every type of property</h2>
        </div>
        <div className="industries-grid">
          {business.industries.map((industry) => (
            <div key={industry} className="industry-pill">
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}