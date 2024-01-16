/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        greeny: '#00df9a', // Replace 'customColor' with your desired color name
      },
      button: {
        btn: 'bg-greeny w-[200px] mx-auto rounded-md font-medium my-6 py-3 text-black',
      },
    },
  },
  plugins: [],
};
