function Footer() {
  return (
    <footer className="footer">

      <div className="footer-grid">

        <div className="footer-brand">
          <div className="footer-logo">
            <span className="nuha" style={{color:'white'}}>NUHA</span>
            <span className="riwaz" style={{color:'white'}}> Riwaz</span>
          </div>
          <p className="footer-sub" style={{color:'white'}}>SOFTWARE ENGINEERING UNDERGRADUATE</p>
          <p className="footer-tagline" style={{color:'white'}}>Building ideas. Solving problems.<br />Creating impact.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Follow Me</h4>
          <div className="social-icons">
            <a href="https://linkedin.com/in/nuha-riwaz" target="_blank" rel="noreferrer" className="social-btn">in</a>
            <a href="https://github.com/nuha-riwaz" target="_blank" rel="noreferrer" className="social-btn">⌥</a>
            <a href="mailto:riwaznuha@gmail.com" className="social-btn">✉</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Nuha Riwaz. All rights reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;