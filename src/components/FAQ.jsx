export default function FAQ({ business }) {
  return (
    <section className="section alt-section" id="faq">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">FAQs</p>
          <h2>Common questions from pest control customers</h2>
          <p className="section-copy">
            These FAQs are based on the topics suggested in the Expert Pesticides content, including safety, process, services, pricing flow, and coverage areas.
          </p>
        </div>

        <div className="faq-list">
          {business.faqs.map((item) => (
            <details className="card faq-item" key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}