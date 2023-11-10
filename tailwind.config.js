/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        colors: {
            accent: '#3A688D',
            gray: '#2A2A2A',

            // dark mode
            white: '#F2F2F2',
            light_gray: '#393939',

            // light mode
            beige: '#C3B98E',
            light_beige: '#DDD199',
        },
        margin: {
            xxl: '12rem',
            l: '7rem',
        },
        fontFamily: {
            sans: ['"Source Sans 3"', 'sans-serif'],
        },
        extend: {},
    },
    plugins: [],
}
