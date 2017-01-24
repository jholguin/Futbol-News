module.exports = {
	options: {
    	livereload: false
    },
    gruntfile: {
        files: ['Gruntfile.js']
    },
    sass: {
    	files: [ '<%= paths.src %>/scss/**/*.scss' ],
        tasks: ['build-css']
    },
    js:{
        files: [ '<%= paths.src %>/js/**/*.js' ],
        tasks: ['concat']
    }
}