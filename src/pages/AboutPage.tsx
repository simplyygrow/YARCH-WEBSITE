import { AnimatePresence, motion } from 'motion/react';

interface AboutPageProps {
  isOpen: boolean;
  onClose: () => void;
}

const stats = [
  { value: '50+', label: 'YEARS' },
  { value: '3', label: 'VESSELS' },
  { value: '12', label: 'COUNTRIES' },
  { value: '1,400+', label: 'MEMBERS' },
];

const values = [
  {
    title: 'DISCRETION',
    description: 'PRIVACY IS NOT A FEATURE. IT IS THE FOUNDATION OF EVERYTHING WE DO.',
  },
  {
    title: 'PRECISION',
    description: 'EVERY DETAIL MATTERS. FROM NAVIGATION TO NAPKIN FOLDS.',
  },
  {
    title: 'HERITAGE',
    description: 'FIFTY YEARS OF TRADITION INFORM EVERY DECISION WE MAKE.',
  },
  {
    title: 'ADVENTURE',
    description: 'THE SEA REWARDS THOSE WHO SEEK. WE HELP YOU FIND WHAT OTHERS CANNOT.',
  },
];

const timeline = [
  { year: '1975', event: 'FOUNDED IN MONACO BY ÉDOUARD MARCHETTI WITH A SINGLE VESSEL AND A VISION FOR PRIVATE MARITIME EXCELLENCE.' },
  { year: '1981', event: 'EXPANDED TO A THREE-VESSEL FLEET SERVING THE MEDITERRANEAN EXCLUSIVELY. ESTABLISHED THE FIRST MEMBER PROGRAMME.' },
  { year: '1994', event: 'TRANSATLANTIC OPERATIONS LAUNCHED; INAUGURAL CARIBBEAN SEASON. MEMBERSHIP EXCEEDED 400.' },
  { year: '2003', event: 'PACIFIC PROGRAMME INTRODUCED; POLYNESIA AND NEW ZEALAND ROUTES ESTABLISHED. FLEET UPGRADED TO CUSTOM-BUILT VESSELS.' },
  { year: '2012', event: 'ACADEMY PROGRAMME LAUNCHED, FORMALISING OUR SAILING EDUCATION OFFERING. RACING CALENDAR EXPANDED TO 12 EVENTS.' },
  { year: '2025', event: 'CELEBRATING FIFTY YEARS, YORCH CONTINUES TO DEFINE PRIVATE MARITIME EXCELLENCE WITH 1,400+ MEMBERS WORLDWIDE.' },
];

export default function AboutPage({ isOpen, onClose }: AboutPageProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            backgroundColor: 'var(--bg-base)',
            overflowY: 'auto',
          }}
        >
          {/* Sticky Header */}
          <div
            style={{
              position: 'sticky',
              top: 0,
              zIndex: 10,
              height: 72,
              backgroundColor: 'rgba(248,246,242,0.92)',
              backdropFilter: 'blur(24px) saturate(180%)',
              borderBottom: '1px solid rgba(12,12,14,0.07)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 clamp(24px,6vw,80px)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="5" r="2.4" stroke="#1c3557" strokeWidth="1.5" fill="none" />
                <line x1="10" y1="7.4" x2="10" y2="16" stroke="#1c3557" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M5 11 Q10 14 15 11" stroke="#1c3557" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                <line x1="7" y1="16" x2="13" y2="16" stroke="#1c3557" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span style={{ fontSize: 'clamp(14px,1.5vw,16px)', letterSpacing: '0.28em', color: '#0c0c0e' }}>YORCH</span>
              <span style={{ color: 'rgba(12,12,14,0.3)', fontSize: 12 }}>/</span>
              <span style={{ fontSize: 10, letterSpacing: '0.2em', color: 'rgba(12,12,14,0.5)' }}>ABOUT</span>
            </div>
            <button
              onClick={onClose}
              style={{
                padding: '9px 22px',
                fontSize: 10,
                letterSpacing: '0.2em',
                color: 'rgba(12,12,14,0.6)',
                background: 'transparent',
                border: '1px solid rgba(12,12,14,0.1)',
                borderRadius: 100,
                cursor: 'pointer',
                fontFamily: 'var(--font-serif)',
                textTransform: 'uppercase',
              }}
            >
              × CLOSE
            </button>
          </div>

          {/* Section 1 — Intro */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '0.6fr 1fr',
              padding: 'clamp(48px,6vw,80px)',
              gap: 80,
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: 'clamp(36px,5vw,72px)',
                  fontWeight: 400,
                  lineHeight: 0.95,
                  color: '#0c0c0e',
                  margin: '0 0 24px 0',
                  letterSpacing: '-0.01em',
                }}
              >
                FIFTY YEARS AT SEA.
              </h2>
              <p
                style={{
                  fontSize: 11,
                  lineHeight: 1.9,
                  letterSpacing: '0.14em',
                  color: 'rgba(12,12,14,0.6)',
                  margin: 0,
                }}
              >
                SINCE 1975, YORCH HAS DEFINED WHAT IT MEANS TO EXPERIENCE THE SEA WITH DIGNITY,
                PURPOSE, AND UNCOMPROMISING STANDARDS.
              </p>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 32,
              }}
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  style={{
                    borderTop: '2px solid var(--accent)',
                    paddingTop: 16,
                  }}
                >
                  <div
                    style={{
                      fontSize: 'clamp(36px,4vw,56px)',
                      fontWeight: 400,
                      color: '#0c0c0e',
                      lineHeight: 1,
                      marginBottom: 4,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: 9,
                      letterSpacing: '0.25em',
                      color: 'rgba(12,12,14,0.45)',
                    }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Section 2 — Values */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              padding: 'clamp(32px,4vw,48px)',
              borderTop: '1px solid rgba(12,12,14,0.07)',
              gap: 32,
            }}
          >
            {values.map((val, i) => (
              <div
                key={i}
                style={{
                  borderTop: '2px solid var(--accent)',
                  paddingTop: 20,
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    letterSpacing: '0.1em',
                    color: '#0c0c0e',
                    marginBottom: 8,
                  }}
                >
                  {val.title}
                </div>
                <div
                  style={{
                    fontSize: 10,
                    lineHeight: 1.8,
                    letterSpacing: '0.12em',
                    color: 'rgba(12,12,14,0.6)',
                  }}
                >
                  {val.description}
                </div>
              </div>
            ))}
          </div>

          {/* Section 3 — Timeline */}
          <div
            style={{
              maxWidth: 720,
              padding: 'clamp(32px,4vw,48px)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                marginBottom: 32,
              }}
            >
              <div style={{ width: 40, height: 2, background: 'var(--accent)' }} />
              <span style={{ fontSize: 10, letterSpacing: '0.3em', color: 'var(--accent)' }}>
                OUR HISTORY
              </span>
            </div>
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '100px 1fr',
                  gap: 24,
                  borderBottom: '1px solid rgba(12,12,14,0.06)',
                  padding: '20px 0',
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    letterSpacing: '0.1em',
                    color: 'var(--accent)',
                  }}
                >
                  {item.year}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    lineHeight: 1.8,
                    letterSpacing: '0.12em',
                    color: 'rgba(12,12,14,0.7)',
                  }}
                >
                  {item.event}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
