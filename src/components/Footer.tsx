import { BrainCircuit } from 'lucide-react';
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
          alignItems: 'center',
          gap: '0.5rem',
        }}>
          <div style={{
            background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
            borderRadius: '6px',
            padding: '0.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <BrainCircuit size={14} color="white" />
          </div>
          <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>
            s<span style={{ color: 'var(--color-accent)' }}>lundberg</span>
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
