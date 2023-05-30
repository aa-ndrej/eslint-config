const jsRules = require('./rules/js')
const jsStyleRules = require('./rules/js/style')
const tsRules = require('./rules/ts')
const tsStyleRules = require('./rules/ts/style')
const vueRules = require('./rules/vue')
const vueStyleRules = require('./rules/vue/style')


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

	rules: {
		...jsRules,
		...jsStyleRules,
	},

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
			rules: {
				...tsRules,
				...tsStyleRules,
			},
		},
		{
			//------
			// Nuxt
			//------
			files: ['*.vue'],
			extends: ['@nuxt/eslint-config'],
			rules: {
				...tsRules,
				...tsStyleRules,
				...vueRules,
				...vueStyleRules,
			},
		},
	],
}
