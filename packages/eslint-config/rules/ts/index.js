/** @type {Partial<import('eslint').Linter.RulesRecord>} */
module.exports = {

	// Disallow unused variables.
	// https://typescript-eslint.io/rules/no-unused-vars
	//
	// ! Keep in sync with the JS equivalent rule.
	'no-unused-vars': 'off',
	'@typescript-eslint/no-unused-vars': 'warn',
}
