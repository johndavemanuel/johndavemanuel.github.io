const { src, dest, watch, series, parallel } = require('gulp');
const del = require('del');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
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

// COMPILE SCSS INTO CSS
function compileSCSS() {
  return src(['src/scss/main.scss', 'src/scss/theme-dark.scss', 'src/scss/theme-light.scss'], )
    .pipe(sass({
      outputStyle: 'expanded',
      sourceComments: 'map',
      sourceMap: 'scss',
    }).on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(dest('dist/css'));
}

// MINIFY CSS
function minifyCss() {
  return src([
		'dist/css/main.css'
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
			'node_modules/jquery/dist/jquery.js',
      'node_modules/bootstrap/dist/js/bootstrap.bundle.js',
      'node_modules/owl.carousel/dist/owl.carousel.js',
			'src/js/custom.js',
    ])
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(dest('dist/js'));
}

// MINIFY SCRIPTS
function minifyScripts() {
  return src('dist/js/main.js')
    // .pipe(removeLog())
    .pipe(removeCode({
      production: true
    }))
    .pipe(uglify().on('error', console.error))
    .pipe(rename('main.min.js'))
    .pipe(dest('dist/js'));
}

// COPIES AND MINIFY IMAGE TO
function copyImages() {
  return src('src/images/**/*.+(png|jpg|jpeg|gif|svg|ico|webp)')
    .pipe(newer('dist/images/'))
    .pipe(imagemin())
    .pipe(dest('dist/images/'));
}


exports.default = series(cleanDist, compileSCSS, minifyCss, concatScripts, minifyScripts, copyImages);