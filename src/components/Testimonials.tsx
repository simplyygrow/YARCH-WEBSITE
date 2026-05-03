import { motion } from 'motion/react';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
    <section
      className="video-section"
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(80px,10vw,140px) 0',
      }}
    >
      {/* Video */}
      <video
        src="/videos/testimonial-bg.mp4"
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
          opacity: 0.6,
        }}
      />
      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, var(--bg-base) 0%, rgba(248,246,242,0.6) 100%)',
        }}
      />

      <div style={{ position: 'relative', zIndex: 10 }}>
      {/* Header */}
      <div style={{ paddingLeft: 'clamp(24px,6vw,96px)', marginBottom: 48 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
          <div style={{ width: 40, height: 2, background: 'var(--accent)' }} />
          <span style={{ fontSize: 10, letterSpacing: '0.3em', color: 'var(--accent)' }}>
            MEMBER VOICES
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
          THOSE WHO KNOW.
        </h2>
      </div>

      {/* Marquee Wrapper */}
      <div
        style={{
          width: '100%',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <motion.div
          animate={{
            x: [0, '-50%'],
          }}
          transition={{
            duration: 35,
            ease: 'linear',
            repeat: Infinity,
          }}
          style={{
            display: 'flex',
            gap: 20,
            paddingLeft: 'clamp(24px,6vw,96px)',
            width: 'max-content',
          }}
        >
          {/* Double the cards for seamless loop */}
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="card"
              style={{
                flexShrink: 0,
                width: 'clamp(280px,30vw,380px)',
                padding: 36,
                background: 'rgba(255,255,255,0.4)',
                backdropFilter: 'blur(10px)',
                borderRadius: '2px',
                border: '1px solid rgba(255,255,255,0.3)',
              }}
            >
              <p
                style={{
                  fontStyle: 'italic',
                  fontSize: 12,
                  lineHeight: 1.9,
                  color: 'rgba(12,12,14,0.7)',
                  marginBottom: 28,
                  margin: '0 0 28px 0',
                }}
              >
                "{t.quote}"
              </p>
              <div
                style={{
                  width: 24,
                  height: 1,
                  background: 'var(--accent)',
                  marginBottom: 20,
                }}
              />
              <div
                style={{
                  fontSize: 11,
                  letterSpacing: '0.2em',
                  color: '#0c0c0e',
                  fontWeight: 500,
                  marginBottom: 4,
                }}
              >
                {t.name}
              </div>
              <div
                style={{
                  fontSize: 9,
                  letterSpacing: '0.15em',
                  color: 'rgba(12,12,14,0.4)',
                }}
              >
                {t.role} — {t.tag}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      </div>
    </section>
  );
}
