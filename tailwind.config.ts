import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        // The "moving light" effect for buttons
        'shine': 'shine 1.5s ease-in-out infinite',
        // Subtle floating for decorative lines
        'float': 'float 6s ease-in-out infinite',
        // Pulse glow effect
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        shine: {
          '0%': { left: '-100%', opacity: '0' },
          '50%': { opacity: '0.5' },
          '100%': { left: '100%', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(-15deg)' },
          '50%': { transform: 'translateY(-20px) rotate(-10deg)' },
        },
      },
      backgroundImage: {
        // Custom gradient for that "Digital Wings" gold look
        'gold-shimmer': 'linear-gradient(90deg, transparent, rgba(255,215,0,0.4), #fff, rgba(255,215,0,0.4), transparent)',
      },
    },
  },
  plugins: [],
};

export default config;