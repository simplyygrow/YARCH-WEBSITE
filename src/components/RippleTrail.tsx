import { useEffect, useRef, useCallback } from 'react';

interface Ripple {
  active: boolean;
  x: number;
  y: number;
  age: number;
}

const POOL_SIZE = 80;
const MIN_DISTANCE = 25;

export default function RippleTrail() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ripplesRef = useRef<Ripple[]>(
    Array.from({ length: POOL_SIZE }, () => ({ active: false, x: 0, y: 0, age: 0 }))
  );
  const dotsRef = useRef<HTMLDivElement[]>([]);
  const lastPosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  const spawn = useCallback((x: number, y: number) => {
    const pool = ripplesRef.current;
    for (let i = 0; i < pool.length; i++) {
      if (!pool[i].active) {
        pool[i].active = true;
        pool[i].x = x;
        pool[i].y = y;
        pool[i].age = 0;
        break;
      }
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - lastPosRef.current.x;
      const dy = e.clientY - lastPosRef.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > MIN_DISTANCE) {
        spawn(e.clientX, e.clientY);
        lastPosRef.current = { x: e.clientX, y: e.clientY };
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [spawn]);

  useEffect(() => {
    const animate = () => {
      const pool = ripplesRef.current;
      for (let i = 0; i < pool.length; i++) {
        const r = pool[i];
        const dot = dotsRef.current[i];
        if (!dot) continue;

        if (r.active) {
          r.age += 0.012;
          const size = 20 + r.age * (300 - 20);
          const opacity = 1 - Math.pow(r.age, 1.2);

          if (r.age >= 1) {
            r.active = false;
            dot.style.opacity = '0';
          } else {
            dot.style.transform = `translate(${r.x - size / 2}px, ${r.y - size / 2}px)`;
            dot.style.width = `${size}px`;
            dot.style.height = `${size}px`;
            dot.style.opacity = `${Math.max(0, opacity * 0.3)}`;
          }
        }
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 30,
          pointerEvents: 'none',
        }}
      >
        {Array.from({ length: POOL_SIZE }, (_, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) dotsRef.current[i] = el;
            }}
            style={{
              position: 'absolute',
              borderRadius: '50%',
              backdropFilter: 'url(#liquid-trail) blur(1px)',
              WebkitBackdropFilter: 'url(#liquid-trail) blur(1px)',
              boxShadow:
                'inset 0 0 30px rgba(255,255,255,0.1), 0 0 15px rgba(147,197,253,0.15)',
              opacity: 0,
              willChange: 'transform, opacity',
            }}
          />
        ))}
      </div>

      {/* SVG Filter */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="liquid-trail">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.02"
              numOctaves={2}
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={30}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
}
