import { serviceCategories, services } from '../data/siteContent'
import { serviceSectionImages } from '../data/siteImages'

function ServicesSection() {
  return (
    <section className="section services" id="services">
      <div className="section-heading reveal">
        <p className="eyebrow">Service portfolio</p>
        <h2>One vendor for security, support staff, and site operations.</h2>
        <p>
          Shri Adhiraj Enterprises supports residential, commercial, industrial, and event clients with integrated
          security, manpower, and facility support services under one dependable operations team.
        </p>
      </div>
      <div className="service-grid">
        {services.map((service, index) => (
          <article className="service-card reveal" style={{ '--delay': `${index * 90}ms` }} key={service.title}>
            <img
              className="service-photo"
              src={serviceSectionImages[index].src}
              alt={serviceSectionImages[index].alt}
            />
            <span className="card-number">0{index + 1}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>

      <div className="service-categories reveal">
        <div className="service-categories-heading">
          <span>Our Service Lineup</span>
        </div>
        <div className="service-categories-grid">
          {serviceCategories.map((category, index) => (
            <div className="service-category-item" style={{ '--delay': `${index * 35}ms` }} key={category}>
              <span className="service-category-icon" aria-hidden="true">*</span>
              <span>{category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
