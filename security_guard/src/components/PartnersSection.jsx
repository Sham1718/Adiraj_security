import { motion } from 'framer-motion'
import { partnersSectionImage } from '../data/siteImages'

function PartnersSection() {
  return (
    <section className="section partners-section">

      <motion.div
        className="partners-banner"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span>Our Prime Partners</span>
      </motion.div>

      <motion.figure
        className="partners-board"
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
        }}
        viewport={{ once: true }}
        whileHover={{
          y: -6,
        }}
      >
        <img
          src={partnersSectionImage.src}
          alt={partnersSectionImage.alt}
        />
      </motion.figure>

    </section>
  )
}

export default PartnersSection