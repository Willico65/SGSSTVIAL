/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#191d16',
          soft: '#4b5245',
        },
        paper: {
          DEFAULT: '#f6f4ee',
          raised: '#ffffff',
        },
        accent: {
          DEFAULT: '#d8590c',
          dark: '#b0480a',
          soft: '#f6dcc7',
        },
        gold: {
          DEFAULT: '#e8a53c',
          soft: '#fbead0',
        },
        steel: {
          DEFAULT: '#3d4a52',
          soft: '#e4e9ea',
        },
        line: '#dcd8cb',

        // Paleta corporativa del panel interno (/dashboard) — SGSST Vial.
        // No se usa en el sitio público, que conserva ink/paper/accent/steel.
        vial: {
          primary: '#1E3A8A',
          secondary: '#F59E0B',
          success: '#10B981',
          danger: '#EF4444',
          bg: '#F8FAFC',
          surface: '#FFFFFF',
          text: '#0F172A',
        },
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        body: ['"Public Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(25,29,22,0.06), 0 8px 24px -12px rgba(25,29,22,0.18)',
      },
      maxWidth: {
        content: '1180px',
      },
    },
  },
  plugins: [],
}
