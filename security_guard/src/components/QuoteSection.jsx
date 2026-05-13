import { motion } from 'framer-motion'

import {
  quoteHighlights,
  quoteTerms,
} from '../data/siteContent'

import { contactGalleryImages } from '../data/siteImages'

function QuoteSection() {
  return (
    <section className="section quote-section" id="quote">

      {/* Heading */}
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="eyebrow">Quotation structure</p>

        <h2>
          Simple contract information for
          security and manpower services.
        </h2>

        <p>
          Every quotation is prepared after understanding
          the site, duty hours, manpower count,
          supervision needs, and service expectations.
        </p>
      </motion.div>

      <div className="quote-stack">

        {/* Quotation Info Card */}
        <motion.div
          className="quote-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
        >

          <div className="quote-card-header">
            <h3>Quotation Information</h3>

            <p>
              Normal service details considered before
              preparing a final offer.
            </p>
          </div>

          <div className="quote-info-grid">

            {quoteHighlights.map((item, index) => (
              <motion.article
                className="quote-info-item"
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -4,
                }}
              >

                <span>{item.kicker}</span>

                <h4>{item.title}</h4>

                <p>{item.text}</p>

              </motion.article>
            ))}

          </div>

        </motion.div>

        {/* Image Band */}
        <motion.div
          className="quote-photo-band"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          {contactGalleryImages.map((image, index) => (
            <motion.figure
              className="quote-photo-card"
              key={image.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
            >

              <img
                src={image.src}
                alt={image.alt}
              />

            </motion.figure>
          ))}

        </motion.div>

        {/* Service Approach */}
        <motion.div
          className="quote-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
        >

          <div className="quote-card-header">
            <h3>Service Approach</h3>

            <p>
              Shri Adhiraj Enterprises keeps every deployment
              practical, supervised, and easy to coordinate.
            </p>
          </div>

          <p className="quote-body">
            The team can support residential societies,
            commercial properties, warehouses, offices,
            schools, events, and industrial locations.
          </p>

          <p className="quote-body">
            Deployment planning covers duty timings,
            post location, reporting structure,
            replacement support, uniform standards,
            and day-to-day coordination.
          </p>

        </motion.div>

        {/* Terms & Conditions */}
        <motion.div
          className="quote-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
        >

          <div className="quote-card-header">
            <h3>General Terms & Conditions</h3>

            <p>
              Standard commercial and operating conditions
              for service execution and billing.
            </p>
          </div>

          <ol className="terms-list">

            {quoteTerms.map((term, index) => (
              <motion.li
                key={term}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
              >
                {term}
              </motion.li>
            ))}

          </ol>

        </motion.div>

      </div>

    </section>
  )
}

export default QuoteSection