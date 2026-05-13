import { motion } from 'framer-motion'
import { coverage } from '../data/siteContent'

function CoverageSection() {
  return (
    <section className="section industries">

      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="eyebrow">Coverage area</p>

        <h2>
          Serving residential, industrial,
          and commercial sites across Pune region.
        </h2>
      </motion.div>

      <div className="industry-grid">

        {coverage.map((place, index) => (
          <motion.span
            key={place}
            className="industry-pill"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.35,
              delay: index * 0.04,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -3,
              scale: 1.05,
            }}
          >
            {place}
          </motion.span>
        ))}

      </div>

    </section>
  )
}

export default CoverageSection