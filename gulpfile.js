const gulp = require("gulp");
const concat = require("gulp-concat");
const sass = require("gulp-sass");
const cleanCSS = require("gulp-clean-css");

gulp.task("default", () => gulp.src("./src/components/**/*.scss")
  .pipe(sass())
  .pipe(concat("style.css"))
  .pipe(cleanCSS())
  .pipe(gulp.dest("./src/page"))
);
