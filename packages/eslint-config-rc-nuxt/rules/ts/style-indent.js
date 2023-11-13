
/**
 * @example
 * ~~~ts
 * type MyType = Promise<
 *   string
 * >
 * ~~~
 */
const typeParameterInstantiation = 'TSTypeParameterInstantiation'

/**
 * @example
 * ~~~ts
 * const x:
 *   | 'foo'
 *   | 'bar'
 * ~~~
 */
const unionType = 'TSUnionType'

/**
 * @example
 * ~~~ts
 * const x:
 *   & 'foo'
 *   & 'bar'
 * ~~~
 */
const intersectionType = 'TSIntersectionType'


// ! Keep in sync with the JS equivalent rule.
module.exports = {
	SwitchCase: 1,
	ignoredNodes: [
		typeParameterInstantiation,
		unionType,
		intersectionType,
	],
}
