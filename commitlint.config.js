const Configuration = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'header-max-length': [2, 'always', 72],
		'type-enum': [
			2,
			'always',
			[
				'feat',
				'fix',
				'docs',
				'chore',
				'style',
				'refactor',
				'perf',
				'test',
				'build',
				'ci',
				'revert',
			],
		],
		'scope-enum': [2, 'always', ['config', /^frontend-.+/, /^backend-.+/]],
		'scope-empty': [2, 'never'],
		'subject-empty': [2, 'never'],
		'type-case': [2, 'always', 'lower-case'],
		'scope-case': [2, 'always', 'lower-case'],
		'subject-case': [0],
	},
}

export default Configuration
