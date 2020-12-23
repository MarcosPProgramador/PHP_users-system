// Imports
var { task, watch, series, dest, src } = require("gulp");
var sass = require("gulp-sass");
var rename = require("gulp-rename");
var autoprefixer = require("autoprefixer");
var postCSS = require("gulp-postcss");
var postCSSNormalize = require("postcss-normalize");

sass.compiler = require("node-sass");

// Src Dist
var src_ = ["./views/src/sass/*.scss", "./views/src/sass/**/*.scss"];
var dist = "./views/public/styles";

// Options config
var sassOptions = {
  outputStyle: "compressed",
  errLogToConsole: true,
};
var suffixOptions = {
  suffix: ".min",
};
var postCSSOptions = [
  autoprefixer(),
  postCSSNormalize({
    browsers: "last 2 versions",
    forceImport: true,
  }),
];

// Scss
task("compiler-scss", function () {
  return src(src_)
    .pipe(sass().on("error", sass.logError))
    .pipe(sass(sassOptions))
    .pipe(postCSS(postCSSOptions))
    .pipe(rename(suffixOptions))
    .pipe(dest(dist));
});
// Watch
task("default", function () {  
  watch(src_, series("compiler-scss"));

});
