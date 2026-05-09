import {
  quoteHighlights,
  quoteTerms,
} from '../data/siteContent'
import { contactGalleryImages } from '../data/siteImages'

function QuoteSection() {
  return (
    <section className="section quote-section" id="quote">
      <div className="section-heading reveal">
        <p className="eyebrow">Quotation structure</p>
        <h2>Simple contract information for security and manpower services.</h2>
        <p>
          Every quotation is prepared after understanding the site, duty hours, manpower count, supervision needs,
          and service expectations. Final commercials are shared directly after requirement discussion.
        </p>
      </div>

      <div className="quote-stack">
        <div className="quote-card reveal">
          <div className="quote-card-header">
            <h3>Quotation Information</h3>
            <p>Normal service details considered before preparing a final offer.</p>
          </div>
          <div className="quote-info-grid">
            {quoteHighlights.map((item) => (
              <article className="quote-info-item" key={item.title}>
                <span>{item.kicker}</span>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="quote-photo-band reveal delay-1">
          {contactGalleryImages.map((image) => (
            <figure className="quote-photo-card" key={image.src}>
              <img src={image.src} alt={image.alt} />
            </figure>
          ))}
        </div>

        <div className="quote-card reveal">
          <div className="quote-card-header">
            <h3>Service Approach</h3>
            <p>Shri Adhiraj Enterprises keeps every deployment practical, supervised, and easy to coordinate.</p>
          </div>
          <p className="quote-body">
            The team can support residential societies, commercial properties, warehouses, offices, schools, events,
            and industrial locations. Services can include security guards, supervisors, bouncers, housekeeping,
            labour supply, office boys, and garden maintenance as per the client requirement.
          </p>
          <p className="quote-body">
            Deployment planning covers duty timings, post location, reporting structure, replacement support,
            uniform standards, and day-to-day coordination. Pricing is kept transparent and is finalized only after
            the exact scope of work is clear.
          </p>
        </div>

        <div className="quote-card reveal">
          <div className="quote-card-header">
            <h3>General Terms &amp; Conditions</h3>
            <p>Standard commercial and operating conditions for service execution and billing.</p>
          </div>
          <ol className="terms-list">
            {quoteTerms.map((term) => (
              <li key={term}>{term}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default QuoteSection
