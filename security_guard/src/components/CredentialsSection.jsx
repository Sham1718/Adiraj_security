import { credentials } from '../data/siteContent'

function CredentialsSection() {
  return (
    <section className="section credentials-section">
      <div className="section-heading reveal">
        <p className="eyebrow">Business specifics</p>
        <h2>Compliance and registration details that support dependable operations.</h2>
      </div>
      <div className="credentials-grid">
        {credentials.map((item, index) => (
          <div className="credential-card reveal" style={{ '--delay': `${index * 70}ms` }} key={item}>
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}

export default CredentialsSection
