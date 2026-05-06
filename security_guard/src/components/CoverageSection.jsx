import { coverage } from '../data/siteContent'

function CoverageSection() {
  return (
    <section className="section industries">
      <div className="section-heading reveal">
        <p className="eyebrow">Coverage area</p>
        <h2>Serving residential, industrial, and commercial sites across Pune region.</h2>
      </div>
      <div className="industry-grid">
        {coverage.map((place) => (
          <span className="industry-pill reveal" key={place}>{place}</span>
        ))}
      </div>
    </section>
  )
}

export default CoverageSection
