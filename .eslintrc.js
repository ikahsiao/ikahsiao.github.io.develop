module.exports = {
	root: true,
	env: {
		node: true,
	},
	globals: {
		google: 'readonly',
		MarkerClusterer: 'readonly',
	},
	extends: [
		'plugin:vue/recommended',
		'@vue/airbnb',
	],
	rules: {
		'no-console': 'off', // enable using console in dev mode but got err in production
		'no-debugger': 'off', // enable using debugger in dev mode but got err in production
		'import/extensions': [
			'error', 'always',
			{
				js: 'never',
				vue: 'never',
			},
		],
		'vue/max-attributes-per-line': 1, // limit the maximum attributes in each line
		'no-plusplus': ['error', { allowForLoopAfterthoughts: true }], // enable using ++/-- in for loop
		'no-param-reassign': 0, // function parameters could be reassign value
		indent: ['error', 'tab'],
		'vue/html-indent': ['error', 'tab'],
		'no-tabs': 0, //  Airbnb has set the rule no-tabs to 2 or error,
		'import/no-dynamic-require': 0,
		'prefer-destructuring': ['error', { AssignmentExpression: { array: false, object: false } }],
		'object-curly-newline': ['error', { consistent: true }],
		'newline-before-return': 'error',
		'no-bitwise': ['error', { allow: ['^', '|', '&', '<<', '>>>'] }],
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
};
