/** @type {Partial<import('eslint').Linter.RulesRecord>} */
module.exports = {

	// Disallow unused variables.
	// https://eslint.org/docs/latest/rules/no-unused-vars
	//
	// ! Keep in sync with the TS equivalent rule.
	'no-unused-vars': ['warn', { varsIgnorePattern: '^_' }],

	// Require the use of `===` and `!==`.
	// https://eslint.org/docs/latest/rules/eqeqeq
	'eqeqeq': ['warn', 'always', { null: 'ignore' }],

	// Require `const` declarations for variables that are never reassigned after declared.
	// https://eslint.org/docs/latest/rules/prefer-const
	'prefer-const': ['warn'],
}
