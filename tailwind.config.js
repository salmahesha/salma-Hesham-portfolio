/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0B0F19',
        surface: '#111827',
        border: 'rgba(255,255,255,0.09)',
        'text-primary': '#F3F4F6',
        'text-muted': '#9CA3AF',
        accent: '#8B5CF6',
        'accent-hover': '#7C3AED',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
        btn: '8px',
      },
      maxWidth: {
        container: '1100px',
      },
      backdropBlur: {
        navbar: '16px',
      },
    },
  },
  plugins: [],
};
