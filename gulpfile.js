const { src, dest, series, watch, gulp } = require("gulp");
const uglify = require("gulp-uglify");
const htmlMin = require("gulp-htmlmin");

// styles
const scss = require("gulp-sass")(require("sass"));
const autoPrefixer = require("gulp-autoprefixer");

const cssMinify = require("gulp-clean-css");

function styles() {
  return src("./front/scss/**/*.scss")
    .pipe(scss())
    .pipe(autoPrefixer("last 2 versions"))
    .pipe(cssMinify())
    .pipe(dest("./front/dist/styles/"));
}

// scripts
const jsMinify = require("gulp-terser");

// function scripts() {
//   return src("./front/assets/js/**/*.js")
//     .pipe(jsMinify())
//     .pipe(dest("./front/dist/scripts/"));
// }
function scripts() {
  return src("./front/assets/js/**/*.js")
    .pipe(uglify())
    .pipe(dest("./front/dist/scripts/"));
}
function html() {
  return src("./front/*.html")
    .pipe(htmlMin({ collapseWhitespace: true }))
    .pipe(dest("./front/dist/"));
}
function watchTask() {
  watch(
    ["./front/scss/**/*.scss", "./front/assets/js/**/*.js", "./front/*.html"],
    series(styles, scripts, html)
  );
}

exports.default = series(styles, scripts, html, watchTask);
