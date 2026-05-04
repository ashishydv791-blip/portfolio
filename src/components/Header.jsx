import '../styles/Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">Portfolio</div>
          <nav className="nav">
            <a href="#home" className="nav-link">
              Home
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="#skills" className="nav-link">
              Skills
            </a>
            <a href="#experience" className="nav-link">
              Experience
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
