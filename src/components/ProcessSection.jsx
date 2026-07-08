export default function ProcessSection({ business }) {
  return (
    <section className="section" id="process">
      <div className="container">
        <div className="section-heading left-aligned">
          <span className="eyebrow">Our Process</span>
          <h2>How our service works</h2>
          <p className="compact-copy">
            We follow a practical step-by-step process to inspect, treat, and manage pest problems effectively.
          </p>
        </div>

        <div className="process-grid">
          {business.process.map((step, index) => {
            const item = typeof step === 'string' ? { title: step } : step;

            return (
              <article className="process-card text-only-process-card" key={item.title}>
                <div className="process-card-content text-only-process-content">
                  <span className="step-badge">Step {index + 1}</span>
                  <h3>{item.title}</h3>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}