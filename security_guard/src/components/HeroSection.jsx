import { heroSectionImage } from '../data/siteImages'
import { motion } from 'framer-motion'

function HeroSection() {
  return (
    <motion.section
      className="hero"
      id="top"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >

      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
        }}
      >
        <p className="eyebrow">
          Your safety, our priority
        </p>

        <h1>
          Integrated security and manpower
          services for Pune businesses and properties.
        </h1>

        <p className="hero-text">
          Shri Adhiraj Enterprises provides trained
          security guards, bouncers, labour,
          housekeeping, office support, and maintenance teams.
        </p>

        <div className="hero-actions">

          <motion.a
            className="primary-btn"
            href="#quote"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            Request Quotation
          </motion.a>

          <motion.a
            className="ghost-btn"
            href="tel:+919893976161"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            Call 9893976161
          </motion.a>

        </div>

        <motion.div
          className="trust-row"
          aria-label="Company highlights"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.5,
          }}
        >
          <span><strong>13+</strong> years of experience</span>

          <span><strong>2013</strong> establishment year</span>

          <span><strong>Pune</strong> regional deployment</span>
        </motion.div>

      </motion.div>

      <motion.div
        className="hero-card"
        initial={{
          opacity: 0,
          x: 60,
          scale: 0.92,
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.9,
          delay: 0.3,
        }}
        whileHover={{
          y: -8,
        }}
      >

        <img
          className="hero-image"
          src={heroSectionImage}
          alt="Security personnel standing on duty"
        />

        <div className="status-panel">
          <span className="pulse" aria-hidden="true"></span>

          Always alert, always ready for security,
          bouncer, labour, and housekeeping deployment
        </div>

      </motion.div>

    </motion.section>
  )
}

export default HeroSection