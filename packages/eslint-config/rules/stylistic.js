// @ts-check

/**
 * @param {{
 *   semi?: boolean,
 * }} [opts={}]
 *
 * @returns {Partial<import('eslint').Linter.RulesRecord>}
 */
export default (opts = {}) => ({

	// Enforce linebreaks after opening and before closing array brackets.
	// https://eslint.style/rules/default/array-bracket-newline
	'@stylistic/array-bracket-newline': ['error', 'consistent'],

	// Enforce line breaks after each array element.
	// https://eslint.style/rules/default/array-element-newline
	'@stylistic/array-element-newline': ['error', 'consistent'],

	// Enforce consistent brace style for blocks.
	// https://eslint.style/rules/default/brace-style
	'@stylistic/brace-style': ['error', 'stroustrup'],

	// Require or disallow trailing commas.
	// https://eslint.style/rules/default/comma-dangle
	'@stylistic/comma-dangle': ['error', {
		arrays: 'always-multiline',
		objects: 'always-multiline',
		imports: 'always-multiline',
		exports: 'always-multiline',
		functions: 'only-multiline',
	}],

	// Require or disallow spacing between function identifiers and their invocations.
	// Alias of `function-call-spacing`.
	// https://eslint.style/rules/default/func-call-spacing
	'@stylistic/func-call-spacing': ['error', 'never'],

	// Enforce consistent linebreak style.
	// https://eslint.style/rules/default/linebreak-style
	'@stylistic/linebreak-style': ['error', 'unix'],

	// Require a specific member delimiter style for interfaces and type literals.
	// https://eslint.style/rules/default/member-delimiter-style
	'@stylistic/member-delimiter-style': ['error', {
		multiline: { delimiter: 'comma' },
		singleline: { delimiter: 'comma' },
		multilineDetection: 'brackets',
	}],

	// Disallow mixed spaces and tabs for indentation.
	// https://eslint.style/rules/default/no-mixed-spaces-and-tabs
	//
	// * Tabs for indentation, spaces for alignment.
	// * This is the way.
	'@stylistic/no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],

	// Disallow multiple empty lines.
	// https://eslint.style/rules/default/no-multiple-empty-lines
	'@stylistic/no-multiple-empty-lines': ['error', {
		max: 2,
		maxBOF: 0,
		maxEOF: 0,
	}],

	// Enforce location of semicolons.
	// https://eslint.style/rules/default/semi-style
	//
	// In semicolon-less style, semicolons are at the beginning of lines.
	'semi-style': ['error', opts.semi ? 'last' : 'first'],

	// Enforce consistent spacing after the `//` or `/*` in a comment.
	// https://eslint.style/rules/default/spaced-comment
	'@stylistic/spaced-comment': ['error', 'always', {
		exceptions: ['-'],
	}],
})
