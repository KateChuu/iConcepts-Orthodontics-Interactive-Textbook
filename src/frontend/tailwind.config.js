// tailwind.config.js
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            keyframes: {
                'infinite-scroll': {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
            animation: {
                'infinite-scroll': 'infinite-scroll 40s linear infinite',
            },
        },
    },
    plugins: [],
};
