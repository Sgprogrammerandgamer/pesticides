import { useState } from 'react';

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

export default function HeroQuoteForm({ business }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    place: '',
    message: '',
  });

  const [status, setStatus] = useState({
    type: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: '', message: '' });
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          service: formData.service,
          place: formData.place,
          message: formData.message,
          source: 'website-hero-form',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit form.');
      }

      setStatus({
        type: 'success',
        message: data.message || 'Your request has been submitted successfully.',
      });

      setFormData({
        name: '',
        phone: '',
        service: '',
        place: '',
        message: '',
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Something went wrong.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section hero-quote-section" id="quote-form">
      <div className="container">
        <div className="hero-quote-card">
          <div className="section-heading left-aligned">
            <span className="eyebrow">Free Quote</span>
            <h2>Get a quick quote for your pest control requirement</h2>
          </div>

          <div className="hero-message-heading">
            <h3>Send Us A Message!</h3>
          </div>

          <form className="lead-form hero-inline-form" onSubmit={handleSubmit}>
            {status.message && (
              <p className={status.type === 'success' ? 'form-success' : 'form-error'}>
                {status.message}
              </p>
            )}

            <div className="lead-grid hero-quote-grid">
              <div className="field">
                <input
                  id="hero-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  aria-label="Full Name"
                  required
                />
              </div>

              <div className="field">
                <input
                  id="hero-phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  aria-label="Phone Number"
                  required
                />
              </div>

              <div className="field">
                <select
                  id="hero-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  aria-label="Service Needed"
                  required
                >
                  <option value="">Select Service</option>
                  {business?.services?.map((service) => (
                    <option key={service.title} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="field">
                <input
                  id="hero-place"
                  name="place"
                  type="text"
                  value={formData.place}
                  onChange={handleChange}
                  placeholder="Place"
                  aria-label="Place"
                />
              </div>

              <div className="field field-full">
                <textarea
                  id="hero-message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  aria-label="Message"
                />
              </div>
            </div>

            <div className="lead-form-actions hero-quote-actions">
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Get Free Quote'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}