import { clients } from '../data/siteContent'

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
