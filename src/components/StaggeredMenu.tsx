import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface StaggeredMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  onFleetOpen: () => void;
}

const menuItems = [
  { label: 'HOME', num: '01' },
  { label: 'OUR FLEET', num: '02' },
  { label: 'MEMBERSHIP', num: '03' },
  { label: 'REGATTAS & EVENTS', num: '04' },
  { label: 'ACADEMY', num: '05' },
  { label: 'CONTACT', num: '06' },
];

export default function StaggeredMenu({ isOpen, onToggle, onFleetOpen }: StaggeredMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const prelayer1Ref = useRef<HTMLDivElement>(null);
  const prelayer2Ref = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const socialsRef = useRef<HTMLDivElement>(null);
  const menuLabelRef = useRef<HTMLSpanElement>(null);
  const closeLabelRef = useRef<HTMLSpanElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (isOpen) {
      // OPEN
      const tl = gsap.timeline();
      timelineRef.current = tl;

      // Label cycle
      if (menuLabelRef.current && closeLabelRef.current) {
        tl.to(menuLabelRef.current, { y: '-100%', duration: 0.4, ease: 'power3.inOut' }, 0);
        tl.to(closeLabelRef.current, { y: '-100%', duration: 0.4, ease: 'power3.inOut' }, 0);
      }

      // Prelayers
      tl.to(prelayer1Ref.current, { x: 0, duration: 0.6, ease: 'power4.out' }, 0);
      tl.to(prelayer2Ref.current, { x: 0, duration: 0.6, ease: 'power4.out' }, 0.08);

      // Panel
      tl.to(panelRef.current, { x: 0, duration: 0.8, ease: 'power4.out' }, 0.15);

      // Prelayers slide away
      tl.to(prelayer1Ref.current, { x: '-100%', duration: 0.5, ease: 'power3.in' }, 0.5);
      tl.to(prelayer2Ref.current, { x: '-100%', duration: 0.5, ease: 'power3.in' }, 0.5);

      // Nav items stagger in
      const items = navItemsRef.current.filter(Boolean);
      tl.fromTo(
        items.map((li) => li?.querySelector('a')),
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out', stagger: 0.06 },
        0.6
      );

      // Socials
      if (socialsRef.current) {
        tl.fromTo(
          socialsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
          0.8
        );
      }
    } else {
      // CLOSE
      const tl = gsap.timeline();
      timelineRef.current = tl;

      // Nav items fade out
      const items = navItemsRef.current.filter(Boolean);
      tl.to(
        items.map((li) => li?.querySelector('a')),
        { x: 40, opacity: 0, duration: 0.3, ease: 'power3.in', stagger: 0.04 },
        0
      );

      // Socials
      if (socialsRef.current) {
        tl.to(socialsRef.current, { opacity: 0, y: 20, duration: 0.3 }, 0);
      }

      // Panel slides out
      tl.to(panelRef.current, { x: '100%', duration: 0.6, ease: 'power4.in' }, 0.2);

      // Reset prelayers
      tl.set(prelayer1Ref.current, { x: '100%' });
      tl.set(prelayer2Ref.current, { x: '100%' });

      // Label cycle back
      if (menuLabelRef.current && closeLabelRef.current) {
        tl.to(menuLabelRef.current, { y: '0%', duration: 0.4, ease: 'power3.inOut' }, 0.2);
        tl.to(closeLabelRef.current, { y: '0%', duration: 0.4, ease: 'power3.inOut' }, 0.2);
      }
    }
  }, [isOpen]);

  return (
    <div className="staggered-menu">
      {/* Toggle Button */}
      <button className={`menu-toggle ${isOpen ? 'is-open' : ''}`} onClick={onToggle}>
        <div className="menu-toggle-label">
          <span ref={menuLabelRef} style={{ top: 0 }}>
            MENU
          </span>
          <span ref={closeLabelRef} style={{ top: '100%' }}>
            CLOSE
          </span>
        </div>
        <span className="menu-toggle-icon">+</span>
      </button>

      {/* Prelayers */}
      <div ref={prelayer1Ref} className="menu-prelayer menu-prelayer-1" />
      <div ref={prelayer2Ref} className="menu-prelayer menu-prelayer-2" />

      {/* Panel */}
      <div ref={panelRef} className="menu-panel">
        <ul className="menu-nav">
          {menuItems.map((item, i) => (
            <li key={i} ref={(el) => { navItemsRef.current[i] = el; }}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (item.label === 'OUR FLEET') {
                    onFleetOpen();
                    onToggle();
                  } else {
                    onToggle();
                  }
                }}
              >
                <span
                  style={{
                    fontSize: 'clamp(0.6rem, 1vw, 0.75rem)',
                    letterSpacing: '0.2em',
                    color: 'rgba(12,12,14,0.3)',
                  }}
                >
                  {item.num}
                </span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div ref={socialsRef} className="menu-socials">
          <span className="menu-socials-title">FOLLOW</span>
          <div className="menu-socials-links">
            <a href="#">INSTAGRAM</a>
            <a href="#">FACEBOOK</a>
            <a href="#">TWITTER</a>
          </div>
        </div>
      </div>
    </div>
  );
}
