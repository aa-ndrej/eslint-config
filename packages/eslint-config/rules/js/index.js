/** @type {Partial<import('eslint').Linter.RulesRecord>} */
module.exports = {

	// Disallow unused variables.
	// https://eslint.org/docs/latest/rules/no-unused-vars
	//
	// ! Keep in sync with the TS equivalent rule.
	'no-unused-vars': ['warn', { varsIgnorePattern: '^_' }],
}
