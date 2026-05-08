import { whyChoosePoints } from '../data/siteContent'

function WhyChooseSection() {
  return (
    <section className="section why-section">
      <div className="section-heading reveal">
        <p className="eyebrow">Why choose us</p>
        <h2>Why businesses choose Shri Adhiraj Enterprises.</h2>
        <p>
          Shri Adhiraj Enterprises focuses on disciplined execution, reliable staffing, and practical service support
          that helps clients run secure and well-managed sites every day.
        </p>
      </div>

      <div className="why-grid">
        {whyChoosePoints.map((point, index) => (
          <article className="why-card reveal" style={{ '--delay': `${index * 45}ms` }} key={point}>
            <span className="why-icon" aria-hidden="true">*</span>
            <p>{point}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default WhyChooseSection
