import { useState } from 'react';

export default function HeroQuoteForm({ business }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
  });

  const [status, setStatus] = useState({
    type: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setStatus({
      type: 'success',
      message: 'Your request has been submitted successfully.',
    });

    setFormData({
      name: '',
      phone: '',
      service: '',
    });
  };

  return (
    <section className="section hero-quote-section" id="quote-form">
      <div className="container">
        <div className="hero-quote-card">
          <div className="section-heading left-aligned">
            <span className="eyebrow">Free Quote</span>
            <h2>Get a quick quote for your pest control requirement</h2>
          </div>

          <form className="lead-form hero-inline-form" onSubmit={handleSubmit}>
            {status.message && (
              <p className={status.type === 'success' ? 'form-success' : 'form-error'}>
                {status.message}
              </p>
            )}

            <div className="lead-grid hero-quote-grid">
              <div className="field">
                <label htmlFor="hero-name">Full Name</label>
                <input
                  id="hero-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="hero-phone">Phone Number</label>
                <input
                  id="hero-phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="hero-service">Service Needed</label>
                <select
                  id="hero-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  {business.services.map((service) => (
                    <option key={service.title} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="lead-form-actions hero-quote-actions">
              <button type="submit" className="btn btn-primary">
                Get Free Quote
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}