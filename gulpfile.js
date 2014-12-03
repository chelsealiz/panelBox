var gulp = require('gulp');
uglify = require("gulp-uglify");
minifyCss = require("gulp-minify-css");

gulp.task('minify-js', function(){
	gulp.src('panelBox.js').pipe(uglify()).pipe(gulp.dest('minified'));
});

gulp.task('minify-css',function(){
	gulp.src('panelBox.css').pipe(minifyCss()).pipe(gulp.dest('minified'));
});