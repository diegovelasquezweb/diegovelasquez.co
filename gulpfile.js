var gulp = require("gulp"),
    sass = require("gulp-sass"),
    rename = require("gulp-rename"),
    sourcemaps = require("gulp-sourcemaps"),
    autoprefixer = require("gulp-autoprefixer"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify");

var theme = {
  cssName: "main.min.css",
  cssSrc: ".dev/styles/main.scss",
  cssDist: "assets/css/",
  jsName: "libs.min.js",
  jsSrc: ".dev/scripts/**/*.js",
  jsDist: "assets/js/"
};

gulp.task("styles", function () {
  return gulp
    .src(theme.cssSrc)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer({
      browsers: "last 2 versions"
    }))
    .pipe(rename(theme.cssName))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(theme.cssDist));
});

gulp.task("scripts", function () {
  return gulp
    .src(theme.jsSrc)
    .pipe(concat("scripts.js"))
    .pipe(rename(theme.jsName))
    .pipe(uglify())
    .pipe(gulp.dest(theme.jsDist));
});

gulp.task("watch", function () {
  gulp.watch(".dev/styles/**/*.*", ["styles"]);
  gulp.watch(".dev/scripts/**/*.*", ["scripts"]);
});

gulp.task("default", ["scripts", "styles", "watch"]);
