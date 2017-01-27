module.exports = {
	app: {
		src:[	
			'<%= paths.node_modules %>/angular/angular.js',	
			'<%= paths.node_modules %>/angular-resource/angular-resource.js',
			'<%= paths.node_modules %>/angular-sanitize/angular-sanitize.js',
			'<%= paths.node_modules %>/angular-scroll/angular-scroll.js',
			'<%= paths.src %>/js/app.js',
			'<%= paths.src %>/js/factory/**/*.js',
			'<%= paths.src %>/js/controllers/**/*.js'
		],
		dest: '<%= paths.dist %>/js/app.js'
	}
};