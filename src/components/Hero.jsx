import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-left">

        <span className="nuha1">NUHA</span>
        <span className="riwaz1">Riwaz</span>

        <p className="tagline">
        SOFTWARE ENGINEERING UNDERGRADUATE
        </p>
        <div className="hero-line"></div>

        <p className="tagline2">
          Where curiosity meets code.
        </p>

        <div className="hero-buttons">
          <button>Download Resume</button>
          <button className="outline-btn">GitHub</button>
        </div>

      </div>

      <div className="hero-right">

        <div className="blob"></div>

        <img src={profile} alt="Nuha" />

      </div>

    </section>
  );
}

export default Hero;