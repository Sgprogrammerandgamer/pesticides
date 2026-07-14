export default function CallFloat({ business }) {
  return (
    <a
      href={`tel:+${business.phoneRaw}`}
      className="float-action float-call"
      aria-label="Call now" >
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.85 21 3 13.15 3 4a1 1 0 0 1 1-1h3.49a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.19 2.2Z"
      fill="currentColor"
    />
  </svg>
</a>

    
  );

}