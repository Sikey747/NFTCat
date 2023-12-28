import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            white: "#ffffff",
            dark: "#24252D",
            "red-linear":
                "linear-gradient(101deg, #EB1484 27.35%, #C91CC3 99.99%, #C81CC5 100%, #C81CC5 100%)",
            "red-violet": "#DA18A3",
            "grey-1": "#E3E1E3",
            "grey-2": "#888888",
            "grey-3": "#4F4F4F",
            "black-1": "#2D2E36",
            "black-2": "#1B1A21",
            "black-3": "#E3E1E3",
            "black-4": "#24252D",
            shadow1: "0px 4px 7px 0px rgba(0, 0, 0, 0.10)",
        },
        extend: {},
    },
    plugins: [],
};
export default config;
