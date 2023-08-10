/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				truered: "rgb(var(--color-red) / <alpha-value>)",
				truegreen: "rgb(var(--color-green) / <alpha-value>)",
				trueblue: "rgb(var(--color-blue) / <alpha-value>)",
				primary: "#5c6ac4",
			},
		},
	},
	plugins: [],
};
