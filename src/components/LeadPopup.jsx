import { useState } from 'react';

export default function LeadPopup({ business, isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
  });

  const [status, setStatus] = useState({
    type: '',
    message: '',
  });

  if (!isOpen) return null;

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
  };

  return (
    <div className="lead-modal-overlay" onClick={onClose}>
      <div
        className="lead-modal simple-lead-modal compact-lead-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="lead-modal-close"
          onClick={onClose}
          aria-label="Close popup"
        >
          ×
        </button>

        <div className="simple-lead-modal-body compact-lead-body">
          <form className="lead-form simple-lead-form compact-lead-form" onSubmit={handleSubmit}>
            {status.message && (
              <p className={status.type === 'success' ? 'form-success' : 'form-error'}>
                {status.message}
              </p>
            )}

            <div className="field">
              <label htmlFor="popup-name">Full Name</label>
              <input
                id="popup-name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="popup-phone">Phone Number</label>
              <input
                id="popup-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="popup-service">Service Needed</label>
              <select
                id="popup-service"
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

            <div className="lead-form-actions compact-lead-actions">
              <button type="submit" className="btn btn-primary">
                Get Quote
              </button>
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}