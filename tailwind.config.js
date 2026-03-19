module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#3b82f6",
        secondary: "#64748b",
        dark: "#0f172a",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        'floating': 'floating 3s ease-in-out infinite',
        'blob': 'blob 7s infinite alternate ease-in-out',
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        blob: {
          '0%, 100%': { transform: 'translateY(0) translateX(0) scale(1)' },
          '33%': { transform: 'translateY(-30px) translateX(20px) scale(1.05)' },
          '66%': { transform: 'translateY(20px) translateX(-20px) scale(0.95)' },
        }
      },
      screen: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
