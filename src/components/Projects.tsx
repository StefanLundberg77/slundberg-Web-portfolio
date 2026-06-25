import { useState } from 'react';
import { Gamepad2, BrainCircuit, Monitor, CheckCircle2, Server, Cloud } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Projects() {
  const [activeRagTab, setActiveRagTab] = useState<'local' | 'azure'>('local');
  const { t } = useLanguage();

  return (
    <section id="projects" className="section" style={{ background: 'rgba(255, 255, 255, 0.01)' }}>
      <div className="container">
        <h2 className="section-title">
          {t.projects.title}<span>{t.projects.titleSpan}</span>
        </h2>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '4rem',
        }}>
          {/* PROJECT 1: NO FINAL RUN */}
          <div className="card project-card-large" style={{ padding: '0', overflow: 'hidden' }}>
            <div className="project-grid">
              {/* Image / Graphic Side */}
              <div className="project-graphic-side game-bg">
                <div className="game-overlay">
                  <Gamepad2 size={48} className="game-icon-glow" />
                  <span className="game-status-badge">{t.projects.statusDeveloping}</span>
                </div>
              </div>
              
              {/* Content Side */}
              <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span className="tag tag-accent">{t.projects.game.tagSpel}</span>
                  <span className="tag">{t.projects.game.tagStudio}</span>
                  <span className="tag">{t.projects.game.tagGroup}</span>
                </div>

                <h3 style={{ fontSize: '2rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
                  {t.projects.game.title}
                </h3>

                <h4 style={{ fontSize: '1.05rem', color: 'var(--color-accent)', fontWeight: 600 }}>
                  {t.projects.roleLabel}{t.projects.game.role}
                </h4>

                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {t.projects.game.desc1}
                </p>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {t.projects.game.desc2}
                </p>

                <div style={{ marginTop: '0.5rem' }}>
                  <h5 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--color-text-primary)' }}>
                    {t.projects.responsibilitiesLabel}
                  </h5>
                  <ul style={{ 
                    listStyle: 'none', 
                    display: 'grid', 
                    gridTemplateColumns: '1fr',
                    gap: '0.5rem',
                    fontSize: '0.9rem',
                    color: 'var(--color-text-secondary)'
                  }} className="skills-list-grid">
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <CheckCircle2 size={14} color="var(--color-accent)" /> {t.projects.game.resp1}
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <CheckCircle2 size={14} color="var(--color-accent)" /> {t.projects.game.resp2}
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <CheckCircle2 size={14} color="var(--color-accent)" /> {t.projects.game.resp3}
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <CheckCircle2 size={14} color="var(--color-accent)" /> {t.projects.game.resp4}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* PROJECT 2: EXAMENSARBETE (THESIS) */}
          <div className="card project-card-large" style={{ padding: '0', overflow: 'hidden' }}>
            <div className="project-grid">
              {/* Content Side */}
              <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }} className="order-content">
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span className="tag tag-accent">{t.projects.rag.tagThesis}</span>
                  <span className="tag">{t.projects.rag.tagAi}</span>
                  <span className="tag">{t.projects.rag.tagRag}</span>
                </div>

                <h3 style={{ fontSize: '2rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
                  {t.projects.rag.title}
                </h3>
                
                <h4 style={{ fontSize: '1.05rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                  {t.projects.rag.subtitle}
                </h4>

                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {t.projects.rag.desc}
                </p>

                {/* Interactive Tech Comparison Section */}
                <div style={{ 
                  background: 'rgba(255, 255, 255, 0.02)', 
                  border: '1px solid var(--border-color)',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  marginTop: '0.5rem'
                }}>
                  {/* Tabs */}
                  <div style={{ 
                    display: 'flex', 
                    borderBottom: '1px solid var(--border-color)', 
                    marginBottom: '1rem',
                    gap: '1rem'
                  }}>
                    <button 
                      onClick={() => setActiveRagTab('local')}
                      className={`tab-btn ${activeRagTab === 'local' ? 'active' : ''}`}
                    >
                      <Server size={14} /> {t.projects.rag.tabLocal}
                    </button>
                    <button 
                      onClick={() => setActiveRagTab('azure')}
                      className={`tab-btn ${activeRagTab === 'azure' ? 'active' : ''}`}
                    >
                      <Cloud size={14} /> {t.projects.rag.tabAzure}
                    </button>
                  </div>

                  {/* Tab Contents */}
                  {activeRagTab === 'local' ? (
                    <div>
                      <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '0.75rem' }}>
                        {t.projects.rag.tabLocalDesc}
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                        <span className="mini-tag">FastAPI</span>
                        <span className="mini-tag">PydanticAI</span>
                        <span className="mini-tag">LanceDB (Vektordatabas)</span>
                        <span className="mini-tag">Hugging Face (Vision)</span>
                        <span className="mini-tag">SQLite</span>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '0.75rem' }}>
                        {t.projects.rag.tabAzureDesc}
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                        <span className="mini-tag">Azure Functions</span>
                        <span className="mini-tag">Azure OpenAI (GPT-4o)</span>
                        <span className="mini-tag">Azure AI Search</span>
                        <span className="mini-tag">Microsoft Fabric</span>
                        <span className="mini-tag">Azure Blob Storage</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Graphic Side */}
              <div className="project-graphic-side rag-bg">
                <div className="rag-diagram">
                  <BrainCircuit size={48} className="rag-icon-glow" />
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '1rem',
                  }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>{t.projects.rag.diagramTitle}</span>
                    <span style={{ fontSize: '0.7rem', color: 'var(--color-text-secondary)' }}>{t.projects.rag.diagramSub}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PROJECT 3: PNS-FREE */}
          <div className="card project-card-large" style={{ padding: '0', overflow: 'hidden' }}>
            <div className="project-grid">
              {/* Image / Graphic Side */}
              <div className="project-graphic-side pos-bg">
                <div className="pos-overlay">
                  <Monitor size={48} className="pos-icon-glow" />
                  <span className="pos-platform-badge">FLUTTER & DART</span>
                </div>
              </div>

              {/* Content Side */}
              <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span className="tag tag-accent">{t.projects.pos.tagFullstack}</span>
                  <span className="tag">{t.projects.pos.tagCross}</span>
                  <span className="tag">{t.projects.pos.tagPos}</span>
                </div>

                <h3 style={{ fontSize: '2rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
                  {t.projects.pos.title}
                </h3>
                
                <h4 style={{ fontSize: '1.05rem', color: 'var(--color-accent)', fontWeight: 600 }}>
                  {t.projects.pos.subtitle}
                </h4>

                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {t.projects.pos.desc}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span className="mini-tag">Flutter</span>
                  <span className="mini-tag">Dart</span>
                  <span className="mini-tag">Provider (State)</span>
                  <span className="mini-tag">Hive DB (Offline-first)</span>
                  <span className="mini-tag">Font Awesome</span>
                </div>

                <div style={{ marginTop: '0.5rem' }}>
                  <h5 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>
                    {t.projects.featuresLabel}
                  </h5>
                  <ul style={{ 
                    listStyle: 'none', 
                    display: 'grid', 
                    gridTemplateColumns: '1fr',
                    gap: '0.4rem',
                    fontSize: '0.88rem',
                    color: 'var(--color-text-secondary)'
                  }} className="skills-list-grid">
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <CheckCircle2 size={13} color="var(--color-primary)" /> {t.projects.pos.feat1}
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <CheckCircle2 size={13} color="var(--color-primary)" /> {t.projects.pos.feat2}
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <CheckCircle2 size={13} color="var(--color-primary)" /> {t.projects.pos.feat3}
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <CheckCircle2 size={13} color="var(--color-primary)" /> {t.projects.pos.feat4}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .project-grid {
          display: grid;
          grid-template-columns: 1fr;
        }

        @media (min-width: 992px) {
          .project-grid {
            grid-template-columns: 1fr 1fr;
          }
          .order-content {
            order: 2;
          }
          .skills-list-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        .project-graphic-side {
          min-height: 250px;
          position: relative;
          display: flex;
          align-items: center;
          justifyContent: center;
          padding: 2rem;
          background-size: cover;
          background-position: center;
        }

        /* Gradient backgrounds for game, RAG and POS graphics */
        .game-bg {
          background: linear-gradient(135deg, #1e1b4b 0%, #311042 100%);
          border-bottom: 1px solid var(--border-color);
        }
        @media (min-width: 992px) {
          .game-bg {
            border-bottom: none;
            border-right: 1px solid var(--border-color);
          }
        }

        .rag-bg {
          background: linear-gradient(135deg, #020617 0%, #1e1b4b 100%);
          border-bottom: 1px solid var(--border-color);
        }
        @media (min-width: 992px) {
          .rag-bg {
            border-bottom: none;
            border-left: 1px solid var(--border-color);
          }
        }

        .pos-bg {
          background: linear-gradient(135deg, #0c4a6e 0%, #082f49 100%);
          border-bottom: 1px solid var(--border-color);
        }
        @media (min-width: 992px) {
          .pos-bg {
            border-bottom: none;
            border-right: 1px solid var(--border-color);
          }
        }

        .game-overlay, .rag-diagram, .pos-overlay {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: white;
          text-align: center;
        }

        .game-status-badge, .pos-platform-badge {
          margin-top: 1rem;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          padding: 0.35rem 0.75rem;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .game-icon-glow {
          filter: drop-shadow(0 0 15px rgba(168, 85, 247, 0.6));
          animation: pulse 3s infinite alternate;
        }

        .rag-icon-glow {
          filter: drop-shadow(0 0 15px rgba(99, 102, 241, 0.6));
          animation: pulse 3s infinite alternate;
        }

        .pos-icon-glow {
          filter: drop-shadow(0 0 15px rgba(14, 165, 233, 0.6));
          animation: pulse 3s infinite alternate;
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.05); opacity: 1; }
        }

        .tab-btn {
          background: none;
          border: none;
          color: var(--color-text-secondary);
          padding: 0.5rem 0.25rem;
          cursor: pointer;
          font-size: 0.85rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          transition: var(--transition-smooth);
          border-bottom: 2px solid transparent;
        }

        .tab-btn:hover {
          color: var(--color-text-primary);
        }

        .tab-btn.active {
          color: var(--color-primary);
          border-bottom-color: var(--color-primary);
        }

        .mini-tag {
          font-size: 0.75rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          color: var(--color-text-secondary);
        }
      `}</style>
    </section>
  );
}
