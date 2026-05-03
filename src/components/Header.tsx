import { useEffect, useRef, useState } from 'react';

interface HeaderProps {
  menuOpen: boolean;
  onBlogOpen: () => void;
  onFleetOpen: () => void;
  onJourneysOpen: () => void;
  onMembershipOpen: () => void;
  onAboutOpen: () => void;
}

export default function Header({ menuOpen, onBlogOpen, onFleetOpen, onJourneysOpen, onMembershipOpen, onAboutOpen }: HeaderProps) {
  const pillRef = useRef<HTMLDivElement>(null);
  const [joinBg, setJoinBg] = useState('#1c3557');

  useEffect(() => {
    const handleScroll = () => {
      if (pillRef.current) {
        if (window.scrollY > 50) {
          pillRef.current.classList.add('scrolled');
        } else {
          pillRef.current.classList.remove('scrolled');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'JOURNEYS', handler: onJourneysOpen },
    { label: 'FLEET', handler: onFleetOpen },
    { label: 'MEMBERSHIP', handler: onMembershipOpen },
    { label: 'ABOUT US', handler: onAboutOpen },
    { label: 'BLOG', handler: onBlogOpen },
  ];

  return (
    <div
      ref={pillRef}
      className="navbar-pill"
      style={{
        opacity: 1,
        pointerEvents: 'auto',
        transform: menuOpen ? 'translateX(calc(-50% - 240px))' : 'translateX(-50%)',
        transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Logo */}
      <div
        style={{
          borderRight: '1px solid rgba(12,12,14,0.08)',
          padding: '0 20px 0 14px',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="5" r="2.4" stroke="#1c3557" strokeWidth="1.5" fill="none" />
          <line x1="10" y1="7.4" x2="10" y2="16" stroke="#1c3557" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M5 11 Q10 14 15 11" stroke="#1c3557" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <line x1="7" y1="16" x2="13" y2="16" stroke="#1c3557" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <span style={{ fontSize: 16, letterSpacing: '0.28em', color: '#0c0c0e' }}>YORCH</span>
      </div>

      {/* Nav Links */}
      {navLinks.map((link) => (
        <a
          key={link.label}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            link.handler();
          }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#0c0c0e')}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(12,12,14,0.55)')}
          style={{
            padding: '0 16px',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            fontSize: '10px',
            letterSpacing: '0.18em',
            color: 'rgba(12,12,14,0.55)',
            textDecoration: 'none',
            fontFamily: 'inherit',
            textTransform: 'uppercase',
            transition: 'color 0.3s ease',
          }}
        >
          {link.label}
        </a>
      ))}

      {/* Join Button */}
      <div style={{ padding: '0 6px', flexShrink: 0 }}>
        <button
          onMouseEnter={() => setJoinBg('#253f63')}
          onMouseLeave={() => setJoinBg('#1c3557')}
          style={{
            background: joinBg,
            borderRadius: '100px',
            padding: '9px 22px',
            fontSize: '10px',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'inherit',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            transition: 'background 0.3s ease',
          }}
        >
          JOIN THE CLUB
        </button>
      </div>
    </div>
  );
}
