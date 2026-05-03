import { useState } from 'react';
import { motion } from 'motion/react';

export default function ConciergeForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vessel: '',
    destination: '',
    dates: '',
    requests: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 8,
    letterSpacing: '0.3em',
    color: 'rgba(12,12,14,0.5)',
    marginBottom: 6,
    display: 'block',
    textTransform: 'uppercase',
    fontFamily: 'inherit',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(12,12,14,0.04)',
    border: '1px solid rgba(12,12,14,0.1)',
    color: '#0c0c0e',
    fontSize: 11,
    letterSpacing: '0.12em',
    padding: '14px 16px',
    borderRadius: 2,
    fontFamily: 'inherit',
    textTransform: 'uppercase',
    outline: 'none',
    boxSizing: 'border-box' as const,
  };

  return (
    <section
      style={{
        backgroundColor: 'var(--bg-base)',
        padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)',
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
            marginBottom: 24,
          }}
        >
          <div style={{ width: 24, height: 1, background: 'var(--accent)' }} />
          <span style={{ fontSize: 10, letterSpacing: '0.3em', color: 'var(--accent)' }}>
            PRIVATE CONCIERGE
          </span>
          <div style={{ width: 24, height: 1, background: 'var(--accent)' }} />
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
          dangerouslySetInnerHTML={{ __html: 'CHARTER A<br/>MOMENT.' }}
        />
      </div>

      {/* Form Card */}
      <div
        style={{
          maxWidth: 720,
          margin: '0 auto',
          background: 'white',
          border: '1px solid rgba(12,12,14,0.06)',
          boxShadow: '0 4px 40px rgba(0,0,0,0.06)',
          borderRadius: 4,
          padding: 'clamp(32px,5vw,56px)',
        }}
      >
        {/* Row 1 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
          <div>
            <label style={labelStyle}>FULL NAME</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={inputStyle}
              placeholder="YOUR FULL NAME"
            />
          </div>
          <div>
            <label style={labelStyle}>EMAIL ADDRESS</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
              placeholder="EMAIL@EXAMPLE.COM"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
          <div>
            <label style={labelStyle}>PHONE NUMBER</label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={inputStyle}
              placeholder="+1 (000) 000-0000"
            />
          </div>
          <div>
            <label style={labelStyle}>PREFERRED VESSEL</label>
            <select
              name="vessel"
              value={formData.vessel}
              onChange={handleChange}
              style={{ ...inputStyle, appearance: 'none' as const }}
            >
              <option value="">SELECT A VESSEL</option>
              <option value="ocean-eclipse">OCEAN ECLIPSE</option>
              <option value="black-sovereign">BLACK SOVEREIGN</option>
              <option value="azure-horizon">AZURE HORIZON</option>
              <option value="no-preference">NO PREFERENCE</option>
            </select>
          </div>
        </div>

        {/* Destination */}
        <div style={{ marginBottom: 16 }}>
          <label style={labelStyle}>DESTINATION OR REGION</label>
          <input
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            style={inputStyle}
            placeholder="E.G., MEDITERRANEAN, CARIBBEAN"
          />
        </div>

        {/* Dates */}
        <div style={{ marginBottom: 16 }}>
          <label style={labelStyle}>PREFERRED DATES</label>
          <input
            name="dates"
            value={formData.dates}
            onChange={handleChange}
            style={inputStyle}
            placeholder="PLEASE SPECIFY OR NOTE FLEXIBILITY"
          />
        </div>

        {/* Additional Requests */}
        <div style={{ marginBottom: 16 }}>
          <label style={labelStyle}>ADDITIONAL REQUESTS</label>
          <textarea
            name="requests"
            value={formData.requests}
            onChange={handleChange}
            rows={4}
            style={{ ...inputStyle, resize: 'vertical' }}
            placeholder="SHARE ANY PARTICULAR WISHES OR REQUIREMENTS..."
          />
        </div>

        {/* Submit */}
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          style={{
            width: '100%',
            background: 'var(--accent)',
            color: 'white',
            padding: 16,
            fontSize: 10,
            letterSpacing: '0.25em',
            borderRadius: 2,
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'inherit',
            textTransform: 'uppercase',
            marginTop: 8,
          }}
        >
          SUBMIT REQUEST
        </motion.button>

        <p
          style={{
            fontSize: 8,
            letterSpacing: '0.2em',
            color: 'rgba(12,12,14,0.35)',
            textAlign: 'center',
            marginTop: 16,
            margin: '16px 0 0 0',
          }}
        >
          ALL ENQUIRIES ARE HANDLED WITH THE STRICTEST CONFIDENCE.
        </p>
      </div>
    </section>
  );
}
