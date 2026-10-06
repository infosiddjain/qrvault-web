import { ImageResponse } from 'next/og';

export const alt = 'QR Vault: create and password-protect your QR codes';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '80px 96px',
          background: '#0B0C10',
          color: '#F4F1EA',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 680 }}>
          <div style={{ fontSize: 30, color: '#D4B06A', letterSpacing: 4 }}>QR VAULT</div>
          <div style={{ marginTop: 28, fontSize: 68, fontWeight: 700, lineHeight: 1.1 }}>
            Create and password-protect your QR codes
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: '#A9ACB6' }}>
            Private by design. Stored only on your device.
          </div>
        </div>
        <svg width="300" height="300" viewBox="0 0 64 64">
          <rect width="64" height="64" rx="16" fill="#D4B06A" />
          <g fill="none" stroke="#1A1406" strokeWidth="4">
            <rect x="14" y="14" width="14" height="14" rx="3" />
            <rect x="36" y="14" width="14" height="14" rx="3" />
            <rect x="14" y="36" width="14" height="14" rx="3" />
          </g>
          <g fill="#1A1406">
            <rect x="37" y="37" width="5" height="5" rx="1" />
            <rect x="45" y="37" width="5" height="5" rx="1" />
            <rect x="37" y="45" width="5" height="5" rx="1" />
            <rect x="45" y="45" width="5" height="5" rx="1" />
          </g>
        </svg>
      </div>
    ),
    size,
  );
}
