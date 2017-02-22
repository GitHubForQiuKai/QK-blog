var gulp = require('gulp');
var babel = require('gulp-babel');
gulp.task("es6 to es5", function() {
    gulp.src('server/**/*.es')
        .pipe(babel({
            "presets": ['es2015', 'stage-3'],
            "plugins": [
                ["transform-runtime", {
                    "polyfill": false,
                    "regenerator": true
                }]
            ]
        }))
        .pipe(gulp.dest('./dist'));
});
gulp.task('default', ['es6 to es5']);
