module.exports = {
    content: [
        './src/**/*.{astro,js,ts}',
        './public/**/*.html',
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('daisyui'),
    ],
    daisyui: {
        themes: ["autumn", "business"],
        darkTheme: "business",
    },
};
