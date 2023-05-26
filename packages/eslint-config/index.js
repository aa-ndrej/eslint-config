/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {

	reportUnusedDisableDirectives: true,
	parserOptions: {
		ecmaVersion: 2022,
		sourceType: 'module',
	},
	env: {
		node: true,
	},

	extends: [
		// https://github.com/eslint/eslint
		'eslint:recommended',
		// https://github.com/mysticatea/eslint-plugin-eslint-comments
		'plugin:eslint-comments/recommended',
	],
}
