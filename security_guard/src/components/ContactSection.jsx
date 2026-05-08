import { contactGalleryImages } from '../data/siteImages'

function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-copy reveal">
        <p className="eyebrow">Contact details</p>
        <h2>Connect with Shri Adhiraj Enterprises for security and manpower contracts.</h2>
        <p>
          The company operates from Office No. 6, Natraj Complex, J.J. Nagar, Kesnand Road, Wagholi, Pune,
          Maharashtra 412207 and supports nearby industrial, commercial, and residential locations.
        </p>
        <div className="contact-details">
          <a href="tel:+919893976161">9893976161</a>
          <a href="tel:+919066941212">9066941212</a>
          <a href="mailto:shreeadhirajenterprises61@gmail.com">shreeadhirajenterprises61@gmail.com</a>
          <a href="https://www.shriadhirajenterprises.in">www.shriadhirajenterprises.in</a>
        </div>
        <div className="contact-gallery">
          {contactGalleryImages.map((image) => (
            <figure className="contact-gallery-card" key={image.src}>
              <img src={image.src} alt={image.alt} />
            </figure>
          ))}
        </div>
      </div>

      <form className="quote-form reveal delay-1">
        <label>
          Full name
          <input type="text" name="name" placeholder="Your name" />
        </label>
        <label>
          Phone number
          <input type="tel" name="phone" placeholder="Mobile number" />
        </label>
        <label>
          Service required
          <select name="service" defaultValue="">
            <option value="" disabled>Select service</option>
            <option>Security Guard Services</option>
            <option>Bouncer Services</option>
            <option>Housekeeping Services</option>
            <option>Labour Supply</option>
            <option>Garden Maintenance</option>
          </select>
        </label>
        <label>
          Requirement details
          <textarea name="message" rows="4" placeholder="Example: 4 guards for a residential project in Kharadi, 12-hour shifts" />
        </label>
        <button type="button">Submit Enquiry</button>
      </form>
    </section>
  )
}

export default ContactSection
