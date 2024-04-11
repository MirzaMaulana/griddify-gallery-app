/** @type {import('tailwindcss').Config} */
export default {
    content: ["./resources/**/*.jsx"],
    theme: {
        extend: {
            fontFamily: {
                mont: ["Montserrat", "sans-serif"],
            },
            screens: {
                "mx-md": { max: "767px" },
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["fantasy", "sunset"],
    },
};
