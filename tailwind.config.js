const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        fontFamily: {
            primary:"Raleway",
            body: "Quicksand"
        },
        
        container: {
            padding: {
                DEFAULT: "1rem",
                lg: "3rem"
            },
        },

        extend: {
            colors: {
                "light-primary": "#E5E7E9",
                "light-secondary": "#FDFEFE",
                "light-tail-100": "005CFF",
                "light-tail-500": "#000EFF",

                "dark-primary": "#17202A",
                "dark-secondary": "#2C3E50",
                "dark-navy-100": "#566573",
                "dark-navy-500": "#17202A",

                accent: {
                    DEFAULT: "#ac6b34",
                    hover: "#925a2b",
                },

                paragraph: "#5D6D7E",
                blue: colors.blue,
                indigo: colors.indigo,
                red: colors.red,
                green: colors.green
            }
        }
    },

    plugins: [require('@tailwindcss/forms')],
};
