import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#050505',
        panel: '#111111',
        line: '#27272a',
        accent: '#ff4d6d',
        accentSoft: '#ff8fab',
        violetGlow: '#a855f7',
      },
      boxShadow: {
        glow: '0 0 30px rgba(255, 77, 109, 0.28)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(255,77,109,0.25), transparent 38%), radial-gradient(circle at bottom right, rgba(239,68,68,0.18), transparent 30%)',
      },
    },
  },
  plugins: [],
};

export default config;
