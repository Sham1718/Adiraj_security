import { services } from '../data/siteContent'

function ServicesSection() {
  return (
    <section className="section services" id="services">
      <div className="section-heading reveal">
        <p className="eyebrow">Service portfolio</p>
        <h2>One vendor for security, support staff, and site operations.</h2>
        <p>
          The quotation PDF positions the company as a combined security and manpower provider rather than a
          guard-only agency, so the site now reflects that broader offering.
        </p>
      </div>
      <div className="service-grid">
        {services.map((service, index) => (
          <article className="service-card reveal" style={{ '--delay': `${index * 90}ms` }} key={service.title}>
            <span className="card-number">0{index + 1}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
