export default function About({ business }) {
  return (
    <section className="section about-section" id="about">
      <div className="container two-col-section">
        <div>
          <p className="eyebrow">About Us</p>
          <h2>Trusted pest control with safe methods and systematic inspections</h2>
        </div>
        <div>
          <p className="section-copy">{business.about}</p>
          <p className="section-copy">
            We protect homes, businesses, and industrial properties with inspection-first planning, customized treatment selection, and practical follow-up support.
          </p>
        </div>
      </div>
    </section>
  );
}