import { useEffect, useRef, useState } from 'react';

export default function LeadPopup({ business, isOpen, onClose }) {
  const dialogRef = useRef(null);
  const firstInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
    consent: true
  });

  const [status, setStatus] = useState({
    loading: false,
    success: '',
    error: ''
  });

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);

    const timer = setTimeout(() => {
      firstInputRef.current?.focus();
    }, 30);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, success: '', error: '' });

    try {
      const response = await fetch(`${business.apiBaseUrl}/api/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          source: 'website-popup',
          businessName: business.name
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setStatus({
        loading: false,
        success: 'Your request has been submitted successfully.',
        error: ''
      });

      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: '',
        consent: true
      });

      setTimeout(() => {
        onClose();
      }, 1400);
    } catch (error) {
      setStatus({
        loading: false,
        success: '',
        error: error.message || 'Failed to submit form'
      });
    }
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="lead-modal-overlay" onClick={handleOverlayClick}>
      <div
        ref={dialogRef}
        className="lead-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-popup-title"
      >
        <button
          type="button"
          className="lead-modal-close"
          onClick={onClose}
          aria-label="Close popup"
        >
          ×
        </button>

        <div className="lead-modal-content">
          <div className="lead-modal-intro">
            <span className="eyebrow">Quick enquiry</span>
            <h2 id="lead-popup-title">Book your pest control consultation</h2>
            <p>
              Share your details and our team will contact you for inspection,
              pricing, and treatment guidance.
            </p>

            <div className="lead-modal-points">
              <span>Fast response</span>
              <span>Safe service methods</span>
              <span>Residential & commercial</span>
            </div>
          </div>

          <form className="lead-form" onSubmit={handleSubmit}>
            <div className="lead-grid">
              <div className="field">
                <label htmlFor="lead-name">Full name</label>
                <input
                  ref={firstInputRef}
                  id="lead-name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="lead-phone">Phone number</label>
                <input
                  id="lead-phone"
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="lead-email">Email address</label>
                <input
                  id="lead-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="field">
                <label htmlFor="lead-service">Service needed</label>
                <select
                  id="lead-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="Termite Control">Termite Control</option>
                  <option value="Cockroach Control">Cockroach Control</option>
                  <option value="Rodent Control">Rodent Control</option>
                  <option value="Mosquito Control">Mosquito Control</option>
                  <option value="Bed Bug Control">Bed Bug Control</option>
                  <option value="General Inspection">General Inspection</option>
                </select>
              </div>
            </div>

            <div className="field">
              <label htmlFor="lead-message">Your message</label>
              <textarea
                id="lead-message"
                name="message"
                rows="4"
                placeholder="Tell us about the issue or your location"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <label className="consent-row">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
              />
              <span>
                I agree to be contacted regarding my enquiry submitted on this website.
              </span>
            </label>

            {status.success ? <p className="form-success">{status.success}</p> : null}
            {status.error ? <p className="form-error">{status.error}</p> : null}

            <div className="lead-form-actions">
              <button type="submit" className="btn btn-primary ripple-button" disabled={status.loading}>
                {status.loading ? 'Submitting...' : 'Request Free Quote'}
              </button>

              {/* <a
                href={`https://wa.me/${business.whatsappNumber}?text=Hello%20I%20need%20pest%20control%20support`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                WhatsApp Instead
              </a> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}