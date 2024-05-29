// @ts-check

// ! ESLint stylistic rules are frozen !
// https://eslint.org/blog/2020/05/changes-to-rules-policies (2023-05-29)
// https://typescript-eslint.io/linting/troubleshooting/formatting (2023-05-29)
//
// ! BUT !
// According to the ESLint team this means:
// https://github.com/eslint/eslint#stylistic-rule-updates (2023-05-29)
//
// - Bug fixes:
//     We will still fix bugs in stylistic rules.
// - New ECMAScript features:
//     We will also make sure stylistic rules are compatible with new ECMAScript features.
// - New options:
//     We will not add any new options to stylistic rules unless an option is the only way
//     to fix a bug or support a newly-added ECMAScript feature.
//


const indent = require('./style-indent')


/** @type {Partial<import('eslint').Linter.RulesRecord>} */
module.exports = {

	//-----------------------
	// #region - Indentation
	//-----------------------
	// * Tabs for indentation, spaces for alignment.
	// * This is the way.

	// Enforce consistent indentation.
	// https://typescript-eslint.io/rules/indent
	//
	// ! Keep in sync with the JS equivalent rule.
	'indent': 'off',
	'@typescript-eslint/indent': ['error', 'tab', indent],

	// #endregion
	//-----------------------


	// Disallow or enforce spaces inside of blocks after opening block and before closing block.
	// https://typescript-eslint.io/rules/block-spacing
	//
	// ! Keep in sync with the JS equivalent rule.
	'block-spacing': 'off',
	'@typescript-eslint/block-spacing': ['error', 'always'],

	// Enforce consistent brace style for blocks.
	// https://typescript-eslint.io/rules/brace-style
	//
	// ! Keep in sync with the JS equivalent rule.
	'brace-style': 'off',
	'@typescript-eslint/brace-style': ['error', 'stroustrup'],

	// Require or disallow trailing commas.
	// https://typescript-eslint.io/rules/comma-dangle
	//
	// ! Keep in sync with the JS equivalent rule.
	'comma-dangle': 'off',
	'@typescript-eslint/comma-dangle': ['error', {
		arrays: 'always-multiline',
		objects: 'always-multiline',
		imports: 'always-multiline',
		exports: 'always-multiline',
		functions: 'only-multiline',

		// TypeScript specific options.
		enums: 'always-multiline',
		generics: 'always-multiline',
		tuples: 'always-multiline',
	}],

	// Enforce consistent spacing before and after commas.
	// https://typescript-eslint.io/rules/comma-spacing
	//
	// ! Keep in sync with the JS equivalent rule.
	'comma-spacing': 'off',
	'@typescript-eslint/comma-spacing': ['error', { before: false, after: true }],

	// Require or disallow spacing between function identifiers and their invocations.
	// https://typescript-eslint.io/rules/func-call-spacing
	//
	// ! Keep in sync with the JS equivalent rule.
	'func-call-spacing': 'off',
	'@typescript-eslint/func-call-spacing': ['error', 'never'],

	// Enforce consistent spacing between property names and type annotations
	// in types and interfaces.
	// https://typescript-eslint.io/rules/key-spacing
	//
	// ! Keep in sync with the JS equivalent rule.
	'key-spacing': 'off',
	'@typescript-eslint/key-spacing': ['error', {
		beforeColon: false,
		afterColon: true,
		mode: 'minimum',
	}],

	// Enforce consistent spacing before and after keywords.
	// https://typescript-eslint.io/rules/keyword-spacing
	//
	// ! Keep in sync with the JS equivalent rule.
	'keyword-spacing': 'off',
	'@typescript-eslint/keyword-spacing': ['error'],

	// Require or disallow an empty line between class members.
	// https://typescript-eslint.io/rules/lines-between-class-members
	//
	// ! Keep in sync with the JS equivalent rule.
	// 'lines-between-class-members': 'off',
	// '@typescript-eslint/lines-between-class-members': 'off',

	// Require a specific member delimiter style for interfaces and type literals.
	// https://typescript-eslint.io/rules/member-delimiter-style
	'@typescript-eslint/member-delimiter-style': ['error', {
		multiline: { delimiter: 'comma' },
		singleline: { delimiter: 'comma' },
		multilineDetection: 'last-member',
	}],

	// Enforce the consistent use of either backticks, double, or single quotes.
	// https://typescript-eslint.io/rules/quotes
	//
	// * Use single quotes as the are widely spread among the JS community.
	// * See https://bytearcher.com/articles/single-or-double-quotes-strings-javascript/
	//
	// ! Keep in sync with the JS equivalent rule.
	'quotes': 'off',
	'@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }],

	// Require or disallow semicolons instead of ASI.
	// https://typescript-eslint.io/rules/semi
	//
	// ! Keep in sync with the JS equivalent rule.
	'semi': 'off',
	'@typescript-eslint/semi': ['error', 'never'],

	// Enforce consistent spacing before blocks.
	// https://typescript-eslint.io/rules/space-before-blocks
	//
	// ! Keep in sync with the JS equivalent rule.
	'space-before-blocks': 'off',
	'@typescript-eslint/space-before-blocks': ['error', 'always'],

	// Enforce consistent spacing before function parenthesis.
	// https://typescript-eslint.io/rules/space-before-function-paren
	//
	// ! Keep in sync with the JS equivalent rule.
	'space-before-function-paren': 'off',
	'@typescript-eslint/space-before-function-paren': ['error', {
		anonymous: 'always',
		named: 'never',
		asyncArrow: 'always',
	}],
}
