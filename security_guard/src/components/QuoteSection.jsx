import { quoteRoles } from '../data/siteContent'

function QuoteSection() {
  return (
    <section className="section quote-section" id="quote">
      <div className="section-heading reveal">
        <p className="eyebrow">Quotation structure</p>
        <h2>Security supply categories included in the shared format.</h2>
        <p>
          The uploaded quotation page lists the service categories and shift structures for commercial offers. The
          extracted text does not include final rates, so this section preserves the service matrix without inventing pricing.
        </p>
      </div>
      <div className="quote-card reveal">
        <div className="quote-table">
          <div className="quote-table head">Description</div>
          <div className="quote-table head">Shift Options</div>
          {quoteRoles.map((item) => (
            <div className="quote-row" key={item.role}>
              <span>{item.role}</span>
              <span>{item.shiftA} / {item.shiftB}</span>
            </div>
          ))}
        </div>
        <p className="quote-note">
          For exact rates, the site now directs clients to request a live quotation through phone or email.
        </p>
      </div>
    </section>
  )
}

export default QuoteSection
