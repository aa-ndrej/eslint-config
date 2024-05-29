// @ts-check

/** @type {Partial<import('eslint').Linter.RulesRecord>} */
module.exports = {

	// Enforce consistent indentation in `<template>`.
	// https://eslint.vuejs.org/rules/html-indent
	// ! Keep in sync with the JS equivalent rule.
	'vue/html-indent': ['error', 'tab'],

	// Enforce the maximum number of attributes per line.
	// https://eslint.vuejs.org/rules/max-attributes-per-line
	'vue/max-attributes-per-line': ['warn', {
		singleline: { max: 6 },
		multiline: { max: 1 },
	}],

	// Require a line break before and after the contents of a multiline element.
	// https://eslint.vuejs.org/rules/multiline-html-element-content-newline
	'vue/multiline-html-element-content-newline': 'off',

	// Require a line break before and after the contents of a singleline element.
	// https://eslint.vuejs.org/rules/singleline-html-element-content-newline
	'vue/singleline-html-element-content-newline': 'off',
}
