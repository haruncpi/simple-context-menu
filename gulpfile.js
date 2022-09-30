let gulp = require('gulp');
let uglify = require('gulp-uglify');
let rename = require('gulp-rename');

gulp.task('build', function(){    
    return gulp.src(['./src/js/*.js'])         
        .pipe(uglify())       
        .pipe(rename({suffix:'.min'}))       
        .pipe(gulp.dest('./dist/js')); 
})

gulp.task('watch', function(){       
	gulp.watch('./src/js/*.js', gulp.series(['build']));
});