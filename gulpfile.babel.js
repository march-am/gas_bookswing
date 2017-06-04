import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import runSequence from 'run-sequence';

const $ = gulpLoadPlugins();
const src_file = 'dev/**/*.js';

gulp.task('gas-upload', ['browserify'], () =>
  gulp.src('.')
    .pipe($.exec('gapps upload'))
)

gulp.task('test', () =>
  gulp.src(['test/**/*.js'], { read: false })
    .pipe($.mocha({ reporter: 'spec' }))
)

gulp.task('browserify', ['test'], () =>
  browserify({
    entries: ['dev/main.js']
  }).transform('babelify')
    .plugin('gasify')
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('src'))
);

// gulp.task('watch', () =>
//   gulp.watch(src_file, ['test', 'browserify', 'gas-upload'])
// );

gulp.task('default', ['test', 'browserify', 'gas-upload'], () => {});
