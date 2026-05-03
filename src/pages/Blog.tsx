import { AnimatePresence, motion } from 'motion/react';

interface BlogProps {
  isOpen: boolean;
  onClose: () => void;
}

const articles = [
  {
    num: '01',
    category: 'VOYAGE',
    date: 'JANUARY 2025',
    title: 'THE AMALFI CORRIDOR',
    excerpt:
      'A PASSAGE ALONG THE ITALIAN COAST THAT REDEFINES WHAT IT MEANS TO SAIL IN STYLE. FROM POSITANO TO CAPRI, EVERY MILE IS A MASTERPIECE.',
    image: '/images/PHOTO-1.jpeg',
  },
  {
    num: '02',
    category: 'PHILOSOPHY',
    date: 'DECEMBER 2024',
    title: 'ON STILL WATER',
    excerpt:
      'REFLECTIONS ON THE ART OF SLOWING DOWN. WHY THE MOST POWERFUL MOMENTS AT SEA ARE OFTEN THE QUIETEST.',
    image: '/images/PHOTO-2.jpeg',
  },
  {
    num: '03',
    category: 'DESTINATION',
    date: 'NOVEMBER 2024',
    title: 'THE AEGEAN REWRITTEN',
    excerpt:
      'THE GREEK ISLANDS AS YOU HAVE NEVER EXPERIENCED THEM. PRIVATE ANCHORAGES, HIDDEN TAVERNAS, AND ANCIENT HARBOURS.',
    image: '/images/PHOTO-4.jpeg',
  },
  {
    num: '04',
    category: 'ENGINEERING',
    date: 'OCTOBER 2024',
    title: 'HULL DESIGN IN THE AGE OF SILENCE',
    excerpt:
      'HOW MODERN HULL ENGINEERING IS CREATING VESSELS THAT MOVE THROUGH WATER WITH UNPRECEDENTED QUIET AND EFFICIENCY.',
    image: '/images/PHOTO-1.jpeg',
  },
];

export default function Blog({ isOpen, onClose }: BlogProps) {
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
              <span style={{ fontSize: 10, letterSpacing: '0.2em', color: 'rgba(12,12,14,0.5)' }}>JOURNAL</span>
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
                transition: 'all 0.3s ease',
              }}
            >
              × CLOSE
            </button>
          </div>

          {/* Featured Article */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              minHeight: 480,
            }}
          >
            <div
              style={{
                backgroundImage: 'url(/images/PHOTO-3.jpeg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: 'clamp(48px,6vw,80px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}
            >
              <div
                style={{
                  fontSize: 8,
                  letterSpacing: '0.3em',
                  color: 'rgba(147,197,253,0.85)',
                  marginBottom: 16,
                }}
              >
                FEATURED
              </div>
              <div
                style={{
                  fontSize: 9,
                  letterSpacing: '0.25em',
                  color: 'rgba(255,255,255,0.4)',
                  marginBottom: 20,
                }}
              >
                FEBRUARY 2025
              </div>
              <div
                style={{
                  width: 24,
                  height: 1,
                  background: 'rgba(147,197,253,0.4)',
                  marginBottom: 20,
                }}
              />
              <h2
                style={{
                  fontSize: 'clamp(28px,4vw,48px)',
                  fontWeight: 400,
                  lineHeight: 0.95,
                  color: 'white',
                  margin: '0 0 20px 0',
                }}
              >
                THE MEANING OF STILL WATER
              </h2>
              <p
                style={{
                  fontSize: 10,
                  lineHeight: 1.9,
                  letterSpacing: '0.15em',
                  color: 'rgba(255,255,255,0.55)',
                  maxWidth: 360,
                  margin: 0,
                }}
              >
                AN ESSAY ON SILENCE, SEA, AND THE PURSUIT OF MEANING BEYOND THE HORIZON. A FOUNDING
                MEMBER REFLECTS ON FIFTY YEARS OF YORCH.
              </p>
            </div>
            <div
              style={{
                background: 'white',
                padding: 'clamp(48px,6vw,80px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}
            >
              <p
                style={{
                  fontStyle: 'italic',
                  fontSize: 14,
                  lineHeight: 1.9,
                  color: 'rgba(12,12,14,0.6)',
                  marginBottom: 32,
                  margin: '0 0 32px 0',
                }}
              >
                "THE SEA DOES NOT REWARD HASTE. IT REWARDS THOSE WHO KNOW HOW TO WAIT, TO LISTEN,
                AND TO MOVE WITH PURPOSE."
              </p>
              <a
                href="#"
                style={{
                  fontSize: 10,
                  letterSpacing: '0.2em',
                  color: 'var(--accent)',
                  textDecoration: 'none',
                }}
              >
                CONTINUE READING →
              </a>
            </div>
          </div>

          {/* Article Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 24,
              padding: 'clamp(40px,5vw,64px)',
            }}
          >
            {articles.map((article, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.08,
                }}
                style={{
                  overflow: 'hidden',
                  borderRadius: 3,
                  border: '1px solid rgba(12,12,14,0.06)',
                }}
              >
                <div
                  style={{
                    height: 180,
                    backgroundImage: `url(${article.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: 24,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                  }}
                >
                  <div
                    style={{
                      fontSize: 8,
                      letterSpacing: '0.3em',
                      color: 'rgba(147,197,253,0.7)',
                      marginBottom: 4,
                    }}
                  >
                    {article.category}
                  </div>
                  <div
                    style={{
                      fontSize: 9,
                      letterSpacing: '0.2em',
                      color: 'rgba(255,255,255,0.4)',
                    }}
                  >
                    {article.num}
                  </div>
                </div>
                <div style={{ background: 'white', padding: 24 }}>
                  <div
                    style={{
                      fontSize: 9,
                      letterSpacing: '0.2em',
                      color: 'rgba(12,12,14,0.35)',
                      marginBottom: 8,
                    }}
                  >
                    {article.date}
                  </div>
                  <h3
                    style={{
                      fontSize: 16,
                      fontWeight: 400,
                      letterSpacing: '0.05em',
                      color: '#0c0c0e',
                      margin: '0 0 12px 0',
                    }}
                  >
                    {article.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 10,
                      lineHeight: 1.8,
                      letterSpacing: '0.12em',
                      color: 'rgba(12,12,14,0.55)',
                      margin: '0 0 16px 0',
                    }}
                  >
                    {article.excerpt}
                  </p>
                  <a
                    href="#"
                    style={{
                      fontSize: 9,
                      letterSpacing: '0.2em',
                      color: 'var(--accent)',
                      textDecoration: 'none',
                    }}
                  >
                    READ MORE
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
