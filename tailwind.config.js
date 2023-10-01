/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"], darkMode: "class", theme: {
        extend: {
            colors: {
                mainColor: "#935ECD",
                activeBlock: "#BB86FC",
                blockBg: "#3E2F51"
            }, width: {
                half: "49%", third: "32%", sixth: "16%", fourth: "24.5%", fifth: "19%"
            }, fontFamily: {
                'benzin': ['Benzin', 'sans-serif']
            }
        },
    }, plugins: [],
};
