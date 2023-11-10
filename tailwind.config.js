/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            margin: {
                xxl: '11rem',
                l: '7rem',
            },
        },
    },
    plugins: [],
}
