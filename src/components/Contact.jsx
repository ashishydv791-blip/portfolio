import '../styles/Contact.css';

export default function Contact({ data }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <h3>Email</h3>
              <a href={`mailto:${data.email}`}>{data.email}</a>
            </div>
            <div className="info-item">
              <h3>Phone</h3>
              <a href={`tel:${data.phone}`}>{data.phone}</a>
            </div>
            <div className="info-item">
              <h3>Location</h3>
              <p>{data.location}</p>
            </div>
            <div className="info-item">
              <h3>Follow Me</h3>
              <div className="social-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub">
                  GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  LinkedIn
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
