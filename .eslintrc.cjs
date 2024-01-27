module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react/recommended", "plugin:prettier/recommended", "prettier"],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [".eslintrc.{js,cjs}"],
			parserOptions: {
				sourceType: "script",
			},
		},
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ["@typescript-eslint", "react", "prettier"],
	rules: {
		"prettier/prettier": "error",
		"react/react-in-jsx-scope": "off",
		"react/prop-types": "off",
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};
