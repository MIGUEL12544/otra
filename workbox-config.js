module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{json,png,html,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};