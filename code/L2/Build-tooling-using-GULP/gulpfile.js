var gulp = require('gulp'); //importing the gulp package
var browserify = require('browserify'); //module load-order management using 'require'
var babelify = require('babelify');//importing babel support for transforming JSX to HTML
var source = require('vinyl-source-stream'); // converts the readable file from browserify to 
											//vinyl stream - virtual file format which gulp requires

gulp.task('build', function () {
    return browserify({entries: './app.jsx', extensions: ['.jsx'], debug: true})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['build'], function () {
    gulp.watch('*.jsx', ['build']);
});

gulp.task('default', ['watch']);