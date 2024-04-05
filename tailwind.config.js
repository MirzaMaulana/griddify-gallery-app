/** @type {import('tailwindcss').Config} */
export default {
    content: ["./resources/**/*.jsx"],
    theme: {
        extend: {
            fontFamily: {
                mont: ["Montserrat", "sans-serif"],
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["forest", "fantasy"],
    },
};
