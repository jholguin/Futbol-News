'use strict';

module.exports = function (grunt) {
	var base = 'app';

	// Load grunt tasks automagically.
	require('load-grunt-config')(grunt, {
		data: {
			paths: {
				node_modules: 'node_modules',
				src: 'lib',
				dist: base + '/assets'
			}
		}
	});
};