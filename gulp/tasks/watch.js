const gulp = require('gulp'),
	watch = require('gulp-watch'),
	browserSynk = require('browser-sync').create();

gulp.task('watch', () => {
	browserSynk.init({
		notify: false,
		server: {
			baseDir: 'app'
		}
	});
	watch('./app/index.html', () => {
		browserSynk.reload();
	});
	watch('./app/assets/styles/**/*.css', () => {
		gulp.start('cssInject');
	});
});

gulp.task('cssInject', [ 'styles' ], () => {
	gulp.src('./app/temp/styles/styles.css').pipe(browserSynk.stream());
});
