import { partnersSectionImage } from '../data/siteImages'

function PartnersSection() {
  return (
    <section className="section partners-section">
      <div className="partners-banner reveal">
        <span>Our Prime Partners</span>
      </div>

      <figure className="partners-board reveal">
        <img src={partnersSectionImage.src} alt={partnersSectionImage.alt} />
      </figure>
    </section>
  )
}

export default PartnersSection
