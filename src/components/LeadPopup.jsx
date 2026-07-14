import { useState } from 'react';

export default function LeadPopup({ business, isOpen, onClose }) {
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

    const payload = {
      name: formData.name,
      phone: formData.phone,
      service: formData.service,
      place: formData.place,
      message: formData.message,
    };

    console.log(payload);

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
        role="dialog"
        aria-modal="true"
        aria-label="Get quote form"
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
          <form
            className="lead-form simple-lead-form compact-lead-form"
            onSubmit={handleSubmit}
          >
            {status.message && (
              <p className={status.type === 'success' ? 'form-success' : 'form-error'}>
                {status.message}
              </p>
            )}

            <div className="field">
              <input
                id="popup-name"
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
                id="popup-phone"
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
                id="popup-service"
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
                id="popup-place"
                name="place"
                type="text"
                value={formData.place}
                onChange={handleChange}
                placeholder="Place"
                aria-label="Place"
              />
            </div>

            <div className="field">
              <textarea
                id="popup-message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                aria-label="Message"
              />
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