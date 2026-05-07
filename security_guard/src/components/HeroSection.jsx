import { heroSectionImage } from '../data/siteImages'

function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy reveal">
        <p className="eyebrow">Your safety, our priority</p>
        <h1>Integrated security and manpower services for Pune businesses and properties.</h1>
        <p className="hero-text">
          Shri Adhiraj Enterprises provides trained security guards, bouncers, labour, housekeeping, office support,
          and maintenance teams across Wagholi, Kharadi, Pimpri-Chinchwad, Pune, and surrounding areas.
        </p>
        <div className="hero-actions">
          <a className="primary-btn" href="#quote">Request Quotation</a>
          <a className="ghost-btn" href="tel:+919893976161">Call 9893976161</a>
        </div>
        <div className="trust-row" aria-label="Company highlights">
          <span><strong>13+</strong> years of experience</span>
          <span><strong>2013</strong> establishment year</span>
          <span><strong>Pune</strong> regional deployment</span>
        </div>
      </div>

      <div className="hero-card reveal delay-1">
        <img className="hero-image" src={heroSectionImage} alt="Security personnel standing on duty" />
        <div className="status-panel">
          <span className="pulse" aria-hidden="true"></span>
          Always alert, always ready for security, bouncer, labour, and housekeeping deployment
        </div>
      </div>
    </section>
  )
}

export default HeroSection
