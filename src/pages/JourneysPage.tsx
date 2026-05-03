import { AnimatePresence, motion } from 'motion/react';

interface JourneysPageProps {
  isOpen: boolean;
  onClose: () => void;
}

const destinations = [
  {
    region: 'MEDITERRANEAN',
    title: 'ITALIAN RIVIERA',
    subtitle: 'MONACO · PORTOFINO · CINQUE TERRE',
    duration: '10 DAYS',
    season: 'SUMMER',
    description:
      'Monaco to Portofino via the Ligurian coastline. Private anchorages, coastal villages, and Michelin-starred dining ashore.',
  },
  {
    region: 'CARIBBEAN',
    title: 'LESSER ANTILLES',
    subtitle: 'ANTIGUA · ST. BARTS · GRENADINES',
    duration: '14 DAYS',
    season: 'WINTER',
    description:
      'From Antigua through the Grenadines. Turquoise waters, uninhabited cays, and the finest rum distilleries in the world.',
  },
  {
    region: 'PACIFIC',
    title: 'FRENCH POLYNESIA',
    subtitle: 'TAHITI · MOOREA · BORA BORA',
    duration: '21 DAYS',
    season: 'YEAR-ROUND',
    description:
      'Tahiti, Moorea, Bora Bora and beyond. The ultimate South Pacific expedition through crystal lagoons and volcanic islands.',
  },
  {
    region: 'ATLANTIC',
    title: 'ARC TRANSATLANTIC',
    subtitle: 'LAS PALMAS · BARBADOS',
    duration: '18 DAYS',
    season: 'NOVEMBER',
    description:
      'The grand ocean passage from Las Palmas to Barbados. A test of seamanship and an experience of pure oceanic freedom.',
  },
  {
    region: 'ADRIATIC',
    title: 'DALMATIAN ISLANDS',
    subtitle: 'CROATIA · MONTENEGRO',
    duration: '7 DAYS',
    season: 'SPRING',
    description:
      "Croatia's hidden islands and Montenegro's Bay of Kotor. Medieval ports, olive groves, and crystal-clear swimming.",
  },
  {
    region: 'SCANDINAVIA',
    title: 'NORWEGIAN FJORDS',
    subtitle: 'GEIRANGERFJORD · NÆRØYFJORD',
    duration: '12 DAYS',
    season: 'SUMMER',
    description:
      'Geirangerfjord, Nærøyfjord, and the Arctic Circle. Dramatic cliffs, midnight sun, and utterly pristine wilderness.',
  },
];

export default function JourneysPage({ isOpen, onClose }: JourneysPageProps) {
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
              <span style={{ fontSize: 10, letterSpacing: '0.2em', color: 'rgba(12,12,14,0.5)' }}>JOURNEYS</span>
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

          {/* Intro */}
          <div
            style={{
              padding: 'clamp(48px,6vw,80px)',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 80,
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(36px,5vw,72px)',
                fontWeight: 400,
                lineHeight: 0.95,
                color: '#0c0c0e',
                margin: 0,
                letterSpacing: '-0.01em',
              }}
              dangerouslySetInnerHTML={{
                __html: "THE WORLD'S FINEST WATERS.<br/>YOUR ITINERARY.",
              }}
            />
            <div>
              <p
                style={{
                  fontSize: 11,
                  lineHeight: 1.9,
                  letterSpacing: '0.14em',
                  color: 'rgba(12,12,14,0.6)',
                  margin: '0 0 32px 0',
                }}
              >
                EVERY VOYAGE IS BESPOKE. FROM THE MEDITERRANEAN TO THE PACIFIC, OUR CAPTAINS AND
                CONCIERGE DESIGN EACH PASSAGE AROUND YOUR PREFERENCES, PACE, AND PASSIONS.
              </p>
              <button
                style={{
                  background: 'var(--accent)',
                  color: 'white',
                  padding: '14px 36px',
                  fontSize: 10,
                  letterSpacing: '0.22em',
                  borderRadius: 2,
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  textTransform: 'uppercase',
                }}
              >
                REQUEST A CUSTOM VOYAGE
              </button>
            </div>
          </div>

          {/* Destination Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
              gap: 2,
              padding: '0 clamp(48px,6vw,80px) clamp(48px,6vw,80px)',
            }}
          >
            {destinations.map((dest, i) => (
              <motion.div
                key={i}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.06,
                }}
                style={{ overflow: 'hidden' }}
              >
                {/* Top Panel */}
                <div
                  style={{
                    height: 200,
                    background: 'linear-gradient(135deg, #1c2d45 0%, #2a4a73 100%)',
                    position: 'relative',
                    padding: 28,
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: 24,
                      left: 28,
                      fontSize: 8,
                      letterSpacing: '0.35em',
                      color: 'rgba(147,197,253,0.85)',
                    }}
                  >
                    {dest.region}
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 28,
                      left: 28,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 'clamp(20px,3vw,32px)',
                        color: 'white',
                        fontWeight: 400,
                        marginBottom: 4,
                      }}
                    >
                      {dest.title}
                    </div>
                    <div
                      style={{
                        fontSize: 10,
                        letterSpacing: '0.15em',
                        color: 'rgba(255,255,255,0.6)',
                      }}
                    >
                      {dest.subtitle}
                    </div>
                  </div>
                </div>

                {/* Bottom Panel */}
                <div style={{ padding: '28px 32px' }}>
                  <div style={{ display: 'flex', gap: 32, marginBottom: 16 }}>
                    <div>
                      <div
                        style={{
                          fontSize: 8,
                          letterSpacing: '0.3em',
                          color: 'rgba(12,12,14,0.4)',
                          marginBottom: 4,
                        }}
                      >
                        DURATION
                      </div>
                      <div
                        style={{
                          fontSize: 11,
                          letterSpacing: '0.12em',
                          color: '#0c0c0e',
                        }}
                      >
                        {dest.duration}
                      </div>
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: 8,
                          letterSpacing: '0.3em',
                          color: 'rgba(12,12,14,0.4)',
                          marginBottom: 4,
                        }}
                      >
                        SEASON
                      </div>
                      <div
                        style={{
                          fontSize: 11,
                          letterSpacing: '0.12em',
                          color: '#0c0c0e',
                        }}
                      >
                        {dest.season}
                      </div>
                    </div>
                  </div>
                  <p
                    style={{
                      fontSize: 11,
                      lineHeight: 1.9,
                      letterSpacing: '0.12em',
                      color: 'rgba(12,12,14,0.7)',
                      marginBottom: 24,
                      margin: '0 0 24px 0',
                      textTransform: 'lowercase',
                    }}
                  >
                    {dest.description}
                  </p>
                  <button
                    style={{
                      fontSize: 9,
                      letterSpacing: '0.2em',
                      color: 'var(--accent)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'inherit',
                      textTransform: 'uppercase',
                      padding: 0,
                    }}
                  >
                    REQUEST ITINERARY
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
