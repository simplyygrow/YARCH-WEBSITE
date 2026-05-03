import { motion } from 'motion/react';

const cards = [
  {
    category: 'PRIVATE CHARTER',
    title: 'VESSEL & CREW',
    description:
      'CUSTOM ITINERARIES ACROSS MEDITERRANEAN TO PACIFIC. DEDICATED CAPTAIN AND CREW ASSIGNED TO YOUR VOYAGE.',
  },
  {
    category: 'RACING PROGRAM',
    title: 'OFFSHORE & INSHORE',
    description:
      'JOIN OUR COMPETITIVE RACING CALENDAR. FROM LOCAL REGATTAS TO TRANSATLANTIC CROSSINGS.',
  },
  {
    category: 'CONCIERGE',
    title: '24 / 7 ACCESS',
    description:
      'EVERY DETAIL HANDLED — PROVISIONING, BERTHING, CUSTOMS, DINING RESERVATIONS, AND SHORE EXCURSIONS.',
  },
];

export default function Experiences() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      {/* Video */}
      <video
        src="/videos/experiences-bg.mp4"
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

      {/* Content Grid */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: '100vh',
          padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)',
          gap: 80,
          alignContent: 'center',
        }}
      >
        {/* Left Column */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
            <div style={{ width: 24, height: 1, background: 'rgba(147,197,253,0.6)' }} />
            <span
              style={{
                fontSize: 10,
                letterSpacing: '0.3em',
                color: 'rgba(147,197,253,0.85)',
              }}
            >
              CURATED FOR MEMBERS
            </span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(36px,4.5vw,72px)',
              fontWeight: 400,
              lineHeight: 0.95,
              color: 'white',
              margin: 0,
            }}
            dangerouslySetInnerHTML={{ __html: 'LIFE BEYOND<br/>THE HORIZON' }}
          />
        </div>

        {/* Right Column — Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="glass-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.12,
              }}
              style={{ padding: '24px 28px' }}
            >
              <div
                style={{
                  fontSize: 8,
                  letterSpacing: '0.3em',
                  color: 'rgba(147,197,253,0.7)',
                  marginBottom: 8,
                }}
              >
                {card.category}
              </div>
              <div
                style={{
                  fontSize: 18,
                  color: 'white',
                  letterSpacing: '0.05em',
                  marginBottom: 12,
                }}
              >
                {card.title}
              </div>
              <div
                style={{
                  fontSize: 10,
                  lineHeight: 1.8,
                  letterSpacing: '0.15em',
                  color: 'rgba(255,255,255,0.55)',
                }}
              >
                {card.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
