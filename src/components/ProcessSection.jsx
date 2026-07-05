export default function ProcessSection({ business }) {
  const processImages = [
    {
      title: 'Inspection',
      image:
        'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/188bda424647b8f2f9ed44c1fa613f91a8af3350.jpg',
      alt: 'Pest control technician inspecting a property exterior'
    },
    {
      title: 'Assessment',
      image:
        'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/188bda424647b8f2f9ed44c1fa613f91a8af3350.jpg',
      alt: 'Technician checking pest entry points during assessment'
    },
    {
      title: 'Customized Plan',
      image:
        'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/188bda424647b8f2f9ed44c1fa613f91a8af3350.jpg',
      alt: 'Pest control planning and inspection process'
    },
    {
      title: 'Treatment',
      image:
        'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/398c3a1cbc5821efbd820ac46b2eda554f08bdc7.jpg',
      alt: 'Technician applying indoor pest treatment'
    },
    {
      title: 'Post-Treatment Guidance',
      image:
        'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/398c3a1cbc5821efbd820ac46b2eda554f08bdc7.jpg',
      alt: 'Professional pest treatment service in a home interior'
    },
    {
      title: 'Follow-up',
      image:
        'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/188bda424647b8f2f9ed44c1fa613f91a8af3350.jpg',
      alt: 'Pest control follow-up inspection by technician'
    }
  ];

  return (
    <section className="section alt-section" id="process">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Our Process</p>
          <h2>Simple, structured, and result-focused service flow</h2>
          <p className="section-copy">
            Our pest control process follows a clear step-by-step model from inspection to follow-up support.
          </p>
        </div>

        <div className="process-grid">
          {business.process.map((step, index) => {
            const stepImage = processImages[index];

            return (
              <article className="card process-card" key={step}>
                <div className="process-image-wrap">
                  <img
                    src={stepImage.image}
                    alt={stepImage.alt}
                    className="process-image"
                    loading="lazy"
                    width="900"
                    height="700"
                  />
                </div>

                <span className="step-badge">0{index + 1}</span>
                <h3>{step}</h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}