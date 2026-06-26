import { useState } from 'react';
import { Gamepad2, BrainCircuit, Monitor, CheckCircle2, Server, Cloud, Camera, Database } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import pnsScreenshot from '../assets/pns_screenshot.png';
import nfrScreenshot from '../assets/nfr_screenshot.png';

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
          {/* PROJECT 1: LIA @ ORBISLINKS */}
          <div className="card project-card-large" style={{ padding: '0', overflow: 'hidden' }}>
            <div className="project-grid">
              {/* Content Side */}
              <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }} className="order-content">
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span className="tag tag-accent">{t.projects.lia.tagLia}</span>
                  <span className="tag">{t.projects.lia.tagFullstack}</span>
                  <span className="tag">{t.projects.lia.tagAi}</span>
                </div>

                <h3 style={{ fontSize: '2rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
                  {t.projects.lia.title}
                </h3>

                <h4 style={{ fontSize: '1.05rem', color: 'var(--color-accent)', fontWeight: 600 }}>
                  {t.projects.roleLabel}{t.projects.lia.role}
                </h4>

                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {t.projects.lia.desc1}
                </p>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {t.projects.lia.desc2}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.25rem' }}>
                  <span className="mini-tag">Flask</span>
                  <span className="mini-tag">React</span>
                  <span className="mini-tag">MySQL</span>
                  <span className="mini-tag">Docker</span>
                  <span className="mini-tag">Celery</span>
                  <span className="mini-tag">Alembic</span>
                  <span className="mini-tag">WSL/Linux</span>
                  <span className="mini-tag">RAG / LLMs</span>
                </div>

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
                      <CheckCircle2 size={14} color="var(--color-accent)" /> {t.projects.lia.resp1}
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <CheckCircle2 size={14} color="var(--color-accent)" /> {t.projects.lia.resp2}
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <CheckCircle2 size={14} color="var(--color-accent)" /> {t.projects.lia.resp3}
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <CheckCircle2 size={14} color="var(--color-accent)" /> {t.projects.lia.resp4}
                    </li>
                  </ul>
                </div>
              </div>

              {/* Image / Graphic Side */}
              <div className="project-graphic-side lia-bg">
                <div className="lia-overlay">
                  <Server size={48} className="lia-icon-glow" />
                  <span className="lia-badge">FLASK, MYSQL & RAG</span>
                  <div className="lia-console">
                    <div>$ python chatbot.py --rag</div>
                    <div>&gt; Loading Swedavia API scraper... [OK]</div>
                    <div>&gt; Loading Aena API scraper... [OK]</div>
                    <div>&gt; Initializing Flask B2P2P MVP... [OK]</div>
                    <div>&gt; Initializing feedback RAG analyzer... [OK]</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PROJECT 2: NO FINAL RUN */}
          <div className="card project-card-large" style={{ padding: '0', overflow: 'hidden' }}>
            <div className="project-grid">
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

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.25rem' }}>
                  <span className="mini-tag">Unity</span>
                  <span className="mini-tag">C#</span>
                  <span className="mini-tag">Game Design</span>
                  <span className="mini-tag">Agile / Scrum</span>
                  <span className="mini-tag">Prototyping</span>
                </div>

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

              {/* Image / Graphic Side */}
              <div 
                className="project-graphic-side game-bg"
                style={{
                  backgroundImage: `url(${nfrScreenshot})`,
                }}
              >
                <div className="game-overlay">
                  <Gamepad2 size={48} className="game-icon-glow" />
                  <span className="game-status-badge">{t.projects.statusDeveloping}</span>
                </div>
              </div>
            </div>
          </div>

          {/* PROJECT 3: EXAMENSARBETE (THESIS) */}
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
                <div className="rag-flow-container">
                  {/* Flow Nodes */}
                  <div className="rag-flow-nodes">
                    {/* Node 1: Image Input */}
                    <div className="rag-node">
                      <div className="rag-icon-wrapper node-image">
                        <Camera size={22} />
                      </div>
                      <span className="rag-node-label">IMAGE INPUT</span>
                    </div>
                    
                    {/* Connection 1 */}
                    <div className="rag-connector">
                      <div className="rag-line"></div>
                      <div className="rag-packet packet-1"></div>
                    </div>
                    
                    {/* Node 2: Embedding model */}
                    <div className="rag-node">
                      <div className="rag-icon-wrapper node-ai">
                        <BrainCircuit size={26} className="rag-icon-glow" />
                      </div>
                      <span className="rag-node-label">EMBEDDING</span>
                    </div>
                    
                    {/* Connection 2 */}
                    <div className="rag-connector">
                      <div className="rag-line"></div>
                      <div className="rag-packet packet-2"></div>
                    </div>
                    
                    {/* Node 3: Vector DB */}
                    <div className="rag-node">
                      <div className="rag-icon-wrapper node-db">
                        <Database size={22} />
                      </div>
                      <span className="rag-node-label">VECTOR DB</span>
                    </div>
                  </div>
                  
                  {/* Diagram Title */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '2rem',
                    textAlign: 'center'
                  }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 'bold', letterSpacing: '0.05em', color: 'var(--color-text-primary)' }}>
                      {t.projects.rag.diagramTitle}
                    </span>
                    <span style={{ fontSize: '0.7rem', color: 'var(--color-text-secondary)', marginTop: '0.25rem' }}>
                      {t.projects.rag.diagramSub}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PROJECT 4: PNS-FREE */}
          <div className="card project-card-large" style={{ padding: '0', overflow: 'hidden' }}>
            <div className="project-grid">
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
                  <span className="mini-tag">FastAPI</span>
                  <span className="mini-tag">JavaScript</span>
                  <span className="mini-tag">SQLite</span>
                  <span className="mini-tag">HTML5 / CSS3</span>
                  <span className="mini-tag">Python</span>
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

              {/* Image / Graphic Side */}
              <div 
                className="project-graphic-side pos-bg"
                style={{
                  backgroundImage: `url(${pnsScreenshot})`,
                }}
              >
                <div className="pos-overlay">
                  <Monitor size={48} className="pos-icon-glow" />
                  <span className="pos-platform-badge">FASTAPI & VANILLA JS</span>
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
          justify-content: center;
          padding: 2rem;
          background-size: cover;
          background-position: center;
          border-top: 1px solid var(--border-color);
        }

        @media (min-width: 992px) {
          .project-graphic-side {
            border-top: none;
          }
        }

        /* LIA project specific styles */
        .lia-bg {
          background: linear-gradient(135deg, #020617 0%, #075985 100%);
          border-top: 1px solid var(--border-color);
        }
        @media (min-width: 992px) {
          .lia-bg {
            border-top: none;
            border-right: 1px solid var(--border-color);
          }
        }

        .lia-overlay {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: white;
          text-align: center;
          width: 100%;
        }

        .lia-badge {
          margin-top: 1rem;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          padding: 0.35rem 0.75rem;
          border-radius: 4px;
          background: #030712;
          border: 1px solid rgba(14, 165, 233, 0.4);
          color: var(--color-accent);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        }

        .lia-icon-glow {
          filter: drop-shadow(0 0 15px rgba(14, 165, 233, 0.6));
          animation: pulse 3s infinite alternate;
          color: var(--color-accent);
        }

        .lia-console {
          font-family: 'Courier New', Courier, monospace;
          font-size: 0.75rem;
          color: #10b981;
          opacity: 0.95;
          text-align: left;
          width: 90%;
          max-width: 320px;
          line-height: 1.4;
          padding: 0.85rem;
          background: #030712;
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: 6px;
          margin-top: 1rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
          user-select: none;
        }

        /* Game project specific styles */
        .game-bg {
          border-top: 1px solid var(--border-color);
        }
        .game-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(30, 27, 75, 0.25) 0%, rgba(49, 16, 66, 0.15) 100%);
          z-index: 1;
          transition: var(--transition-smooth);
        }
        .game-bg:hover::before {
          background: linear-gradient(135deg, rgba(30, 27, 75, 0.1) 0%, rgba(49, 16, 66, 0.05) 100%);
        }
        .game-overlay {
          position: relative;
          z-index: 2;
        }
        @media (min-width: 992px) {
          .game-bg {
            border-top: none;
            border-left: 1px solid var(--border-color);
          }
        }

        /* RAG project specific styles */
        .rag-bg {
          background: linear-gradient(135deg, #020617 0%, #1e1b4b 100%);
        }
        @media (min-width: 992px) {
          .rag-bg {
            border-right: 1px solid var(--border-color);
          }
        }

        /* POS project specific styles */
        .pos-bg {
          border-top: 1px solid var(--border-color);
        }
        .pos-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(12, 74, 110, 0.25) 0%, rgba(8, 47, 73, 0.15) 100%);
          z-index: 1;
          transition: var(--transition-smooth);
        }
        .pos-bg:hover::before {
          background: linear-gradient(135deg, rgba(12, 74, 110, 0.1) 0%, rgba(8, 47, 73, 0.05) 100%);
        }
        .pos-overlay {
          position: relative;
          z-index: 2;
        }
        @media (min-width: 992px) {
          .pos-bg {
            border-top: none;
            border-left: 1px solid var(--border-color);
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

        /* RAG Flow Diagram Styles */
        .rag-flow-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 95%;
          max-width: 480px;
          z-index: 2;
        }

        .rag-flow-nodes {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          width: 100%;
        }

        .rag-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.6rem;
        }

        .rag-icon-wrapper {
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-smooth);
        }

        .rag-icon-wrapper svg {
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid var(--border-color);
          border-radius: 50%;
          padding: 0.7rem;
          width: 46px;
          height: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-smooth);
        }

        .node-image svg {
          color: #06b6d4;
          border-color: rgba(6, 182, 212, 0.3);
          box-shadow: 0 0 15px rgba(6, 182, 212, 0.15);
        }

        .node-ai svg {
          color: #a855f7;
          border-color: rgba(168, 85, 247, 0.3);
          box-shadow: 0 0 20px rgba(168, 85, 247, 0.2);
          width: 54px;
          height: 54px;
          padding: 0.8rem;
        }

        .node-db svg {
          color: #10b981;
          border-color: rgba(16, 185, 129, 0.3);
          box-shadow: 0 0 15px rgba(16, 185, 129, 0.15);
        }

        .rag-node:hover .rag-icon-wrapper svg {
          transform: scale(1.15);
          box-shadow: 0 0 25px currentColor;
        }

        .rag-node-label {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: var(--color-text-secondary);
          white-space: nowrap;
        }

        .rag-connector {
          flex: 1;
          height: 56px;
          position: relative;
          margin: 0 0.5rem;
          min-width: 30px;
        }

        .rag-line {
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.02));
          position: absolute;
          top: calc(50% - 1px);
          left: 0;
        }

        .rag-packet {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          position: absolute;
          top: calc(50% - 4px);
          background: #ffffff;
          z-index: 3;
          opacity: 0;
        }

        .packet-1 {
          box-shadow: 0 0 6px #ffffff, 0 0 12px #06b6d4, 0 0 20px #a855f7;
          animation: flowPacket1 2.2s infinite linear;
        }

        .packet-2 {
          box-shadow: 0 0 6px #ffffff, 0 0 12px #a855f7, 0 0 20px #10b981;
          animation: flowPacket2 2.2s infinite linear;
          animation-delay: 1.1s;
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

        @keyframes flowPacket1 {
          0% { left: 0%; opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }

        @keyframes flowPacket2 {
          0% { left: 0%; opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
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

