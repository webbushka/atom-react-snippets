var gulp = require('gulp'),
	debug = require('gulp-debug'),
	lintspaces = require('gulp-lintspaces');

gulp.task('lintspaces', function() {
	return gulp.src(['**/*', '!node_modules/**/*'])
		.pipe(debug({title: 'lintspaces'}))
		.pipe(lintspaces({
			editorconfig: '.editorconfig'
		}))
		.pipe(lintspaces.reporter());
});

gulp.task('default', ['lintspaces']);
