export default function CTASection({ business, openPopup }) {
  return (
    <section className="section cta-strip">
      <div className="container cta-row">
        <div>
          <p className="eyebrow">Quick Assistance</p>
          <h2>Ab Pest Control ke har solution ka ek Jawab — Hygiene Pest Control Services</h2>
          <p className="section-copy">
            Speak directly with our pest control experts for immediate assistance and a personalized treatment recommendation.
          </p>
        </div>

        <div className="cta-actions">
          <a className="btn btn-primary" href={`tel:${business.phoneRaw}`}>
            {business.phoneDisplay}
          </a>
          <button className="btn btn-secondary" type="button" onClick={openPopup}>
            Get Free Quote
          </button>
        </div>
      </div>
    </section>
  );
}