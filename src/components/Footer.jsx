import '../styles/Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} Alex Johnson. All rights reserved.</p>
        <p>Designed & Built with React + Vite</p>
      </div>
    </footer>
  );
}
