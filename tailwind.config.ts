import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin.js";

const customSizes = {
	"10": "2.5rem", // 40px
	"12": "3rem", // 48px
	"14": "3.5rem", // 56px
	"16": "4rem", // 64px
	"18": "4.5rem", // 72px
	"20": "5rem", // 80px
};

export default {
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				// Corporate Identity (CI) Colors
				ci: {
					primary: {
						1: "#33D790", // Primary (Emerald)
						2: "#0D967B", // Primary Dark
						3: "#0A715C", // Primary Darker
					},
					accent: {
						1: "#FFF75C", // Accent (Yellow)
						2: "#FDDB1A", // Accent Darker
					},
					secondary: {
						1: "#35D4C2", // Secondary (Turquois)
						2: "#279F81", // Secondary Darker
					},
					light: {
						1: "#F0F3EB", // Primary Light
						2: "#E4F0D1", // Accent Light
						3: "#E5EAE0", // Secondary Light
					},
					dark: {
						1: "#0D3119", // Primary Dark
						2: "#292614", // Accent Dark
						3: "#1F3233", // Secondary Dark
					},
				},
			},
			fontFamily: {
				raleway: ["Raleway", "sans-serif"],
			},
			textShadow: {
				DEFAULT: "0 2px 3px #72A79A",
				alt: "0 2px 3px #72A79A",
			},
			padding: {
				...customSizes,
			},
			paddingX: {
				...customSizes,
			},
			paddingY: {
				...customSizes,
			},
			paddingTop: {
				...customSizes,
			},
			paddingRight: {
				...customSizes,
			},
			paddingBottom: {
				...customSizes,
			},
			paddingLeft: {
				...customSizes,
			},
			margin: {
				...customSizes,
			},
			marginX: {
				...customSizes,
			},
			marginY: {
				...customSizes,
			},
			marginTop: {
				...customSizes,
			},
			marginRight: {
				...customSizes,
			},
			marginBottom: {
				...customSizes,
			},
			marginLeft: {
				...customSizes,
			},
		},
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					"text-shadow": (value) => ({
						textShadow: value,
					}),
				},
				{ values: theme("textShadow") },
			);
		}),
	],
} satisfies Config;
