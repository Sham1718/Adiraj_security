import { motion } from 'framer-motion'

function Navbar() {
  return (
    <motion.nav
      className="navbar"
      aria-label="Main navigation"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: 'easeOut',
      }}
    >

      <motion.a
        className="brand"
        href="#top"
        aria-label="Shri Adhiraj Enterprises home"
        whileHover={{ scale: 1.02 }}
      >

        <motion.span
          className="brand-mark"
          whileHover={{
            rotate: 5,
            scale: 1.08,
          }}
        >
          SA
        </motion.span>

        <span>
          <strong>Shri Adhiraj Enterprises</strong>

          <small>
            Security, Bouncer, Labour &
            Housekeeping Allied Services
          </small>
        </span>

      </motion.a>

      <div className="nav-links">

        {['Services', 'Clients', 'Quotation', 'Contact'].map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            whileHover={{
              y: -2,
            }}
            transition={{ duration: 0.2 }}
          >
            {item}
          </motion.a>
        ))}

      </div>

    </motion.nav>
  )
}

export default Navbar