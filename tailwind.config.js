/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                'login-bg': "url('/src/login/assets/img/bg_image.png')"
              },
            fontFamily: {
                'poppins': ['Poppins', 'sans-serif'],
                // geist: ["Geist", "sans-serif"]
            }
        }
    },
    plugins: []
};
