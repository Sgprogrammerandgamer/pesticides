export default function ProcessSection({ business }) {
  return (
    <section className="section" id="process">
      <div className="container">
        <div className="section-heading left-aligned">
          <span className="eyebrow">Our Process</span>
          <h2>How our service works</h2>
          <p className="compact-copy">
            We follow a practical step-by-step pest control process for accurate treatment and better long-term results.
          </p>
        </div>

        <div className="process-grid">
          {business.process.map((step, index) => (
            <article className="process-card compact-process-card" key={step.title}>
              <div className="compact-process-image-wrap">
                <img
                  src={step.image}
                  alt={step.alt || step.title}
                  className="process-image"
                />
              </div>

              <div className="compact-process-content">
                <span className="step-badge">Step {index + 1}</span>
                <h3>{step.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}