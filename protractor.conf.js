exports.config = {
	seleniumServerJar: './node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-2.40.0.jar',
	specs: [
		'specs/functional/**/*.js'
	],
	seleniumArgs: ['-browserTimeout=60'],
		capabilities: {
			'browserName': 'PhantomJS',

			'phantomjs.binary.path':'./node_modules/karma-phantomjs-launcher/node_modules/phantomjs/bin/phantomjs'
		},
	baseUrl: 'http://localhost:8000/app',
	allScriptsTimeout: 30000
};