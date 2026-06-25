import { Compass, Code2, BrainCircuit, Cloud, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Skills() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      icon: <Compass size={24} color="#06b6d4" />,
      title: t.skills.catGame,
      skills: [
        'Game Direction',
        'Speldesign / Game Design',
        'Agil projektledning',
        'Teamkoordinering',
        'Spelprototyping',
        'Kreativ vision'
      ]
    },
    {
      icon: <Code2 size={24} color="#6366f1" />,
      title: t.skills.catDev,
      skills: [
        'Python',
        'Flutter & Dart',
        'TypeScript / JavaScript',
        'FastAPI',
        'React',
        'SQL (SQLite, PostgreSQL)'
      ]
    },
    {
      icon: <BrainCircuit size={24} color="#a855f7" />,
      title: t.skills.catAi,
      skills: [
        'Multimodal RAG',
        'PydanticAI',
        'LanceDB (Vektordatabas)',
        'Hugging Face (Vision)',
        'Prompt Engineering',
        'LLM-integrering (GPT-4o)'
      ]
    },
    {
      icon: <Cloud size={24} color="#10b981" />,
      title: t.skills.catCloud,
      skills: [
        'Microsoft Azure',
        'Microsoft Fabric',
        'Vercel',
        'Git & GitHub Actions',
        'CI/CD Pipelines',
        'API-design'
      ]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">
          {t.skills.title}<span>{t.skills.titleSpan}</span>
        </h2>

        <div className="grid grid-2" style={{ gap: '2rem' }}>
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="card skills-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                padding: '2.25rem',
              }}
            >
              {/* Category Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '10px',
                  padding: '0.6rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {category.icon}
                </div>
                <h3 style={{
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--color-text-primary)'
                }}>
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <ul style={{
                listStyle: 'none',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                gap: '0.8rem 1rem',
                marginTop: '0.5rem',
              }}>
                {category.skills.map((skill, sIdx) => (
                  <li 
                    key={sIdx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      fontSize: '0.9rem',
                      color: 'var(--color-text-secondary)',
                      transition: 'var(--transition-smooth)',
                    }}
                    className="skill-item-hover"
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      background: 'rgba(99, 102, 241, 0.08)',
                      border: '1px solid rgba(99, 102, 241, 0.15)',
                    }}>
                      <Check size={10} color="var(--color-primary)" strokeWidth={3} />
                    </div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-card:hover .skill-item-hover {
          color: var(--color-text-primary);
        }

        .skill-item-hover:hover {
          transform: translateX(4px);
          color: var(--color-accent) !important;
        }
      `}</style>
    </section>
  );
}
