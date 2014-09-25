exports.config = {
	specs: [
		'specs/functional/**/*.js'
	],
	seleniumArgs: ['-browserTimeout=60'],
		capabilities: {
			'browserName': 'PhantomJS',

			'phantomjs.binary.path':'./node_modules/karma-phantomjs-launcher/node_modules/phantomjs/bin/phantomjs'
		},
	baseUrl: 'http://localhost:8000',
	allScriptsTimeout: 30000
};