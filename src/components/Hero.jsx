import '../styles/Hero.css';

export default function Hero({ data }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{data.name}</h1>
        <p className="title">{data.title}</p>
        <p className="bio">{data.bio}</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
