import { baseConfig, defineESLintConfig } from '@aa-ndrej/eslint-config'

export default defineESLintConfig([
	baseConfig(),
	{
		files: ['packages/eslint-config-rc-nuxt/**/*.+(js|jsx|cjs|mjs)'],

		languageOptions: {
			sourceType: 'commonjs',
		},
	},
])
