import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const faqs = [
  {
    q: 'HOW DOES MEMBERSHIP WORK?',
    a: 'YORCH OFFERS THREE ANNUAL MEMBERSHIP TIERS — SIGNATURE, COMMODORE, AND FOUNDERS\' CIRCLE. EACH TIER PROVIDES GRADUATED ACCESS TO OUR FLEET, EVENTS, RACING PROGRAMME, AND CONCIERGE SERVICES. MEMBERSHIP IS RENEWED ANNUALLY AND CAN BE UPGRADED AT ANY TIME.',
  },
  {
    q: 'WHAT VESSELS ARE IN THE FLEET?',
    a: 'OUR FLEET CONSISTS OF THREE METICULOUSLY MAINTAINED YACHTS: OCEAN ECLIPSE (28M CRUISER), BLACK SOVEREIGN (32M PERFORMANCE YACHT), AND AZURE HORIZON (25M EXPEDITION VESSEL). EACH IS CREWED BY EXPERIENCED PROFESSIONALS AND MAINTAINED TO THE HIGHEST STANDARDS.',
  },
  {
    q: 'CAN I CHARTER FOR CORPORATE EVENTS?',
    a: 'YES. WE OFFER FULL-SERVICE CORPORATE CHARTER PACKAGES INCLUDING BESPOKE ITINERARIES, ONBOARD CATERING, TEAM-BUILDING ACTIVITIES, AND PRESENTATION FACILITIES. OUR CONCIERGE TEAM HANDLES ALL LOGISTICS FROM EMBARKATION TO DISEMBARKATION.',
  },
  {
    q: 'IS YORCH AVAILABLE INTERNATIONALLY?',
    a: 'YORCH OPERATES ACROSS THE MEDITERRANEAN, CARIBBEAN, AND PACIFIC REGIONS. OUR VESSELS ARE POSITIONED SEASONALLY TO OFFER THE BEST CONDITIONS AND DESTINATIONS YEAR-ROUND. CUSTOM ROUTES AND TRANSATLANTIC PASSAGES ARE AVAILABLE ON REQUEST.',
  },
  {
    q: 'HOW DO I JOIN THE RACING PROGRAMME?',
    a: 'THE RACING PROGRAMME IS AVAILABLE FROM THE COMMODORE TIER UPWARD. IT INCLUDES ACCESS TO OUR ANNUAL REGATTA CALENDAR, OFFSHORE RACES, AND CREW TRAINING. PRIOR SAILING EXPERIENCE IS RECOMMENDED BUT NOT REQUIRED — OUR ACADEMY CAN PREPARE YOU.',
  },
  {
    q: 'WHAT DOES THE CONCIERGE SERVICE COVER?',
    a: 'EVERYTHING. FROM PROVISIONING AND BERTHING ARRANGEMENTS TO CUSTOMS CLEARANCE, RESTAURANT RESERVATIONS, HELICOPTER TRANSFERS, AND SHORE EXCURSIONS. OUR CONCIERGE IS AVAILABLE 24/7 AND CAN ARRANGE ANY REQUEST, HOWEVER BESPOKE.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      style={{
        backgroundColor: 'var(--bg-base)',
        maxWidth: 800,
        margin: '0 auto',
        padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 48 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
          <div style={{ width: 40, height: 2, background: 'var(--accent)' }} />
          <span style={{ fontSize: 10, letterSpacing: '0.3em', color: 'var(--accent)' }}>FAQ</span>
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
          WHAT YOU NEED TO KNOW.
        </h2>
      </div>

      {/* FAQ Items */}
      {faqs.map((faq, i) => (
        <div key={i}>
          <div
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
              padding: '24px 0',
              borderBottom: '1px solid rgba(12,12,14,0.08)',
            }}
          >
            <span
              style={{
                fontSize: 12,
                letterSpacing: '0.12em',
                color: openIndex === i ? '#0c0c0e' : 'rgba(12,12,14,0.6)',
                transition: 'color 0.3s ease',
              }}
            >
              {faq.q}
            </span>
            <motion.span
              animate={{ rotate: openIndex === i ? 180 : 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontSize: 14,
                color: 'rgba(12,12,14,0.4)',
                flexShrink: 0,
                marginLeft: 16,
              }}
            >
              ↓
            </motion.span>
          </div>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{ overflow: 'hidden' }}
              >
                <p
                  style={{
                    fontSize: 10,
                    lineHeight: 1.9,
                    letterSpacing: '0.15em',
                    color: 'rgba(12,12,14,0.52)',
                    padding: '0 0 24px',
                    margin: 0,
                  }}
                >
                  {faq.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </section>
  );
}
