function Contact() {
  return (
    <section id="contact">
      <div className="about-title">
    <span className="aboutme">Let's</span>
    <span className="aboutme1">Connect</span>
    </div>

      <div className="contact-grid">

        <a href="mailto:riwaznuha@gmail.com" className="contact-item">
          <span className="contact-icon">✉</span>
          <span>riwaznuha@gmail.com</span>
        </a>

        <a href="https://linkedin.com/in/nuha-riwaz" target="_blank" rel="noreferrer" className="contact-item">
          <span className="contact-icon">in</span>
          <span>linkedin.com/in/nuha-riwaz</span>
        </a>

        <a href="https://github.com/nuha-riwaz" target="_blank" rel="noreferrer" className="contact-item">
          <span className="contact-icon">⌥</span>
          <span>github.com/nuha-riwaz</span>
        </a>

        </div>
    </section>
  );
}

export default Contact;