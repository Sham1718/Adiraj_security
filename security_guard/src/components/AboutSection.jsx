import { contractSteps } from '../data/siteContent'

function AboutSection() {
  return (
    <section className="split-section" id="process">
      <div className="command-card reveal">
        <p className="eyebrow">About the firm</p>
        <h2>Registered manpower and security services built for long-term contracts.</h2>
        <p>
          Shri Adhiraj Enterprises is a Pune-based service provider offering security, bouncer, labour, housekeeping,
          and allied support services with registered compliance coverage, disciplined deployment, and experience
          across multiple active sites.
        </p>
        <a className="text-link" href="#contact">Mail for contract discussion</a>
      </div>
      <div className="timeline reveal delay-1">
        {contractSteps.map((step, index) => (
          <div className="timeline-item" key={step}>
            <span>{index + 1}</span>
            <p>{step}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AboutSection
