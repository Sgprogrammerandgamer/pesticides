export default function CallFloat({ business }) {
  return (
    <a
      href={`tel:+${business.phoneRaw}`}
      className="call-float"
      aria-label={`Call ${business.phoneDisplay}`}
    >
      Call Us
    </a>
  );
}