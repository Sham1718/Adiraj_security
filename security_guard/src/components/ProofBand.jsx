import { motion } from 'framer-motion'
import { proofPoints } from '../data/siteContent'

function ProofBand() {
  return (
    <motion.section
      className="proof-band"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >

      {proofPoints.map((point, index) => (
        <motion.div
          key={point.title}
          className="proof-item"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.45,
            delay: index * 0.12,
          }}
          viewport={{ once: true }}
          whileHover={{
            y: -4,
            scale: 1.02,
          }}
        >

          <strong>{point.title}</strong>

          <span>{point.text}</span>

        </motion.div>
      ))}

    </motion.section>
  )
}

export default ProofBand