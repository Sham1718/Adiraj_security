import { motion } from 'framer-motion'
import { credentials } from '../data/siteContent'

function CredentialsSection() {
  return (
    <section className="section credentials-section">

      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="eyebrow">Business specifics</p>

        <h2>
          Compliance and registration details
          that support dependable operations.
        </h2>
      </motion.div>

      <div className="credentials-grid">

        {credentials.map((item, index) => (
          <motion.div
            key={item}
            className="credential-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              delay: index * 0.08,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -6,
              scale: 1.02,
            }}
          >
            {item}
          </motion.div>
        ))}

      </div>

    </section>
  )
}

export default CredentialsSection