import { AnimatePresence, motion } from 'motion/react';
import { yachts } from '../data/yachts';

interface SpecDrawerProps {
  yachtId: string | null;
  onClose: () => void;
}

export default function SpecDrawer({ yachtId, onClose }: SpecDrawerProps) {
  const yacht = yachts.find((y) => y.id === yachtId);

  return (
    <AnimatePresence>
      {yachtId && yacht && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 199,
              background: 'rgba(0,0,0,0.4)',
            }}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ x: 400 }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="spec-drawer"
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: 440,
              height: '100vh',
              zIndex: 200,
              overflowY: 'auto',
            }}
          >
            <div style={{ padding: 40 }}>
              {/* Close Button */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 32 }}>
                <button
                  onClick={onClose}
                  style={{
                    background: 'none',
                    border: '1px solid rgba(12,12,14,0.15)',
                    width: 36,
                    height: 36,
                    borderRadius: 4,
                    cursor: 'pointer',
                    fontSize: 16,
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'inherit',
                  }}
                >
                  ×
                </button>
              </div>

              {/* Yacht Name */}
              <h3
                style={{
                  fontSize: 'clamp(24px,3vw,36px)',
                  fontWeight: 400,
                  letterSpacing: '-0.01em',
                  color: '#0c0c0e',
                  marginBottom: 8,
                  margin: '0 0 8px 0',
                }}
              >
                {yacht.name}
              </h3>
              <p
                style={{
                  fontSize: 9,
                  letterSpacing: '0.25em',
                  color: 'rgba(12,12,14,0.45)',
                  marginBottom: 40,
                  margin: '0 0 40px 0',
                }}
              >
                {yacht.tagline}
              </p>

              {/* Spec Categories */}
              {yacht.fullSpecs.map((cat, ci) => (
                <div key={ci} style={{ marginBottom: 36 }}>
                  <div
                    style={{
                      fontSize: 8,
                      letterSpacing: '0.35em',
                      color: 'var(--accent)',
                      marginBottom: 16,
                      paddingBottom: 8,
                      borderBottom: '1px solid rgba(12,12,14,0.08)',
                    }}
                  >
                    {cat.category}
                  </div>
                  {cat.specs.map((spec, si) => (
                    <div
                      key={si}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '10px 0',
                        borderBottom: '1px solid rgba(12,12,14,0.04)',
                      }}
                    >
                      <span
                        style={{
                          fontSize: 10,
                          letterSpacing: '0.15em',
                          color: 'rgba(12,12,14,0.5)',
                        }}
                      >
                        {spec.label}
                      </span>
                      <span
                        style={{
                          fontSize: 10,
                          letterSpacing: '0.1em',
                          color: '#0c0c0e',
                          textAlign: 'right',
                        }}
                      >
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
