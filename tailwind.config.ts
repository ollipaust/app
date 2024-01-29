import type { Config } from "tailwindcss";

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
	plugins: [],
} satisfies Config;
