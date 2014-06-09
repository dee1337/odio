module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 9001,
                    keepalive: true,
                    base: './'
                }
            }
        },

        useminPrepare: {
            html: 'dist/index.html',
            options: {
                root: './',
                dest: 'dist'
            }
        },

        usemin: {
            html: 'dist/index.html'
        },

        copy: {
            main: {
                files: [
                    {expand: true, src: ['index.html'], dest: 'dist/'},
                    {expand: true, src: ['images/**/*'], dest: 'dist/'}
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-usemin');

    // Default task(s).
    grunt.registerTask('default', ['connect:server']);
    grunt.registerTask('build', ['copy', 'useminPrepare', 'concat', 'uglify', 'cssmin', 'usemin']);
};