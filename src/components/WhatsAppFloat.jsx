export default function WhatsAppFloat({ business }) {
  const href = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    'Hello, I want to enquire about pest control services.'
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float left-sticky"
      aria-label="Chat on WhatsApp"
    >
      WhatsApp
    </a>
  );
}