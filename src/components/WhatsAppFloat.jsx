export default function WhatsAppFloat({ business }) {
  const whatsappLink = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    'Hello, I visited your website and need pest control help.'
  )}`;

  return (
    <a
      className="whatsapp-float"
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      WhatsApp
    </a>
  );
}