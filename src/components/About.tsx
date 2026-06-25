import { Code2, GraduationCap, Compass } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const cards = [
    {
      icon: <GraduationCap size={24} color="#6366f1" />,
      title: t.about.card1Title,
      desc: t.about.card1Desc,
    },
    {
      icon: <Compass size={24} color="#06b6d4" />,
      title: t.about.card2Title,
      desc: t.about.card2Desc,
    },
    {
      icon: <Code2 size={24} color="#a855f7" />,
      title: t.about.card3Title,
      desc: t.about.card3Desc,
    },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">
          {t.about.title}<span>{t.about.titleSpan}</span>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'start',
        }} className="about-grid">
          {/* Text block */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}>
            <h3 style={{
              fontSize: '1.75rem',
              fontWeight: 700,
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-text-primary)',
            }}>
              {t.about.subtitle}
            </h3>
            
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: '1.7' }}>
              {t.about.p1}
            </p>
            
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: '1.7' }}>
              {t.about.p2}
            </p>

            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: '1.7' }}>
              {t.about.p3}
            </p>
          </div>

          {/* Cards grid */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}>
            {cards.map((card, idx) => (
              <div 
                key={idx} 
                className="card"
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  alignItems: 'start',
                  padding: '1.75rem',
                }}
              >
                <div style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '12px',
                  padding: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                }}>
                  {card.icon}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <h4 style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-text-primary)',
                  }}>
                    {card.title}
                  </h4>
                  <p style={{
                    fontSize: '0.95rem',
                    color: 'var(--color-text-secondary)',
                    lineHeight: '1.5',
                  }}>
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .about-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
      `}</style>
    </section>
  );
}
