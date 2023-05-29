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


/** @type {Partial<import('eslint').Linter.RulesRecord>} */
module.exports = {

	//-----------------------
	// #region - Indentation
	//-----------------------
	// * Tabs for indentation, spaces for alignment.
	// * This is the way.

	// Enforce consistent indentation.
	// https://eslint.org/docs/latest/rules/indent
	//
	// ! Keep in sync with the TS equivalent rule.
	'indent': ['error', 'tab', {
		SwitchCase: 1,
	}],
	
	// Disallow mixed spaces and tabs for indentation.
	// https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs
	'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],

	// #endregion
	//-----------------------
	
	
	//-----------------------------------
	// #region - ESLint Suggestions list
	//-----------------------------------
	// https://eslint.org/docs/latest/rules


	// Enforce consistent brace style for all control statements.
	// https://eslint.org/docs/latest/rules/curly
	'curly': ['error', 'multi-line', 'consistent'],
	
	// Require quotes around object literal property names.
	// https://eslint.org/docs/latest/rules/quote-props
	'quote-props': ['error', 'consistent-as-needed'],
	
	// #endregion
	//-----------------------------------


	//-------------------------------------------
	// #region - ESLint Layout & Formatting list
	//-------------------------------------------
	// https://eslint.org/docs/latest/rules


	// Enforce linebreaks after opening and before closing array brackets.
	// https://eslint.org/docs/latest/rules/array-bracket-newline
	'array-bracket-newline': ['error', 'consistent'],
	
	// Enforce consistent spacing inside array brackets.
	// https://eslint.org/docs/latest/rules/array-bracket-spacing
	'array-bracket-spacing': ['error', 'never'],

	// Enforce line breaks after each array element.
	// https://eslint.org/docs/latest/rules/array-element-newline
	'array-element-newline': ['error', 'consistent'],

	// Require parentheses around arrow function arguments.
	// https://eslint.org/docs/latest/rules/arrow-parens
	'arrow-parens': ['error', 'as-needed', {
		requireForBlockBody: true,
	}],

	// Enforce consistent spacing before and after the arrow in arrow functions.
	// https://eslint.org/docs/latest/rules/arrow-spacing
	'arrow-spacing': ['error', {
		before: true,
		after: true,
	}],

	// Disallow or enforce spaces inside of blocks after opening block and before closing block.
	// https://eslint.org/docs/latest/rules/block-spacing
	//
	// ! Keep in sync with the TS equivalent rule.
	'block-spacing': ['error', 'always'],
	
	// Enforce consistent brace style for blocks.
	// https://eslint.org/docs/latest/rules/brace-style
	//
	// ! Keep in sync with the TS equivalent rule.
	'brace-style': ['error', 'stroustrup'],

	// Require or disallow trailing commas.
	// https://eslint.org/docs/latest/rules/comma-dangle
	// 
	// * Trailing commas simplify adding and removing items to objects and arrays,
	// * since only the lines you are modifying must be touched.
	// * This also improves the clarity of version-control diffs.
	//
	// ! Keep in sync with the TS equivalent rule.
	'comma-dangle': ['error', 'always-multiline'],
	
	// Enforce consistent spacing before and after commas.
	// https://eslint.org/docs/latest/rules/comma-spacing
	//
	// ! Keep in sync with the TS equivalent rule.
	'comma-spacing': ['error', { before: false, after: true }],
	
	// Enforce consistent comma style.
	// https://eslint.org/docs/latest/rules/comma-style
	'comma-style': ['error', 'last'],

	// Enforce consistent spacing inside computed property brackets.
	// https://eslint.org/docs/latest/rules/computed-property-spacing
	'computed-property-spacing': ['error', 'never'],

	// Enforce consistent newlines before and after dots.
	// https://eslint.org/docs/latest/rules/dot-location
	'dot-location': ['error', 'property'],

	// Require or disallow newline at the end of files.
	// https://eslint.org/docs/latest/rules/eol-last
	'eol-last': ['error', 'always'],

	// Require or disallow spacing between function identifiers and their invocations.
	// https://eslint.org/docs/latest/rules/func-call-spacing
	//
	// ! Keep in sync with the TS equivalent rule.
	'func-call-spacing': ['error', 'never'],
	
	// Enforce consistent spacing between keys and values in object literal properties.
	// https://eslint.org/docs/latest/rules/key-spacing
	//
	// ! Keep in sync with the TS equivalent rule.
	'key-spacing': ['error', { beforeColon: false, afterColon: true }],
	
	// Enforce consistent spacing before and after keywords.
	// https://eslint.org/docs/latest/rules/keyword-spacing
	//
	// ! Keep in sync with the TS equivalent rule.
	'keyword-spacing': ['error'],

	// Enforce position of line comments.
	// https://eslint.org/docs/latest/rules/line-comment-position
	// 'line-comment-position': 'off'

	// Enforce consistent linebreak style.
	// https://eslint.org/docs/latest/rules/linebreak-style
	'linebreak-style': ['error', 'unix'],

	// Require or disallow an empty line between class members.
	// https://eslint.org/docs/latest/rules/lines-between-class-members
	//
	// ! Keep in sync with the TS equivalent rule.
	// 'lines-between-class-members': 'off',

	// Enforce or disallow parentheses when invoking a constructor with no arguments.
	// https://eslint.org/docs/latest/rules/new-parens
	'new-parens': ['error', 'always'],

	// Disallow all tabs.
	// https://eslint.org/docs/latest/rules/no-tabs
	// 'no-tabs': 'off',
	
	// Enforce consistent spacing inside braces.
	// https://eslint.org/docs/latest/rules/object-curly-spacing
	//
	// ! Keep in sync with the TS equivalent rule
	'object-curly-spacing': ['error', 'always'],
	
	// Enforce the consistent use of either backticks, double, or single quotes.
	// https://eslint.org/docs/latest/rules/quotes
	//
	// * Use single quotes as the are widely spread among the JS community.
	// * See https://bytearcher.com/articles/single-or-double-quotes-strings-javascript/
	//
	// ! Keep in sync with the TS equivalent rule
	'quotes': ['error', 'single'],
	
	// Enforce spacing between rest and spread operators and their expressions.
	// https://eslint.org/docs/latest/rules/rest-spread-spacing
	'rest-spread-spacing': ['error', 'never'],
	
	// Require or disallow semicolons instead of ASI.
	// https://eslint.org/docs/latest/rules/semi
	//
	// ! Keep in sync with the TS equivalent rule.
	'semi': ['error', 'never'],
	
	// Enforce consistent spacing before and after semicolons.
	// https://eslint.org/docs/latest/rules/semi-spacing
	'semi-spacing': ['error', {
		before: false,
		after: true,
	}],

	// Enforce location of semicolons.
	// https://eslint.org/docs/latest/rules/semi-style
	//
	// * In semicolon-less style, semicolons are at the beginning of lines.
	'semi-style': ['error', 'first'],
	
	// Enforce consistent spacing before blocks.
	// https://eslint.org/docs/latest/rules/space-before-blocks
	//
	// ! Keep in sync with the TS equivalent rule.
	'space-before-blocks': ['error', 'always'],
	
	// Enforce consistent spacing before `function` definition opening parenthesis.
	// https://eslint.org/docs/latest/rules/space-before-function-paren
	//
	// ! Keep in sync with the TS equivalent rule.
	'space-before-function-paren': ['error', {
		anonymous: 'always',
		named: 'never',
		asyncArrow: 'always',
	}],
	
	// Enforce consistent spacing inside parentheses.
	// https://eslint.org/docs/latest/rules/space-in-parens
	'space-in-parens': ['error', 'never'],

	// #endregion
	//-------------------------------------------
}
