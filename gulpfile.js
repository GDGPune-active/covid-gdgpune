const gulp = require("gulp");
const gap = require("gulp-append-prepend");

gulp.task("licenses", async () => {
  // this is to add GDG Pune licenses in the production mode for the minified js
  gulp
    .src("build/static/js/*chunk.js", { base: "./" })
    .pipe(
      gap.prependText(`/*!

=========================================================
* COVID Support Platform - GDG Pune
=========================================================

* Product Page: <TODO: Add URL>
* Copyright 2021 GDG Pune

* Coded by GDG Pune

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  // this is to add GDG Pune licenses in the production mode for the minified html
  gulp
    .src("build/index.html", { base: "./" })
    .pipe(
      gap.prependText(`<!--

=========================================================
* COVID Support Platform - GDG Pune
=========================================================

* Product Page: <TODO: Add URL>
* Copyright 2021 GDG Pune

* Coded by GDG Pune

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

-->`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  // this is to add GDG Pune licenses in the production mode for the minified css
  gulp
    .src("build/static/css/*chunk.css", { base: "./" })
    .pipe(
      gap.prependText(`/*!

=========================================================
* COVID Support Platform - GDG Pune
=========================================================

* Product Page: <TODO: Add URL>
* Copyright 2021 GDG Pune

* Coded by GDG Pune

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));
});
