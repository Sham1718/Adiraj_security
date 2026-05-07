import { clients } from '../data/siteContent'
import { clientGalleryImages } from '../data/siteImages'

function ClientsSection() {
  return (
    <section className="section clients-section" id="clients">
      <div className="section-heading reveal">
        <p className="eyebrow">Current and past sites</p>
        <h2>Selected names listed in the PDF.</h2>
        <p>
          The proposal includes a larger operating list. This section surfaces the strongest recognizable names so
          visitors immediately see active deployment credibility.
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
