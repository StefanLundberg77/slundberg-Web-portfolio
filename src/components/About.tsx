import { Code2, GraduationCap, Compass } from 'lucide-react';

export default function About() {
  const cards = [
    {
      icon: <GraduationCap size={24} color="#6366f1" />,
      title: 'Utbildning & AI',
      desc: 'Projektorienterad programmering med inriktning AI. Utbildningen (OPA 24) fokuserade på modern systemutveckling, OOP, databaser samt avancerade AI-integrationer såsom Retrieval-Augmented Generation (RAG).',
    },
    {
      icon: <Compass size={24} color="#06b6d4" />,
      title: 'Game Direction',
      desc: 'Som Game Director på Nordstern (del av Northack) leder jag visionen, speldesignen och samordningen för vårt nuvarande spelprojekt "No Final Run". Jag kombinerar konstnärligt berättande med strukturerad systemdesign.',
    },
    {
      icon: <Code2 size={24} color="#a855f7" />,
      title: 'Teknisk Filosofi',
      desc: 'Jag värdesätter ren kod, modulär arkitektur och starka OOP-principer. Oavsett om det är Python-kod för AI-pipelines, Dart/Flutter för frontend eller spelmotorarkitektur, strävar jag efter skalbarhet och enkelhet.',
    },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">
          Vem är <span>Stefan?</span>
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
              Kreativ ledare som älskar komplex mjukvarudesign
            </h3>
            
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Min resa kombinerar två spännande världar: det kreativa ledarskapet inom spelbranschen och den logiska precisionen inom systemutveckling. Som <strong>Game Director på Nordstern</strong> leder jag spelvisionen och teamet i utvecklingen av <em>No Final Run</em>. Det handlar om att koordinera grafik, design, mekanik och kod till en sömlös helhet.
            </p>
            
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Parallellt har jag slutfört min utbildning inom <strong>projektorienterad systemutveckling med inriktning AI</strong> (klass OPA 24). Där har jag fördjupat mig i objektorienterad programmering, avancerade API-arkitekturer och hur man integrerar AI-modeller (både lokala open-source-modeller och molnbaserade enterpriselösningar) i affärssystem.
            </p>

            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Denna dualitet gör att jag förstår hela processen — från produktvision och teamledning till underliggande databaser, API:er och maskininlärnings-pipelines.
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
