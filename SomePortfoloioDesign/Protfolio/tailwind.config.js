/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'backgroundImage': "url('https://cdn.pixabay.com/photo/2024/12/03/08/08/ai-generated-9241538_1280.jpg')",
      }
  },
  plugins: [],
}


}