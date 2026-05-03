import { motion } from 'motion/react';

const modules = [
  { num: '01', title: 'OCEAN NAVIGATION', pct: 75, desc: 'CELESTIAL AND ELECTRONIC NAVIGATION, PASSAGE PLANNING, AND CHART WORK.' },
  { num: '02', title: 'METEOROLOGY', pct: 60, desc: 'WEATHER SYSTEMS, FORECASTING, AND ROUTING FOR SAFE PASSAGES.' },
  { num: '03', title: 'SEAMANSHIP', pct: 85, desc: 'BOAT HANDLING, ANCHORING, MOORING, AND EMERGENCY PROCEDURES.' },
  { num: '04', title: 'RACE TACTICS', pct: 50, desc: 'START LINE STRATEGY, MARK ROUNDING, WIND SHIFTS, AND FLEET POSITIONING.' },
  { num: '05', title: 'ENGINEERING SYSTEMS', pct: 40, desc: 'DIESEL ENGINES, ELECTRICAL SYSTEMS, WATERMAKERS, AND MAINTENANCE.' },
  { num: '06', title: 'LEADERSHIP AT SEA', pct: 70, desc: 'CREW MANAGEMENT, DECISION MAKING UNDER PRESSURE, AND WATCH SYSTEMS.' },
];

export default function Academy() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      {/* Video */}
      <video
        src="/videos/academy-bg.mp4"
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
          opacity: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)',
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: 60 }}>
          <div
            style={{
              fontSize: 10,
              letterSpacing: '0.3em',
              color: 'rgba(147,197,253,0.85)',
              marginBottom: 16,
            }}
          >
            YORCH ACADEMY
          </div>
          <h2
            style={{
              fontSize: 'clamp(40px,6vw,80px)',
              fontWeight: 400,
              lineHeight: 0.9,
              color: 'white',
              maxWidth: 600,
              margin: 0,
            }}
            dangerouslySetInnerHTML={{
              __html: 'MASTER THE<br />SEA.<br /><em>MASTER<br/>YOURSELF.</em>',
            }}
          />
        </div>

        {/* Module Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
            marginTop: 48,
          }}
        >
          {modules.map((mod, i) => (
            <motion.div
              key={i}
              className="glass-mid"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.08,
              }}
              style={{
                padding: '28px 28px 24px',
                borderRadius: 4,
              }}
            >
              <div
                style={{
                  fontSize: 64,
                  color: 'rgba(255,255,255,0.08)',
                  lineHeight: 1,
                  marginBottom: -8,
                }}
              >
                {mod.num}
              </div>
              <div
                style={{
                  fontSize: 8,
                  letterSpacing: '0.35em',
                  color: 'rgba(147,197,253,0.6)',
                  marginBottom: 10,
                }}
              >
                MODULE
              </div>
              <div
                style={{
                  fontSize: 13,
                  letterSpacing: '0.12em',
                  color: 'white',
                  marginBottom: 8,
                }}
              >
                {mod.title}
              </div>
              <div
                style={{
                  fontSize: 9,
                  lineHeight: 1.8,
                  color: 'rgba(255,255,255,0.5)',
                }}
              >
                {mod.desc}
              </div>
              {/* Progress Bar */}
              <div style={{ marginTop: 16 }}>
                <div
                  style={{
                    height: 2,
                    background: 'rgba(255,255,255,0.08)',
                    borderRadius: 1,
                    overflow: 'hidden',
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${mod.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      height: '100%',
                      background: 'var(--accent)',
                      borderRadius: 1,
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
