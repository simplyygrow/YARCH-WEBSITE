import { useState } from 'react';
import { motion } from 'motion/react';
import { yachts } from '../data/yachts';
import SpecDrawer from './SpecDrawer';

export default function YachtSpecs() {
  const [selectedYacht, setSelectedYacht] = useState<string | null>(null);

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
          <span
            style={{
              fontSize: 10,
              letterSpacing: '0.3em',
              color: 'var(--accent)',
            }}
          >
            THE FLEET
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
          dangerouslySetInnerHTML={{ __html: 'THREE VESSELS.<br/>ONE STANDARD.' }}
        />
      </div>

      {/* 3-Column Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16,
        }}
      >
        {yachts.map((yacht, i) => (
          <motion.div
            key={yacht.id}
            className="yacht-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
              delay: i * 0.12,
            }}
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 4,
              border: '1px solid rgba(12,12,14,0.06)',
              background: 'white',
              cursor: 'default',
              transition: 'transform 0.5s var(--ease-luxury), box-shadow 0.5s var(--ease-luxury)',
            }}
            whileHover={{
              y: -4,
              boxShadow: '0 12px 48px rgba(0,0,0,0.12)',
            }}
          >
            {/* Video */}
            <div
              style={{
                aspectRatio: '9/16',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <video
                className="yacht-card-video"
                src={`/videos/fleet-${yacht.id}.mp4`}
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.8s var(--ease-luxury)',
                }}
              />
              {/* Bottom gradient */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(to top, rgba(10,15,26,0.85) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)',
                  pointerEvents: 'none',
                }}
              />
              {/* Tag badge */}
              <div
                style={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  background: 'rgba(0,0,0,0.2)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: 100,
                  padding: '6px 14px',
                  fontSize: 8,
                  letterSpacing: '0.3em',
                  color: 'white',
                  border: '1px solid rgba(255,255,255,0.15)',
                }}
              >
                {i === 0 ? 'FLAGSHIP' : i === 1 ? 'PERFORMANCE' : 'EXPLORER'}
              </div>
              {/* Yacht info */}
              <div style={{ position: 'absolute', bottom: 20, left: 20 }}>
                <div
                  style={{
                    fontSize: 8,
                    letterSpacing: '0.25em',
                    color: 'rgba(255,255,255,0.5)',
                    marginBottom: 4,
                  }}
                >
                  {yacht.tagline}
                </div>
                <div
                  style={{
                    fontSize: 17,
                    letterSpacing: '0.08em',
                    color: 'white',
                  }}
                >
                  {yacht.name}
                </div>
              </div>
            </div>

            {/* Info Panel */}
            <div style={{ padding: '24px 24px 28px', background: 'white' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '8px 4px',
                  marginBottom: 20,
                }}
              >
                {yacht.quickSpecs.slice(0, 4).map((spec, si) => (
                  <div key={si}>
                    <div
                      style={{
                        fontSize: 8,
                        letterSpacing: '0.25em',
                        color: 'rgba(12,12,14,0.38)',
                        marginBottom: 2,
                      }}
                    >
                      {spec.label}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        letterSpacing: '0.1em',
                        color: 'var(--accent)',
                        fontWeight: 400,
                      }}
                    >
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button
                  onClick={() => setSelectedYacht(yacht.id)}
                  style={{
                    background: 'var(--accent)',
                    color: 'white',
                    padding: '10px 0',
                    flex: 1,
                    fontSize: 9,
                    letterSpacing: '0.2em',
                    borderRadius: 2,
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    textTransform: 'uppercase',
                  }}
                >
                  QUICK SPECS
                </button>
                <button
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(12,12,14,0.5)',
                    color: 'rgba(12,12,14,0.5)',
                    padding: '10px 0',
                    flex: 1,
                    fontSize: 9,
                    letterSpacing: '0.2em',
                    borderRadius: 2,
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    textTransform: 'uppercase',
                  }}
                >
                  FULL SHEET
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Compare Button */}
      <div style={{ textAlign: 'center', marginTop: 48 }}>
        <button
          style={{
            background: 'var(--accent)',
            color: 'white',
            padding: '14px 40px',
            fontSize: 10,
            letterSpacing: '0.22em',
            borderRadius: 2,
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'inherit',
            textTransform: 'uppercase',
          }}
        >
          COMPARE ALL THREE
        </button>
      </div>

      <SpecDrawer yachtId={selectedYacht} onClose={() => setSelectedYacht(null)} />
    </section>
  );
}
