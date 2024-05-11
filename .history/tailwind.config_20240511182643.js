/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Press Start 2P", "system-ui"],
      serif: ["Press Start 2P", "Georgia"],
      mono: ["ui-monospace", "Press Start 2P"],
      display: ["Press Start 2P"],
      body: ['"Press Start 2P"'],
    },
  },
  plugins: [],
};
