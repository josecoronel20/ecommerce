/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        colorColor: "#921C29",
        colorLight1: "#FFFFFF",
        colorLight2: "#E8E8E8",
        colorLight3: "#A8A8A8",
        colorDark1: "#373737",
        colorDark2: "#4E4E4E",
      },
      boxShadow: {
        'custom': '0 5px 5px 1px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
};
