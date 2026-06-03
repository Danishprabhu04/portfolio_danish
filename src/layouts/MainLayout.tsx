import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-grid-pattern">
      {/* ===== HEADER ===== */}
      <header className="nav-header">
        <a className="logo" href="/">~/danish</a>
        <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About me</a></li>
          <li><a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a></li>
          <li><a href="#achievements" onClick={() => setMobileMenuOpen(false)}>Achievements</a></li>
          <li><a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a></li>
          <li><a href="#contact" className="active" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
        </ul>
        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X size={24} color="#e4e1e9" /> : <Menu size={24} color="#e4e1e9" />}
        </button>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <main>
        {children}
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="site-footer">
        <div className="footer-left">
          <span className="brand">DANISH.TECH</span>
          <span className="status">[SYSTEM_STATUS: <span style={{ color: '#00FF41' }}>OPERATIONAL</span>]</span>
          <span className="status">© {new Date().getFullYear()}</span>
        </div>
        <div className="footer-links">
          <a href="https://github.com/Danishprabhu04" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/danishprabhu" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:danishprabhu27@gmail.com">Email</a>
          <a href="https://danishprabhu.tech" target="_blank" rel="noreferrer">Website</a>
        </div>
      </footer>
    </div>
  );
}
