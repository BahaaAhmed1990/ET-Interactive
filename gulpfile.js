const { src, dest, series, watch } = require("gulp");

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

function scripts() {
  return src("./front/assets/js/**/*.js")
    .pipe(jsMinify())
    .pipe(dest("./front/dist/scripts/"));
}

function watchTask() {
  watch(
    ["./front/scss/**/*.scss", "./front/assets/js/**/*.js"],
    series(styles, scripts)
  );
}

exports.default = series(styles, scripts, watchTask);
