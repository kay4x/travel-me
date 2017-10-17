const browserSync = require("browser-sync").create();
const gulp = require("gulp");
const watch = require("gulp-watch");



gulp.task("watch",  () =>  {
  browserSync.init({notify: false, server: {baseDir: "app"}});
  watch("./app/index.html", () => browserSync.reload());
  watch("./app/assets/styles/**/*.css", () => gulp.start("injectCss"));
  watch("./app/assets/scripts/**/*.js", () => gulp.start("scriptsRefresh"));
});


gulp.task("injectCss", ["styles"],  () => {
  return gulp.src("./app/temp/styles")
  .pipe(browserSync.stream());
});


gulp.task("scriptsRefresh", ["scripts"], () =>  {
  browserSync.reload();
});
