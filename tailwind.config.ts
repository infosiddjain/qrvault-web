import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6C5CE7',
        primaryDark: '#5A4BD1',
        primaryLight: '#F6F5FF',
        dark: '#1E1E2D',
        muted: '#8F90A6',
        bg: '#F7F7FB',
        border: '#ECECF4',
        danger: '#FF5C5C',
      },
      borderRadius: {
        xl2: '20px',
      },
    },
  },
  plugins: [],
};

export default config;
