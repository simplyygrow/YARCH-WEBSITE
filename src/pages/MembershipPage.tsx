import { AnimatePresence, motion } from 'motion/react';

interface MembershipPageProps {
  isOpen: boolean;
  onClose: () => void;
}

const tiers = [
  {
    name: 'SIGNATURE',
    price: '$24,000 / YEAR',
    features: [
      'DEDICATED BERTH ACCESS',
      'RACE ENTRY DISCOUNTS',
      'CONCIERGE HOTLINE',
      '2 GUEST PASSES / YEAR',
    ],
    cta: 'APPLY',
    isPopular: false,
    isDark: false,
  },
  {
    name: 'COMMODORE',
    price: '$48,000 / YEAR',
    features: [
      'PRIORITY FLEET BOOKING',
      'FULL RACING PROGRAMME',
      'ACADEMY ENROLLMENT',
      '6 GUEST PASSES / YEAR',
    ],
    cta: 'APPLY',
    isPopular: true,
    isDark: true,
  },
  {
    name: "FOUNDERS' CIRCLE",
    price: 'BY INVITATION ONLY',
    features: [
      'UNLIMITED FLEET ACCESS',
      'CUSTOM VOYAGE DESIGN',
      'PRIVATE EVENTS & GALAS',
      'EQUITY PARTICIPATION',
    ],
    cta: 'ENQUIRE',
    isPopular: false,
    isDark: false,
  },
];

const perks = [
  { title: 'PRIVATE BERTHS', description: 'RESERVED DOCK SPACE IN KEY MARINAS WORLDWIDE.' },
  { title: 'CAPTAIN ON CALL', description: 'YOUR PERSONAL CAPTAIN AVAILABLE FOR ANY VOYAGE.' },
  { title: 'RACE ENTRIES', description: 'GUARANTEED ENTRIES IN PREMIER RACING EVENTS.' },
  { title: 'PROVISIONING', description: 'FULL YACHT PROVISIONING BEFORE EVERY DEPARTURE.' },
];

export default function MembershipPage({ isOpen, onClose }: MembershipPageProps) {
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
              <span style={{ fontSize: 10, letterSpacing: '0.2em', color: 'rgba(12,12,14,0.5)' }}>MEMBERSHIP</span>
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
          <div style={{ padding: 'clamp(48px,6vw,80px)', paddingBottom: 'clamp(32px,4vw,48px)' }}>
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
              JOIN THE CLUB.
            </h2>
            <p
              style={{
                fontSize: 11,
                lineHeight: 1.9,
                letterSpacing: '0.14em',
                color: 'rgba(12,12,14,0.6)',
                maxWidth: 520,
                margin: '0 0 32px 0',
              }}
            >
              THREE TIERS OF MEMBERSHIP, EACH DESIGNED TO MATCH YOUR RELATIONSHIP WITH THE SEA.
              FROM FIRST-TIME SAILORS TO LIFELONG DEVOTEES.
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
              APPLY NOW
            </button>
          </div>

          {/* Tier Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 24,
              padding: 'clamp(32px,4vw,48px)',
            }}
          >
            {tiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={tier.isDark ? '' : 'card'}
                style={{
                  padding: 40,
                  ...(tier.isDark
                    ? {
                        background: '#1c3557',
                        color: 'white',
                        borderRadius: 3,
                        boxShadow: '0 8px 48px rgba(28,53,87,0.3)',
                      }
                    : {}),
                }}
              >
                {tier.isPopular && (
                  <div
                    style={{
                      background: 'rgba(147,197,253,0.2)',
                      color: 'rgba(147,197,253,0.9)',
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
                    letterSpacing: '0.35em',
                    color: tier.isDark ? 'rgba(147,197,253,0.7)' : 'rgba(12,12,14,0.4)',
                    marginBottom: 16,
                  }}
                >
                  {tier.name}
                </div>
                <div
                  style={{
                    fontSize: 32,
                    fontWeight: 400,
                    color: tier.isDark ? 'white' : '#0c0c0e',
                    marginBottom: 24,
                    lineHeight: 1,
                  }}
                >
                  {tier.price}
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0' }}>
                  {tier.features.map((f, fi) => (
                    <li
                      key={fi}
                      style={{
                        fontSize: 9,
                        letterSpacing: '0.2em',
                        color: tier.isDark ? 'rgba(255,255,255,0.6)' : 'rgba(12,12,14,0.6)',
                        padding: '8px 0',
                        borderBottom: `1px solid ${
                          tier.isDark ? 'rgba(255,255,255,0.08)' : 'rgba(12,12,14,0.05)'
                        }`,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                      }}
                    >
                      <span
                        style={{
                          color: tier.isDark ? 'rgba(147,197,253,0.7)' : 'var(--accent)',
                          fontSize: 10,
                        }}
                      >
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  style={{
                    width: '100%',
                    padding: '12px 0',
                    fontSize: 9,
                    letterSpacing: '0.2em',
                    borderRadius: 2,
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    textTransform: 'uppercase',
                    ...(tier.isDark
                      ? {
                          background: 'transparent',
                          border: '1px solid rgba(255,255,255,0.3)',
                          color: 'white',
                        }
                      : {
                          background: 'var(--accent)',
                          border: 'none',
                          color: 'white',
                        }),
                  }}
                >
                  {tier.cta}
                </button>
              </motion.div>
            ))}
          </div>

          {/* Perks Strip */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              padding: 'clamp(32px,4vw,48px)',
              borderTop: '1px solid rgba(12,12,14,0.07)',
              gap: 24,
            }}
          >
            {perks.map((perk, i) => (
              <div key={i}>
                <div
                  style={{
                    fontSize: 10,
                    letterSpacing: '0.2em',
                    color: '#0c0c0e',
                    marginBottom: 8,
                  }}
                >
                  {perk.title}
                </div>
                <div
                  style={{
                    fontSize: 10,
                    lineHeight: 1.8,
                    letterSpacing: '0.12em',
                    color: 'rgba(12,12,14,0.5)',
                  }}
                >
                  {perk.description}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
