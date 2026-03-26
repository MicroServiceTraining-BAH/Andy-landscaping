import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#166534',
        'brand-green-dark': '#14532d',
        'brand-green-mid': '#15803d',
        'brand-green-light': '#4ADE80',
        'brand-gold': '#CA8A04',
        'brand-gold-light': '#FDE68A',
        'brand-bg': '#F0FDF4',
        'brand-bg-dark': '#dcfce7',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-up-delay-1': 'fadeUp 0.7s ease-out 0.15s forwards',
        'fade-up-delay-2': 'fadeUp 0.7s ease-out 0.3s forwards',
        'fade-up-delay-3': 'fadeUp 0.7s ease-out 0.45s forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
