import type { Config } from 'tailwindcss';

// Mirrors the mobile app's onyx & champagne palette (src/themes/colors.ts).
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0C10',
        surface: '#14161C',
        card: '#181B22',
        raised: '#1F232C',
        line: '#262A34',
        lineStrong: '#343947',
        gold: '#D4B06A',
        goldLight: '#E8CF9A',
        onGold: '#1A1406',
        text: '#F4F1EA',
        soft: '#A9ACB6',
        muted: '#6E7280',
        danger: '#E5736B',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      maxWidth: { page: '72rem' },
      boxShadow: {
        gold: '0 10px 30px -10px rgba(212,176,106,0.45)',
        card: '0 30px 60px -30px rgba(0,0,0,0.8)',
      },
    },
  },
  plugins: [],
};

export default config;
