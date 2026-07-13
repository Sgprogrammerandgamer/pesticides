export default function ClientSection({ business }) {
  return (
    <section className="section client-section" id="clients">
      <div className="container">
        <div className="section-heading left-aligned">
          <span className="eyebrow">Clients</span>
          <h2>Trusted by residential and commercial clients</h2>
        </div>

        <div className="clients-grid">
          {business.clients.map((client) => (
            <article className="client-card" key={client}>
              <span>{client}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}