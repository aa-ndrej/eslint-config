const jsRules = require('./rules/js')
const tsRules = require('./rules/ts')


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

	rules: jsRules,

	overrides: [
		{
			//------------
			// TypeScript
			//------------
			files: ['*.+(ts|tsx|cts|mts)'],
			extends: [
				'plugin:@typescript-eslint/recommended',
				// TODO: See https://typescript-eslint.io/linting/typed-linting
				// 'plugin:@typescript-eslint/recommended-requiring-type-checking',
			],
			rules: tsRules,
		},
	],
}
