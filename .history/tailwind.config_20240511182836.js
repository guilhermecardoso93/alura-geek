/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    sans: ['"Raleway"', "system-ui"],
    serif: ["ui-serif", "Georgia"],
    mono: ["ui-monospace", "SFMono-Regular"],
    display: ["Oswald"],
    body: ['"Open Sans"'],
  },
  plugins: [],
};
