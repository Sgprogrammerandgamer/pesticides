import { useEffect, useState } from 'react';

const initialState = {
  name: '',
  phone: '',
  email: '',
  service: 'Termite Control Treatment',
  message: '',
  consent: false
};

export default function LeadPopup({ business, isOpen, onClose }) {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setForm(initialState);
      setStatus({ type: '', message: '' });
      setLoading(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!form.consent) {
    setStatus({
      type: 'error',
      message: 'Please confirm consent before submitting the form.'
    });
    return;
  }

  try {
    setLoading(true);
    setStatus({ type: '', message: '' });

    const API_URL = import.meta.env.VITE_API_URL;
    console.log('API URL:', import.meta.env.VITE_API_URL);
    const response = await fetch(`${API_URL}api/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        source: 'website-popup',
        consentText: 'I agree to be contacted regarding pest control services.'
      })
    });

    const contentType = response.headers.get('content-type');

    if (!contentType || !contentType.includes('application/json')) {
      const text = await response.text();
      throw new Error(`Expected JSON but got: ${text.slice(0, 120)}`);
    }

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to submit form');
    }

    setStatus({
      type: 'success',
      message: 'Thank you. Your request has been submitted successfully.'
    });
    setForm(initialState);
  } catch (error) {
    setStatus({
      type: 'error',
      message: error.message || 'Something went wrong. Please try again.'
    });
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="popup-overlay" role="dialog" aria-modal="true" aria-label="Get free pest control quote">
      <div className="popup-card">
        <button className="popup-close" type="button" onClick={onClose} aria-label="Close form">
          ×
        </button>

        <p className="eyebrow">Get Free Pest Control Quote</p>
        <h3>Tell us about your pest issue</h3>
        <p className="section-copy">
          Fill this form and our team will contact you with inspection and treatment guidance.
        </p>

        <form className="lead-form" onSubmit={handleSubmit}>
          <label>
            Full name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </label>

          <label>
            Phone number
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </label>

          <label>
            Email address
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </label>

          <label>
            Select service
            <select name="service" value={form.service} onChange={handleChange} required>
              <option>Termite Control Treatment</option>
              <option>Pre-Construction Termite Control Treatment</option>
              <option>Cockroach Control Treatment</option>
              <option>Rodent Control Treatment</option>
              <option>Mosquito Control Treatment</option>
              <option>Bedbug Control Treatment</option>
            </select>
          </label>

          <label>
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              placeholder="Tell us about the problem or property type"
            />
          </label>

          <label className="checkbox-row">
            <input
              type="checkbox"
              name="consent"
              checked={form.consent}
              onChange={handleChange}
            />
            <span>I agree to be contacted regarding pest control services.</span>
          </label>

          {status.message ? (
            <p className={`form-status ${status.type}`}>{status.message}</p>
          ) : null}

          <button className="btn btn-primary full-width" type="submit" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit Request'}
          </button>
        </form>
      </div>
    </div>
  );
}