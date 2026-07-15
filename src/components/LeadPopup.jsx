import { useState } from 'react';

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'https://pesticides-backend-3efh.onrender.com';

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

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

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
          source: 'website-popup',
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
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Get Quote'}
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
                disabled={isSubmitting}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}