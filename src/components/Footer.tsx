import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer style={{
      borderTop: '1px solid var(--border-color)',
      padding: '3rem 0',
      background: 'rgba(6, 8, 19, 0.4)',
      backdropFilter: 'blur(8px)',
      position: 'relative',
      zIndex: 2,
    }}>
      <div className="container footer-container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1.5rem',
      }}>
        
        {/* Logo & Brand */}
        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '0.1rem',
        }}>
          <span style={{
            fontSize: '1.75rem',
            fontWeight: 900,
            fontFamily: 'var(--font-heading)',
            color: '#ffffff',
            lineHeight: 0.8,
            textShadow: '0 0 10px rgba(255, 255, 255, 0.2)',
            letterSpacing: '-0.05em',
          }}>
            S
          </span>
          <span style={{
            fontSize: '1.05rem',
            fontWeight: 800,
            fontFamily: 'var(--font-heading)',
            color: 'var(--color-accent)',
            letterSpacing: '-0.03em',
          }}>
            lundberg
          </span>
        </div>

        {/* Text */}
        <p style={{
          fontSize: '0.85rem',
          color: 'var(--color-text-secondary)',
          textAlign: 'center',
        }}>
          &copy; {currentYear} {t.footer.rights}
        </p>

        {/* Built with */}
        <p style={{
          fontSize: '0.75rem',
          color: 'rgba(148, 163, 184, 0.5)',
          textAlign: 'center',
        }}>
          {t.footer.builtWith}
        </p>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-container {
            flex-direction: row !important;
            gap: 0 !important;
          }
        }
      `}</style>
    </footer>
  );
}
