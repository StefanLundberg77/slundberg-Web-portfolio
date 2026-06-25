import { useState, useEffect } from 'react';
import { Menu, X, BrainCircuit } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      transition: 'var(--transition-smooth)',
      background: isScrolled ? 'rgba(6, 8, 19, 0.85)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(16px)' : 'none',
      borderBottom: isScrolled ? '1px solid var(--border-color)' : '1px solid transparent',
      padding: isScrolled ? '1rem 0' : '1.5rem 0',
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        {/* Logo */}
        <a href="#home" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          fontSize: '1.25rem',
          fontWeight: 800,
          fontFamily: 'var(--font-heading)',
          letterSpacing: '-0.03em',
        }}>
          <div style={{
            background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
            borderRadius: '10px',
            padding: '0.4rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--shadow-glow)',
          }}>
            <BrainCircuit size={20} color="white" />
          </div>
          <span>
            s<span style={{ color: 'var(--color-accent)' }}>lundberg</span>
          </span>
        </a>

        {/* Right side controls */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
        }}>
          {/* Desktop Nav */}
          <nav style={{
            display: 'none',
          }} className="desktop-menu">
            <ul style={{
              display: 'flex',
              listStyle: 'none',
              gap: '2rem',
              alignItems: 'center',
            }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      color: 'var(--color-text-secondary)',
                      position: 'relative',
                      padding: '0.25rem 0',
                    }}
                    className="nav-link-hover"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>
                  {t.header.hireMe}
                </a>
              </li>
            </ul>
          </nav>

          {/* Premium Language Toggle Button */}
          <div style={{
            display: 'inline-flex',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--border-color)',
            borderRadius: '20px',
            padding: '2px',
            alignItems: 'center',
            position: 'relative',
            zIndex: 10,
          }}>
            <button 
              onClick={() => setLanguage('sv')}
              aria-label="Svenska"
              style={{
                background: language === 'sv' ? 'var(--color-primary)' : 'transparent',
                border: 'none',
                color: language === 'sv' ? 'white' : 'var(--color-text-secondary)',
                borderRadius: '18px',
                padding: '0.25rem 0.6rem',
                fontSize: '0.75rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'var(--transition-smooth)',
                boxShadow: language === 'sv' ? '0 2px 8px rgba(99, 102, 241, 0.4)' : 'none',
              }}
            >
              SV
            </button>
            <button 
              onClick={() => setLanguage('en')}
              aria-label="English"
              style={{
                background: language === 'en' ? 'var(--color-primary)' : 'transparent',
                border: 'none',
                color: language === 'en' ? 'white' : 'var(--color-text-secondary)',
                borderRadius: '18px',
                padding: '0.25rem 0.6rem',
                fontSize: '0.75rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'var(--transition-smooth)',
                boxShadow: language === 'en' ? '0 2px 8px rgba(99, 102, 241, 0.4)' : 'none',
              }}
            >
              EN
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-text-primary)',
              cursor: 'pointer',
              padding: '0.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className="mobile-menu-toggle"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: '100%',
          left: 0,
          right: 0,
          background: 'rgba(6, 8, 19, 0.98)',
          borderBottom: '1px solid var(--border-color)',
          padding: '2rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          backdropFilter: 'blur(20px)',
          animation: 'fadeIn 0.2s ease-out forwards',
        }}>
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                fontSize: '1.1rem',
                fontWeight: 600,
                color: 'var(--color-text-secondary)',
                padding: '0.5rem 0',
              }}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="btn btn-primary"
            style={{ justifyContent: 'center' }}
          >
            {t.header.hireMe}
          </a>
        </div>
      )}

      {/* CSS specific to Header */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-menu {
            display: block !important;
          }
          .mobile-menu-toggle {
            display: none !important;
          }
        }
        
        .nav-link-hover::after {
          content: '';
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: var(--color-accent);
          transform-origin: bottom right;
          transition: transform 0.25s ease-out;
        }
        
        .nav-link-hover:hover {
          color: var(--color-text-primary) !important;
        }
        
        .nav-link-hover:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
}
