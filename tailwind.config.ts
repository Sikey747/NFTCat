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
            "static-white": "#ffffff",
            "static-black": "#24252D",
            transparent: "transparent",
            current: "currentColor",
            "red-linear":
                "linear-gradient(101deg, #EB1484 27.35%, #C91CC3 99.99%, #C81CC5 100%, #C81CC5 100%)",
            "red-violet": "#DA18A3",
            "grey-2": "#888888",
            "grey-3": "#4F4F4F",
            "black-2": "#1B1A21",
            "black-3": "#2A2D3A",
            "black-4": "#24252D",
            "black-5": "#2D2E36",
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
                        "grey-1": "#E3E1E3",
                    },
                },
                dark: {
                    background: "#24252D",
                    colors: {
                        white: "#24252D",
                        dark: "#ffffff",
                        "black-1": "#ffffff",
                        "grey-1": "#2D2E36",
                    },
                },
            },
        }),
    ],
};
export default config;
