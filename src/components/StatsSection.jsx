export default function StatsSection({ business }) {
  return (
    <section className="section alt-section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Trust Signals</p>
          <h2>Numbers that reinforce service credibility</h2>
          <p className="section-copy">
            The attached references repeatedly emphasize experience, volume, client satisfaction, and quality standards as primary trust builders.
          </p>
        </div>

        <div className="stats-grid">
          {business.stats.map((item) => (
            <div className="card stat-card" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}