module.exports = {
	options: {
  		mangle: false
	},
    my_target: {
      	files: {
        	'<%= paths.dist %>/js/app.js': '<%= paths.dist %>/js/app.js'
      	}
    }
};