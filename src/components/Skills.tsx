import { useState, useEffect, useRef } from 'react';
import { Compass, Code2, BrainCircuit, Cloud, Check, X, Maximize2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Skills() {
  const { t, language } = useLanguage();
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModal(null);
      }
    };
    if (activeModal !== null) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeModal]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setActiveModal(null);
    }
  };

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
        'C# / .NET',
        'TypeScript / JavaScript',
        'FastAPI',
        'React',
        'SQL (SQLite, MySQL)'
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
        'Docker / Containerization'
      ]
    }
  ];

  const modalData = [
    // 0: Game Dev
    {
      desc: t.skills.modal.gameDesc,
      groups: {
        languages: ['C#'],
        libraries: ['Unity Engine', 'MonoBehaviour', 'Unity UI / UGUI', 'Unity Physics'],
        tools: ['Unity Editor', 'Visual Studio', 'Reaper / Cubase (DAW)', 'Git / GitHub'],
        concepts: language === 'sv' ? [
          'Spelregi (Game Direction)',
          'Speldesign (Game Design)',
          'Agilt ledarskap / Scrum',
          'Teamkoordinering',
          'Spelprototyping',
          'Nivådesign (Level Design)',
          'Ljuddesign & Produktion (Reaper / Cubase)'
        ] : [
          'Game Direction',
          'Game Design',
          'Agile Leadership / Scrum',
          'Team Coordination',
          'Game Prototyping',
          'Level Design',
          'Sound Design & Production (Reaper / Cubase)'
        ]
      }
    },
    // 1: Software Dev & OOP
    {
      desc: t.skills.modal.devDesc,
      groups: {
        languages: ['C#', 'Python', 'SQL (SQLite, MySQL, SQL Server)', 'TypeScript', 'JavaScript'],
        libraries: ['.NET Core / .NET 8', 'React', 'Flask', 'FastAPI', 'Dapper', 'Alembic (Migrationer)'],
        tools: ['Visual Studio', 'Visual Studio Code', 'Spyder', 'Node.js / NPM', 'DBeaver', 'SSMS', 'Git'],
        concepts: language === 'sv' ? [
          'Objektorienterad programmering (OOP)',
          'Systemarkitektur',
          'RESTful API Design',
          'Databasmigreringar',
          'Ren kod & Refaktorering (Clean Code)',
          'Relationsdatabaser'
        ] : [
          'Object-Oriented Programming (OOP)',
          'System Architecture',
          'RESTful API Design',
          'Database Migrations',
          'Clean Code & Refactoring',
          'Relational Databases'
        ]
      }
    },
    // 2: AI & RAG
    {
      desc: t.skills.modal.aiDesc,
      groups: {
        languages: ['Python', 'SQL', 'TypeScript'],
        libraries: ['PydanticAI', 'LanceDB (Vektordatabas)', 'Pandas', 'NumPy', 'Matplotlib', 'Plotly', 'Seaborn', 'Streamlit', 'dbt', 'dltHub', 'DuckDB', 'Scikit-learn'],
        tools: ['Jupyter Notebooks', 'Spyder', 'Playwright / BeautifulSoup (Web Scraping)', 'OpenAI API / Hugging Face', 'DBeaver', 'Dagster', 'Snowflake'],
        concepts: language === 'sv' ? [
          'Retrieval-Augmented Generation (RAG)',
          'Multimodal AI',
          'Maskininlärning (Supervised Learning)',
          'Klassificering & Regression (ML)',
          'Vektorbäddningar (Embeddings)',
          'Data Pipelines (ETL)',
          'Prompt Engineering',
          'Web Scraping (Swedavia/Aena)'
        ] : [
          'Retrieval-Augmented Generation (RAG)',
          'Multimodal AI',
          'Machine Learning (Supervised Learning)',
          'Classification & Regression (ML)',
          'Vector Embeddings',
          'Data Pipelines (ETL)',
          'Prompt Engineering',
          'Web Scraping (Swedavia/Aena)'
        ]
      }
    },
    // 3: Cloud & DevOps
    {
      desc: t.skills.modal.cloudDesc,
      groups: {
        languages: ['Bash / Shell Scripting', 'YAML', 'JSON'],
        libraries: ['Azure Functions', 'Azure AI Search', 'Azure Blob Storage', 'Microsoft Fabric', 'Vercel'],
        tools: ['Docker', 'Nginx', 'Celery & Redis', 'WSL2 (Windows Subsystem for Linux)', 'GitHub Actions (CI/CD)'],
        concepts: language === 'sv' ? [
          'CI/CD Pipelines',
          'Containerisering (Containerization)',
          'Mikrotjänster (Microservices)',
          'JWT-autentisering',
          'Serverkonfigurering',
          'Digital ljudproduktion (Hobby)'
        ] : [
          'CI/CD Pipelines',
          'Containerization',
          'Microservices',
          'JWT Authentication',
          'Server Configuration',
          'Digital Audio Production (Hobby)'
        ]
      }
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
              onClick={() => setActiveModal(idx)}
            >
              {/* Category Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%'
              }}>
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
                <div className="expand-icon-container" style={{
                  color: 'var(--color-text-secondary)',
                  opacity: 0.5,
                  transition: 'var(--transition-smooth)',
                }}>
                  <Maximize2 size={16} />
                </div>
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

      {/* MODAL */}
      {activeModal !== null && (() => {
        const modalCategory = skillCategories[activeModal];
        const data = modalData[activeModal];
        
        return (
          <div 
            onClick={handleBackdropClick}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(5, 5, 10, 0.85)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
              animation: 'fadeIn 0.25s ease-out forwards',
            }}
          >
            <div 
              ref={modalRef}
              style={{
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(9, 9, 11, 0.98) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '20px',
                padding: '2.5rem',
                width: '100%',
                maxWidth: '850px',
                maxHeight: '85vh',
                overflowY: 'auto',
                position: 'relative',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
                animation: 'scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
              }}
              className="custom-scrollbar"
            >
              {/* Close Button */}
              <button 
                onClick={() => setActiveModal(null)}
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'var(--color-text-secondary)',
                  transition: 'var(--transition-smooth)',
                }}
                className="close-btn"
              >
                <X size={18} />
              </button>

              {/* Modal Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }} className="modal-header-container">
                <div style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  padding: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {modalCategory.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.75rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}>
                    {modalCategory.title}
                  </h3>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', marginTop: '0.5rem', lineHeight: '1.5', maxWidth: '650px' }}>
                    {data.desc}
                  </p>
                </div>
              </div>

              {/* Modal Grid of Subgroups */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }} className="modal-subgroups-grid">
                {/* Languages */}
                {data.groups.languages.length > 0 && (
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                      {t.skills.modal.subLanguages}
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                      {data.groups.languages.map((item, idx) => (
                        <span key={idx} className="modal-tag lang-tag">{item}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Libraries / Frameworks */}
                {data.groups.libraries.length > 0 && (
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                      {t.skills.modal.subLibraries}
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                      {data.groups.libraries.map((item, idx) => (
                        <span key={idx} className="modal-tag lib-tag">{item}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tools */}
                {data.groups.tools.length > 0 && (
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                      {t.skills.modal.subTools}
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                      {data.groups.tools.map((item, idx) => (
                        <span key={idx} className="modal-tag tool-tag">{item}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Concepts */}
                {data.groups.concepts.length > 0 && (
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                      {t.skills.modal.subConcepts}
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                      {data.groups.concepts.map((item, idx) => (
                        <span key={idx} className="modal-tag concept-tag">{item}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })()}

      <style>{`
        .skills-card {
          cursor: pointer;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .skills-card:hover {
          transform: translateY(-4px);
          border-color: rgba(99, 102, 241, 0.3);
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.1);
        }

        .skills-card:hover .expand-icon-container {
          color: var(--color-accent);
          opacity: 1;
          transform: scale(1.1);
        }

        .skills-card:hover .skill-item-hover {
          color: var(--color-text-primary);
        }

        .skill-item-hover:hover {
          transform: translateX(4px);
          color: var(--color-accent) !important;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .modal-tag {
          font-size: 0.85rem;
          padding: 0.35rem 0.85rem;
          border-radius: 8px;
          color: var(--color-text-secondary);
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          transition: var(--transition-smooth);
        }

        .modal-tag:hover {
          color: var(--color-text-primary);
          transform: translateY(-2px);
        }

        .lang-tag:hover {
          background: rgba(6, 182, 212, 0.05);
          border-color: rgba(6, 182, 212, 0.3);
          box-shadow: 0 0 10px rgba(6, 182, 212, 0.15);
        }

        .lib-tag:hover {
          background: rgba(99, 102, 241, 0.05);
          border-color: rgba(99, 102, 241, 0.3);
          box-shadow: 0 0 10px rgba(99, 102, 241, 0.15);
        }

        .tool-tag:hover {
          background: rgba(16, 185, 129, 0.05);
          border-color: rgba(16, 185, 129, 0.3);
          box-shadow: 0 0 10px rgba(16, 185, 129, 0.15);
        }

        .concept-tag:hover {
          background: rgba(245, 158, 11, 0.05);
          border-color: rgba(245, 158, 11, 0.3);
          box-shadow: 0 0 10px rgba(245, 158, 11, 0.15);
        }

        .close-btn:hover {
          background: rgba(239, 68, 68, 0.1);
          border-color: rgba(239, 68, 68, 0.3);
          color: #ef4444;
          transform: rotate(90deg);
        }

        @media (min-width: 768px) {
          .modal-subgroups-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 576px) {
          .modal-header-container {
            flex-direction: column;
            align-items: flex-start !important;
            gap: 0.75rem !important;
          }
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.01);
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 3px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.15);
        }
      `}</style>
    </section>
  );
}
