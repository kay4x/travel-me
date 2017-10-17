const gulp = require("gulp");
const webpack = require("webpack");
const config = require ("../../webpack.config.js");





gulp.task("scripts", (cb) => {
  webpack(config, (err, stats) => {
    /*eslint-disable no-console */
    if(err) console.log(err.toString());
    console.log(stats.toString());
    cb();
  });
});
