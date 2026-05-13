import { motion } from 'framer-motion'
import { clients } from '../data/siteContent'
import { clientGalleryImages } from '../data/siteImages'

function ClientsSection() {
  return (
    <section className="section clients-section" id="clients">

      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="eyebrow">Current and past sites</p>

        <h2>
          Selected projects and client locations
          served by the company.
        </h2>

        <p>
          Shri Adhiraj Enterprises has supported
          residential projects, commercial properties,
          and operating sites across Pune region.
        </p>
      </motion.div>

      <div className="site-gallery">
        {clientGalleryImages.map((image, index) => (
          <motion.figure
            key={image.src}
            className={`gallery-card gallery-card-${index + 1}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.12,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -6,
              scale: 1.02,
            }}
          >
            <img src={image.src} alt={image.alt} />
          </motion.figure>
        ))}
      </div>

      <div className="clients-grid">
        {clients.map((client, index) => (
          <motion.div
            key={index}
            className="client-tile"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.06,
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
            }}
          >
            {client}
          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default ClientsSection