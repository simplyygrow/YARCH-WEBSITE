export default function Footer() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: 480 }}>
      {/* Video */}
      <video
        src="/videos/hull-cutting.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(5,10,20,0.75) 0%, rgba(5,10,20,0.82) 100%)',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          padding: 'clamp(64px,8vw,100px) clamp(24px,6vw,96px)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr 1fr',
            gap: 80,
          }}
        >
          {/* Col 1 — Logo */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="5" r="2.4" stroke="white" strokeWidth="1.5" fill="none" />
                <line x1="10" y1="7.4" x2="10" y2="16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M5 11 Q10 14 15 11" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                <line x1="7" y1="16" x2="13" y2="16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span style={{ fontSize: 20, color: 'white', letterSpacing: '0.28em' }}>YORCH</span>
            </div>
            <p
              style={{
                fontSize: 9,
                letterSpacing: '0.28em',
                color: 'rgba(255,255,255,0.4)',
                marginTop: 16,
                margin: '16px 0 0 0',
              }}
            >
              SINCE 1975. THE SEA IS YOURS.
            </p>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <div
              style={{
                fontSize: 8,
                letterSpacing: '0.35em',
                color: 'rgba(147,197,253,0.7)',
                marginBottom: 20,
              }}
            >
              NAVIGATION
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['JOURNEYS', 'FLEET', 'MEMBERSHIP', 'ACADEMY', 'BLOG'].map((link) => (
                <a
                  key={link}
                  href="#"
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.85)')
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.4)')
                  }
                  style={{
                    fontSize: 9,
                    letterSpacing: '0.2em',
                    color: 'rgba(255,255,255,0.4)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3 — Services */}
          <div>
            <div
              style={{
                fontSize: 8,
                letterSpacing: '0.35em',
                color: 'rgba(147,197,253,0.7)',
                marginBottom: 20,
              }}
            >
              SERVICES
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                'PRIVATE CHARTER',
                'CORPORATE EVENTS',
                'RACE PROGRAMME',
                'CONCIERGE',
                'PRESS & MEDIA',
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.85)')
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.4)')
                  }
                  style={{
                    fontSize: 9,
                    letterSpacing: '0.2em',
                    color: 'rgba(255,255,255,0.4)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div
          style={{
            marginTop: 64,
            paddingTop: 24,
            borderTop: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontSize: 8,
              letterSpacing: '0.2em',
              color: 'rgba(255,255,255,0.25)',
            }}
          >
            © 2025 YORCH PRIVATE YACHT CLUB. ALL RIGHTS RESERVED.
          </span>
          <div style={{ display: 'flex', gap: 24 }}>
            {['PRIVACY POLICY', 'TERMS'].map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  fontSize: 8,
                  letterSpacing: '0.2em',
                  color: 'rgba(255,255,255,0.25)',
                  textDecoration: 'none',
                }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
