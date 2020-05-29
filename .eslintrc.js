module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/recommended',
		'@vue/airbnb',
	],
	rules: {
		'vue/max-attributes-per-line': 1, // limit the maximum attributes in each line
		'vue/html-indent': ['error', 'tab'],
		'no-tabs': 0, //  Airbnb has set the rule no-tabs to 2 or error,
		'newline-before-return': 'error',
		indent: ['error', 'tab'],
		'import/extensions': [
			'error', 'always',
			{
				js: 'never',
				vue: 'never',
			},
		],
	}
}