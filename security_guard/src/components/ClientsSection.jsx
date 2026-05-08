import { clients } from '../data/siteContent'
import { clientGalleryImages } from '../data/siteImages'

function ClientsSection() {
  return (
    <section className="section clients-section" id="clients">
      <div className="section-heading reveal">
        <p className="eyebrow">Current and past sites</p>
        <h2>Selected projects and client locations served by the company.</h2>
        <p>
          Shri Adhiraj Enterprises has supported residential projects, commercial properties, and operating sites
          across Pune region. These names reflect the company&apos;s active deployment footprint.
        </p>
      </div>
      <div className="site-gallery reveal">
        {clientGalleryImages.map((image, index) => (
          <figure className={`gallery-card gallery-card-${index + 1}`} key={image.src}>
            <img src={image.src} alt={image.alt} />
          </figure>
        ))}
      </div>
      <div className="clients-grid">
        {clients.map((client, index) => (
          <div className="client-tile reveal" style={{ '--delay': `${index * 50}ms` }} key={client}>
            {client}
          </div>
        ))}
      </div>
    </section>
  )
}

export default ClientsSection
