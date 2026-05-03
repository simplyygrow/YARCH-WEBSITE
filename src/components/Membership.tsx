import { motion } from 'motion/react';

const tiers = [
  {
    tier: 'SIGNATURE',
    level: 'ENTRY LEVEL',
    price: '$24,000',
    period: '/ YEAR',
    description:
      'YOUR GATEWAY TO THE YORCH EXPERIENCE. ACCESS TO OUR FLEET, MEMBER EVENTS, AND DEDICATED CONCIERGE.',
    features: [
      'DEDICATED BERTH ACCESS',
      'RACE ENTRY DISCOUNTS',
      'CONCIERGE HOTLINE',
      '2 GUEST PASSES / YEAR',
    ],
    accent: false,
  },
  {
    tier: 'COMMODORE',
    level: 'MOST POPULAR',
    price: '$48,000',
    period: '/ YEAR',
    description:
      'THE COMPLETE YORCH MEMBERSHIP. PRIORITY BOOKINGS, RACING PROGRAMME ACCESS, AND EXCLUSIVE EVENTS.',
    features: [
      'PRIORITY FLEET BOOKING',
      'FULL RACING PROGRAMME',
      'ACADEMY ENROLLMENT',
      '6 GUEST PASSES / YEAR',
    ],
    accent: true,
  },
  {
    tier: "FOUNDERS' CIRCLE",
    level: 'INVITATION ONLY',
    price: 'BY INVITATION',
    period: '',
    description:
      'THE ULTIMATE EXPRESSION OF MEMBERSHIP. UNLIMITED ACCESS, BESPOKE VOYAGES, AND FOUNDING MEMBER PRIVILEGES.',
    features: [
      'UNLIMITED FLEET ACCESS',
      'CUSTOM VOYAGE DESIGN',
      'PRIVATE EVENTS & GALAS',
      'EQUITY PARTICIPATION',
    ],
    accent: false,
  },
];

export default function Membership() {
  return (
    <section
      style={{
        backgroundColor: 'var(--bg-base)',
        padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 64 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
          <div style={{ width: 40, height: 2, background: 'var(--accent)' }} />
          <span style={{ fontSize: 10, letterSpacing: '0.3em', color: 'var(--accent)' }}>
            MEMBERSHIP
          </span>
        </div>
        <h2
          style={{
            fontSize: 'clamp(40px,6vw,80px)',
            fontWeight: 400,
            lineHeight: 0.95,
            color: '#0c0c0e',
            margin: 0,
            letterSpacing: '-0.01em',
          }}
        >
          SELECT YOUR TIER.
        </h2>
      </div>

      {/* 2-Column Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'start',
        }}
      >
        {/* Left — Tier Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {tiers.map((t, i) => (
            <motion.div
              key={i}
              className={t.accent ? 'card-accent' : 'card'}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.08,
              }}
              style={{ padding: 32 }}
            >
              {t.accent && (
                <div
                  style={{
                    background: 'var(--accent)',
                    color: 'white',
                    fontSize: 8,
                    letterSpacing: '0.3em',
                    padding: '4px 12px',
                    borderRadius: 2,
                    display: 'inline-block',
                    marginBottom: 16,
                  }}
                >
                  MOST POPULAR
                </div>
              )}
              <div
                style={{
                  fontSize: 8,
                  letterSpacing: '0.3em',
                  color: 'rgba(12,12,14,0.4)',
                  marginBottom: 4,
                }}
              >
                {t.tier}
              </div>
              <div
                style={{
                  fontSize: 9,
                  letterSpacing: '0.25em',
                  color: 'var(--accent)',
                  marginBottom: 16,
                }}
              >
                {t.level}
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 4 }}>
                <span
                  style={{
                    fontSize: 40,
                    color: t.accent ? 'var(--accent)' : '#0c0c0e',
                    fontWeight: 400,
                    lineHeight: 1,
                  }}
                >
                  {t.price}
                </span>
                {t.period && (
                  <span style={{ fontSize: 9, color: 'rgba(12,12,14,0.4)' }}>{t.period}</span>
                )}
              </div>
              <p
                style={{
                  fontSize: 10,
                  lineHeight: 1.8,
                  letterSpacing: '0.14em',
                  color: 'rgba(12,12,14,0.55)',
                  margin: '16px 0 20px',
                }}
              >
                {t.description}
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 24px 0',
                }}
              >
                {t.features.map((f, fi) => (
                  <li
                    key={fi}
                    style={{
                      fontSize: 9,
                      letterSpacing: '0.2em',
                      color: 'rgba(12,12,14,0.6)',
                      padding: '6px 0',
                      borderBottom: '1px solid rgba(12,12,14,0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                    }}
                  >
                    <span style={{ color: 'var(--accent)', fontSize: 10 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                style={{
                  width: '100%',
                  background: 'var(--accent)',
                  color: 'white',
                  padding: 12,
                  fontSize: 9,
                  letterSpacing: '0.2em',
                  borderRadius: 2,
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  textTransform: 'uppercase',
                }}
              >
                APPLY NOW
              </button>
            </motion.div>
          ))}
        </div>

        {/* Right — Sticky Video Panel */}
        <div style={{ position: 'sticky', top: 120 }}>
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 4 }}>
            <video
              src="/videos/interior-tour.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: '100%',
                height: 560,
                objectFit: 'cover',
                display: 'block',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '60%',
                background:
                  'linear-gradient(to top, rgba(5,10,20,0.9) 0%, rgba(5,10,20,0.6) 40%, transparent 80%)',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                padding: 32,
              }}
            >
              <div
                style={{
                  fontSize: 8,
                  letterSpacing: '0.3em',
                  color: 'rgba(147,197,253,0.85)',
                  marginBottom: 12,
                }}
              >
                OCEAN ECLIPSE — MAIN SALON
              </div>
              <p
                style={{
                  fontSize: 11,
                  lineHeight: 1.8,
                  color: 'rgba(255,255,255,0.7)',
                  maxWidth: 280,
                  margin: '0 0 20px 0',
                }}
              >
                "EVERY SURFACE, EVERY FIXTURE, EVERY SILENCE — DESIGNED FOR THOSE WHO NOTICE."
              </p>
              <button
                className="glass-mid"
                style={{
                  padding: '12px 28px',
                  color: 'white',
                  fontSize: 9,
                  letterSpacing: '0.2em',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  textTransform: 'uppercase',
                  borderRadius: 4,
                  border: 'none',
                }}
              >
                APPLY FOR MEMBERSHIP
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
