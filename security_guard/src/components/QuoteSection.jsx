import {
  commercialOfferNotes,
  commercialOfferRows,
  commercialSummaryRows,
  quoteTerms,
  wageRateRows,
} from '../data/siteContent'

function QuoteSection() {
  return (
    <section className="section quote-section" id="quote">
      <div className="section-heading reveal">
        <p className="eyebrow">Quotation structure</p>
        <h2>Wage rates, commercial offer, and terms from the shared quotation.</h2>
        <p>
          The screenshots you shared include exact wage-rate calculations, the monthly commercial offer, and the
          working terms. This section now reflects those numbers directly instead of a generic placeholder.
        </p>
      </div>

      <div className="quote-stack">
        <div className="quote-card reveal">
          <div className="quote-card-header">
            <h3>Wage Rate</h3>
            <p>12-hour shift reference values for supervisor and security guard staffing.</p>
          </div>
          <div className="rate-table">
            <div className="rate-head">Particulars</div>
            <div className="rate-head">Supervisor (skilled)</div>
            <div className="rate-head">Security Guard (skilled)</div>
            {wageRateRows.map((row) => (
              <div className={`rate-row${row.highlight ? ' is-highlight' : ''}${row.accent ? ' is-accent' : ''}${row.strong ? ' is-strong' : ''}`} key={row.label}>
                <span>{row.label}</span>
                <span>{row.supervisor}</span>
                <span>{row.guard}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="quote-card reveal delay-1">
          <div className="quote-card-header">
            <h3>Commercial Offer</h3>
            <p>Monthly staffing proposal for one supervisor and one security guard.</p>
          </div>

          <div className="offer-table">
            <div className="offer-head">Particulars</div>
            <div className="offer-head">Manpower</div>
            <div className="offer-head">Rate</div>
            <div className="offer-head">Total</div>
            {commercialOfferRows.map((row) => (
              <div className="offer-row" key={row.label}>
                <span>{row.label}</span>
                <span>{row.manpower}</span>
                <span>{row.rate}</span>
                <span>{row.total}</span>
              </div>
            ))}
          </div>

          <div className="summary-table">
            {commercialSummaryRows.map((row) => (
              <div className={`summary-row${row.highlight ? ' is-highlight' : ''}${row.strong ? ' is-strong' : ''}`} key={row.label}>
                <span>{row.label}</span>
                <span>{row.amount}</span>
              </div>
            ))}
          </div>

          <div className="quote-notes">
            {commercialOfferNotes.map((note) => (
              <p className="quote-note" key={note}>* {note}</p>
            ))}
          </div>
        </div>

        <div className="quote-card reveal">
          <div className="quote-card-header">
            <h3>General Terms &amp; Conditions</h3>
            <p>Commercial and operating conditions captured from the quotation screenshots.</p>
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
