export default {
  plugins: {
    '@tailwindcss/vite': {
      content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
      ],
    },
  },
};