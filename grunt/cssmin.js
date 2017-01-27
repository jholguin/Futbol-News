module.exports = {
	target: {
    	files: [{
      		expand: true,
      		cwd: '<%= paths.dist %>/css',
  			src: ['*.css', '!*.min.css'],
      		dest: '<%= paths.dist %>/css',
      		ext: '.css'
    	}]
  	}
};