export default function FAQ({ business }) {
  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-layout">
        <div className="section-heading left-aligned">
          <span className="eyebrow">FAQ</span>
          <h2>Frequently asked questions</h2>
        </div>
        <div className="faq-list single-line-faq">
          {business.faqs.map((item) => (
            <details key={item.q} className="faq-item-inline">
              <summary>
                <span className="faq-symbol">+</span>
                <span className="faq-question">{item.q}</span>
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}