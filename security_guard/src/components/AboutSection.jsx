import { contractSteps } from '../data/siteContent'
import { motion } from 'framer-motion'

function AboutSection() {
  return (
    <section className="split-section" id="process">

      <motion.div
        className="command-card"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="eyebrow">About the firm</p>

        <h2>
          Registered manpower and security services
          built for long-term contracts.
        </h2>

        <p>
          Shri Adhiraj Enterprises is a Pune-based
          service provider offering security, bouncer,
          labour, housekeeping, and allied support services.
        </p>

        <a className="text-link" href="#contact">
          Mail for contract discussion
        </a>
      </motion.div>

      <motion.div
        className="timeline"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {contractSteps.map((step, index) => (
          <motion.div
            key={step}
            className="timeline-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
          >
            <span>{index + 1}</span>
            <p>{step}</p>
          </motion.div>
        ))}
      </motion.div>

    </section>
  )
}

export default AboutSection