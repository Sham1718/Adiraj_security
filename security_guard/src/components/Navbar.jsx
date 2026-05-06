function Navbar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <a className="brand" href="#top" aria-label="Shri Adhiraj Enterprises home">
        <span className="brand-mark">SA</span>
        <span>
          <strong>Shri Adhiraj Enterprises</strong>
          <small>Security, Bouncer, Labour & Housekeeping Allied Services</small>
        </span>
      </a>
      <div className="nav-links">
        <a href="#services">Services</a>
        <a href="#clients">Clients</a>
        <a href="#quote">Quotation</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar
