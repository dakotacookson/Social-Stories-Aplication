module.exports = function (grunt) {
    require("load-grunt-config")(grunt);
    };
    grunt.registerTask('heroku',
    ['compass:dist', 'autoprefixer', 'imagemin']);