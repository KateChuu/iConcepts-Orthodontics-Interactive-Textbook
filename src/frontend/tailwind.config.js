/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",    
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.css",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            animation: {
                slide: 'slide 30s linear infinite',
            },
            keyframes: {
                slide: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
        },
    },
    plugins: [],
}
