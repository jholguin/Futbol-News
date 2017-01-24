module.exports = {
    libs: {
        src:[
            '<%= paths.node_modules %>angular/angular.js',
            '<%= paths.node_modules %>angular-scroll/angular-scroll.js',
            '<%= paths.src %>js/app.js',
            '!<%= paths.src %>js/factory/**/*.spec.js',
            '<%= paths.src %>js/factory/**/*.js',
            '<%= paths.src %>js/controllers/**/*.js'
        ],
        dest: '<%= paths.dist %>js/app.js'
    }
}