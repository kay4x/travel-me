const gulp = require("gulp");
const postcss = require("gulp-postcss");
const nested = require("postcss-nested");
const autoprefixer = require("autoprefixer");
const cssVars = require("postcss-simple-vars");
const cssImport = require("postcss-import");
const mixins = require("postcss-mixins");
const hexRgba = require("postcss-hexrgba");





gulp.task("styles", () => {
  const plugins = [cssImport, mixins, cssVars, hexRgba ,nested, autoprefixer];
  return gulp.src("./app/assets/styles/styles.css")
  .pipe(postcss(plugins))
  .on("error", function(errInfo) {
   console.log(errInfo.toString());  // eslint-disable-line no-console
   this.emit("end");
  })
  .pipe(gulp.dest("./app/temp/styles"));
});
