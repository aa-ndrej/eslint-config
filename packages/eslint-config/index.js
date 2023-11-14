import eslintComments from '@eslint-community/eslint-plugin-eslint-comments'
import js from '@eslint/js'
import ts from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

import jsRules from './rules/js/index.js'
import jsStyleRules from './rules/js/style.js'
import tsRules from './rules/ts/index.js'
import tsStyleRules from './rules/ts/style.js'


export function defineESLintConfig(configs) {
	return configs.flat()
}


export function baseConfig() {
	/** @type {import('eslint').ESLint.ConfigData} */
	return [
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
				...jsStyleRules,
			},
		},
		{
			//------------
			// TypeScript
			//------------
			// TODO: See https://typescript-eslint.io/linting/typed-linting
			// TODO: Adjust when typescript-eslint supports flat config.
			//       Issue: https://github.com/typescript-eslint/typescript-eslint/issues/7694
	
			files: ['**/*.+(ts|tsx|cts|mts)'],
	
			languageOptions: {
				parser: tsParser,
				parserOptions: ts.configs.base.parserOptions,
			},
			plugins: {
				'@typescript-eslint': ts,
			},
	
			rules: {
				...ts.configs['eslint-recommended'].overrides[0].rules,
				...ts.configs.recommended.rules,
	
				...tsRules,
				...tsStyleRules,
			},
		},
	]
}
