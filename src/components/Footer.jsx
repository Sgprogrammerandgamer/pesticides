export default function Footer({ business }) {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>{business.name}</h3>
          <p>
            Hygiene Pest Control Services offers professional termite treatment and pest control solutions in India using safe chemicals, an expert team, and guaranteed protection.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>

        <div>
          <h4>Core Services</h4>
          {business.services.map((service) => (
            <p key={service.title}>{service.title}</p>
          ))}
        </div>

        <div>
          <h4>Contact</h4>
          <p>{business.phoneDisplay}</p>
          <p>{business.location}</p>
          <p>{business.email}</p>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>{business.copyright}</p>
      </div>
    </footer>
  );
}