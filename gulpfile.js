const { src, dest, watch, series, parallel } = require('gulp');
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const removeLog = require('gulp-remove-logging');
const removeCode = require('gulp-remove-code');
const uglify = require('gulp-uglify-es').default;
const newer = require('gulp-newer');
const imagemin = require('gulp-imagemin');


// DELETE DIST FOLDER
function cleanDist(done) {
  del.sync('dist');
  return done();
}

// MINIFY CSS
function minifyCss() {
  return src([
      'src/css/*'
    ])
    .pipe(sourcemaps.init())
    .pipe(concat('main.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(cssmin())
    .pipe(rename('main.min.css'))
    .pipe(dest('dist/css'));
}

// CONCATINATE JS
function concatScripts() {
  return src([
      'src/js/jquery-3.6.0.min.js',
			'src/js/bootstrap.min.js',
      'src/js/owl.carousel.min.js',
    ])
    .pipe(sourcemaps.init())
    .pipe(concat('main.min.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(dest('dist/js'));
}

// MINIFY SCRIPTS
// function minifyScripts() {
//   return src('dist/js/main.js')
//     .pipe(removeLog())
//     .pipe(removeCode({
//       production: true
//     }))
//     .pipe(uglify().on('error', console.error))
//     .pipe(rename('main.min.js'))
//     .pipe(dest('dist/js'));
// }

// COPIES AND MINIFY IMAGE TO
function copyImages() {
  return src('src/images/**/*.+(png|jpg|jpeg|gif|svg|ico)')
    .pipe(newer('dist/images/'))
    .pipe(imagemin())
    .pipe(dest('dist/images/'));
}


exports.dev = series(cleanDist, minifyCss, concatScripts, copyImages);