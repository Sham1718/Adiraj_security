import { motion } from 'framer-motion'
import { whyChoosePoints } from '../data/siteContent'

function WhyChooseSection() {
  return (
    <section className="section why-section">

      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="eyebrow">Why choose us</p>

        <h2>Why businesses choose Shri Adhiraj Enterprises.</h2>

        <p>
          Shri Adhiraj Enterprises focuses on disciplined execution,
          reliable staffing, and practical service support.
        </p>
      </motion.div>

      <div className="why-grid">
        {whyChoosePoints.map((point, index) => (
          <motion.article
            key={point}
            className="why-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
          >
            <span className="why-icon">*</span>
            <p>{point}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default WhyChooseSection