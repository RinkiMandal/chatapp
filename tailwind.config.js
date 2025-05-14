// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         'century-gothic': ['Century Gothic', 'sans-serif'],
//       },
//     },
//   },
//   plugins: [],
// }




/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode using a class (which you are already applying in your App.js)
  theme: {
    extend: {
      fontFamily: {
        'century-gothic': ['Century Gothic', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
