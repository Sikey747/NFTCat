import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            "red-linear":
                "linear-gradient(101deg, #EB1484 27.35%, #C91CC3 99.99%, #C81CC5 100%, #C81CC5 100%)",
            "red-violet": "#DA18A3",
            "grey-1": "#E3E1E3",
            "grey-2": "#888888",
            "grey-3": "#4F4F4F",

            "black-2": "#1B1A21",
            "black-3": "#E3E1E3",
            "black-4": "#24252D",
        },
        screens: {
            sm: "480px",
            md: "768px",
            lg: "968px",
            xl: "1280px",
            xxl: "1440px",
        },
        extend: {},
    },
    darkMode: "class",
    plugins: [
        nextui({
            layout: {
                background: "#24252D",
            },
            themes: {
                light: {
                    background: "#ffffff",
                    colors: {
                        white: "#ffffff",
                        dark: "#24252D",
                        "black-1": "#2D2E36",
                    }, // light theme colors
                },
                dark: {
                    background: "#24252D",
                    colors: {
                        white: "#24252D",
                        dark: "#ffffff",
                        "black-1": "#ffffff",
                    }, // dark theme colors
                },
            },
        }),
    ],
};
export default config;
