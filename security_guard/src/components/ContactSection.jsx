import { motion } from 'framer-motion'

function ContactSection() {
  return (
    <section className="contact-section" id="contact">

      <motion.div
        className="contact-copy"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="eyebrow">Contact details</p>

        <h2>
          Connect with Shri Adhiraj Enterprises
          for security and manpower contracts.
        </h2>

        <p>
          The company operates from Office No. 6,
          Natraj Complex, Wagholi, Pune.
        </p>

        <div className="contact-details">

          <motion.a
            href="tel:+919893976161"
            whileHover={{ x: 5 }}
          >
            9893976161
          </motion.a>

          <motion.a
            href="tel:+919066941212"
            whileHover={{ x: 5 }}
          >
            9066941212
          </motion.a>

          <motion.a
            href="mailto:shreeadhirajenterprises61@gmail.com"
            whileHover={{ x: 5 }}
          >
            shreeadhirajenterprises61@gmail.com
          </motion.a>

          <motion.a
            href="https://www.shriadhirajenterprises.in"
            whileHover={{ x: 5 }}
          >
            www.shriadhirajenterprises.in
          </motion.a>

        </div>
      </motion.div>

      <motion.form
        className="quote-form"
        action="https://formspree.io/f/xaqvdval"
        method="POST"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >

        <label>
          Full name
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
          />
        </label>

        <label>
          Phone number
          <input
            type="tel"
            name="phone"
            placeholder="Mobile number"
            required
          />
        </label>

        <label>
          Service required
          <select
            name="service"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select service
            </option>

            <option>Security Guard Services</option>
            <option>Bouncer Services</option>
            <option>Housekeeping Services</option>
            <option>Labour Supply</option>
            <option>Garden Maintenance</option>
          </select>
        </label>

        <label>
          Requirement details

          <textarea
            name="message"
            rows="4"
            placeholder="Example: 4 guards for residential project in Kharadi"
            required
          />
        </label>

        <input
          type="hidden"
          name="_subject"
          value="New Shri Adhiraj Enterprises enquiry"
        />

        <motion.button
          type="submit"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          Submit Enquiry
        </motion.button>

      </motion.form>

    </section>
  )
}

export default ContactSection