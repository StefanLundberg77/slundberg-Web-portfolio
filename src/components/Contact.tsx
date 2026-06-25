import { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Github = ({ size = 20 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const Linkedin = ({ size = 20 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    // Simulate sending email
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const contactLinks = [
    {
      icon: <Mail size={20} />,
      label: t.contact.infoEmail,
      value: 'stefan@slundberg.com',
      href: 'mailto:stefan@slundberg.com'
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/stefan-lundberg',
      href: 'https://linkedin.com' // Placeholder to be edited
    },
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      value: 'github.com/stefan-lundberg',
      href: 'https://github.com' // Placeholder to be edited
    }
  ];

  return (
    <section id="contact" className="section" style={{ paddingBottom: '8rem' }}>
      <div className="container">
        <h2 className="section-title">
          {t.contact.title}<span>{t.contact.titleSpan}</span>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'start'
        }} className="contact-grid">
          
          {/* Info Side */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <h3 style={{
              fontSize: '1.75rem',
              fontWeight: 700,
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-text-primary)'
            }}>
              {t.contact.subtitle}
            </h3>
            
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: '1.7' }}>
              {t.contact.desc}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1rem' }}>
              {contactLinks.map((link, idx) => (
                <a 
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.25rem',
                    padding: '1.25rem 1.5rem',
                    textDecoration: 'none',
                  }}
                >
                  <div style={{
                    background: 'rgba(99, 102, 241, 0.08)',
                    border: '1px solid rgba(99, 102, 241, 0.15)',
                    borderRadius: '10px',
                    padding: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary)'
                  }}>
                    {link.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', fontWeight: 600 }}>
                      {link.label}
                    </div>
                    <div style={{ fontSize: '0.95rem', color: 'var(--color-text-primary)', fontWeight: 500 }}>
                      {link.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="card" style={{ padding: '2.5rem' }}>
            {status === 'success' ? (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '2rem 0',
                gap: '1rem'
              }}>
                <div style={{
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  borderRadius: '50%',
                  width: '60px',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-success)',
                  boxShadow: '0 0 20px rgba(16, 185, 129, 0.2)'
                }}>
                  <CheckCircle size={32} />
                </div>
                <h4 style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                  {t.contact.successTitle}
                </h4>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
                  {t.contact.successDesc}
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="btn btn-secondary"
                  style={{ marginTop: '1.5rem', padding: '0.5rem 1.5rem' }}
                >
                  {t.contact.successBtn}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="name" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-secondary)' }}>
                    {t.contact.labelName}
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    disabled={status === 'sending'}
                    placeholder={t.contact.placeholderName}
                    style={inputStyle}
                    className="form-input"
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="email" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-secondary)' }}>
                    {t.contact.labelEmail}
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    disabled={status === 'sending'}
                    placeholder={t.contact.placeholderEmail}
                    style={inputStyle}
                    className="form-input"
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="message" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-secondary)' }}>
                    {t.contact.labelMessage}
                  </label>
                  <textarea 
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    disabled={status === 'sending'}
                    placeholder={t.contact.placeholderMessage}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    className="form-input"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'sending'}
                  className="btn btn-primary"
                  style={{
                    justifyContent: 'center',
                    width: '100%',
                    marginTop: '0.5rem'
                  }}
                >
                  {status === 'sending' ? (
                    t.contact.btnSending
                  ) : (
                    <>
                      {t.contact.btnSend} <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        
        .form-input:focus {
          border-color: var(--color-primary) !important;
          box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.15);
          outline: none;
        }
      `}</style>
    </section>
  );
}

const inputStyle = {
  background: 'rgba(6, 8, 19, 0.4)',
  border: '1px solid var(--border-color)',
  borderRadius: '8px',
  padding: '0.75rem 1rem',
  color: 'var(--color-text-primary)',
  fontSize: '0.95rem',
  fontFamily: 'var(--font-body)',
  transition: 'all 0.3s ease',
  width: '100%'
};
