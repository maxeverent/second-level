const gulp = require('gulp');
const uglify = require('gulp-uglify-es').default;
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const useref = require('gulp-useref');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin')
const babel = require('gulp-babel');

function js() {
	return gulp.src("src/js/**/*.js")
		.pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(babel({
      presets: ['@babel/env']
    }))
		.pipe(gulp.dest("dist/js"));
}

function styles() {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest('./dist/css'))
}

function html() {
    return gulp.src('src/**/*.html')
        .pipe(useref({noAssets: true}))
        .pipe(gulp.dest('dist'));
}

function images() {
  return gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
}

function browser() {
  browserSync.init({
    server: {
        baseDir: "./dist"
    }
  })
}

function watching(done) {
  gulp.watch('./src/scss/**/*.scss', styles).on('change', browserSync.reload)
  gulp.watch('./src/js/*.js', js).on('change', browserSync.reload)
  gulp.watch('./src/*.html', html).on('change', browserSync.reload)
  done()
}

gulp.task('default', gulp.series([watching, styles, js, html, images, browser]))

