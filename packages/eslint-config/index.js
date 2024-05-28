// @ts-check

import eslintComments from '@eslint-community/eslint-plugin-eslint-comments'
import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import ts from 'typescript-eslint'

import jsRules from './rules/javascript.js'
import stylisticRules from './rules/stylistic.js'
import tsRules from './rules/typescript.js'


export function defineESLintConfig(configs) {
	return configs.flat() // No pun intended.
}


/**
 * @param {{
 *   codeStyle?: {
 *     quotes?: 'single' | 'double',
 *     semi?: boolean,
 *   },
 * }} [opts={}]
 */
export function baseConfig(opts = {}) {
	return ts.config(
		{
			linterOptions: {
				reportUnusedDisableDirectives: true,
			},
		},
		{
			//------------
			// JavaScript
			//------------
			files: [
				'**/*.+(js|jsx|cjs|mjs)',
				'**/*.+(ts|tsx|cts|mts)',
			],

			plugins: {
				// https://github.com/eslint-community/eslint-plugin-eslint-comments
				'@eslint-community/eslint-comments': eslintComments,
			},

			rules: {
				// https://github.com/eslint/eslint
				...js.configs.recommended.rules,
				// https://github.com/eslint-community/eslint-plugin-eslint-comments
				...eslintComments.configs.recommended.rules,

				...jsRules,
			},
		},
		//------------
		// TypeScript
		//------------
		// TODO: See https://typescript-eslint.io/linting/typed-linting
		...ts.configs.recommended,
		...ts.configs.stylistic,
		{
			files: ['**/*.+(ts|tsx|cts|mts)'],
			rules: tsRules,
		},
		//-----------
		// Stylistic
		//-----------
		// https://eslint.style
		// https://github.com/eslint-stylistic/eslint-stylistic
		//
		// @ts-expect-error - Types are incompatible but they actually work.
		stylistic.configs.customize({
			// * Tabs for indentation, spaces for alignment.
			// * This is the way.
			indent: 'tab',

			quotes: opts.codeStyle?.quotes,
			semi: opts.codeStyle?.semi,
		}),
		{
			rules: stylisticRules(opts.codeStyle),
		},
	)
}
