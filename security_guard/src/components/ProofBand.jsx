import { proofPoints } from '../data/siteContent'

function ProofBand() {
  return (
    <section className="proof-band reveal">
      {proofPoints.map((point) => (
        <div key={point.title}>
          <strong>{point.title}</strong>
          <span>{point.text}</span>
        </div>
      ))}
    </section>
  )
}

export default ProofBand
