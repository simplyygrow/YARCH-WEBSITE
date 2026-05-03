import { motion } from 'motion/react';

interface FleetVideoProps {
  videoSrc: string;
  name: string;
  specs: { label: string; value: string }[];
  delay: number;
  isOpen: boolean;
}

export default function FleetVideo({ videoSrc, name, specs, delay }: FleetVideoProps) {
  return (
    <div
      style={{
        width: '33.333%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        flexShrink: 0,
      }}
    >
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.9 + delay,
          ease: [0.19, 1, 0.22, 1],
          delay,
        }}
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
        }}
      >
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            inset: 0,
          }}
        />

        {/* Dark gradient bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '55%',
            background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 55%)',
            pointerEvents: 'none',
          }}
        />

        {/* Info block */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: 40,
          }}
        >
          <div
            style={{
              fontSize: 'clamp(28px,2.5vw,44px)',
              color: 'white',
              letterSpacing: '-0.01em',
              marginBottom: 20,
              fontWeight: 400,
            }}
          >
            {name}
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px 24px',
            }}
          >
            {specs.map((spec, i) => (
              <div key={i}>
                <div
                  style={{
                    fontSize: 8,
                    color: 'rgba(255,255,255,0.4)',
                    letterSpacing: '0.3em',
                    marginBottom: 4,
                  }}
                >
                  {spec.label}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: 'white',
                    letterSpacing: '0.1em',
                  }}
                >
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
