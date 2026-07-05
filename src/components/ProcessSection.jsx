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
        'https://media.discordapp.net/attachments/1213571833333424128/1523325044049051779/images9.jpg?ex=6a4bb280&is=6a4a6100&hm=3274a21318ad94d109be92666ab38d65c0ab4ff2435cf2fc2982d71787f79180&=&format=webp&width=1044&height=766',
      alt: 'Technician checking pest entry points during assessment'
    },
    {
      title: 'Customized Plan',
      image:
        'https://media.discordapp.net/attachments/1213571833333424128/1523325334186102864/wfwe.jpg?ex=6a4bb2c5&is=6a4a6145&hm=274485d2ac5ca2bba229ef054b43a9c4d13bf3ecc93e43845214deb3b88fc2dc&=&format=webp&width=1358&height=904',
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
        'https://media.discordapp.net/attachments/1213571833333424128/1523325726156263594/images12.jpg?ex=6a4bb323&is=6a4a61a3&hm=fbfafa7ee13db0e4f81c2a9953da7b22126be48e182a80c9cbd67ed466bccdcc&=&format=webp&width=894&height=894',
      alt: 'Professional pest treatment service in a home interior'
    },
    {
      title: 'Follow-up',
      image:
        'https://media.discordapp.net/attachments/1213571833333424128/1523325947678294197/rvger.jpg?ex=6a4bb357&is=6a4a61d7&hm=09595fa26e6762f988c9698767c7cb9f565826a5989ea716b257df24a154cabf&=&format=webp&width=1094&height=730',
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