"use strict";

var babelify = require("babelify");
var browserify = require("browserify");
var buffer = require("vinyl-buffer");
var cache = require("gulp-cached");
var concat = require("gulp-concat");
var del = require("del");
var eslint = require("gulp-eslint");
var express = require("express");
var gulp = require("gulp");
var gutil = require("gulp-util");
var livereload = require('connect-livereload');
var ngAnnotate = require("browserify-ngannotate");
var refresh = require('gulp-livereload')
var sass = require("gulp-sass");
var scsslint = require("gulp-scss-lint");
var source = require("vinyl-source-stream");
var sourcemaps = require("gulp-sourcemaps");
var templateCache = require("gulp-angular-templatecache");

var paths = {
    dist: {
        js: "./dist/js",
        root: "./dist",
        styles: "./dist/styles"
    },
    maps: "./maps",
    src: {
        appJs: "./src/App.js",
        generatedTemplates: "./src/templates.js",
        indexHtml: "./src/index.html",
        js: "./src/**/*.js",
        root: "./src",
        styles: "./src/**/*.scss",
        templates: [
            "./src/components/**/template.html",
            "./src/views/**/template.html"
        ]
    }
};

var config = {
    server: {
        port: 8000,
        livereloadport: 35729
    }
}

/**
 * Start a dev server.
 */
gulp.task("webserver", function() {
    var server = express();

    // Add live reload.
    server.use(livereload({
        port: config.server.livereloadport
    }));

    // Use "dist" folder as root folder.
    server.use(express.static(paths.dist.root));

    // Serve index.html for all routes to leave routing up to Angular.
    server.all("/*", function(req, res) {
        res.sendFile("index.html", { root: paths.dist.root });
    });

    gutil.log("Webserver started at http://localhost:8000");

    // Start webserver and live reload.
    server.listen(config.server.port);
    refresh.listen(config.server.livereloadport);
});

/**
 * Bundle Javascript using Browserify.
 */
gulp.task("build-js", function bundle() {
    var bundler = browserify({
        debug: false,
        entries: paths.src.appJs,
        transform: [babelify, ngAnnotate],
    });

    return bundler.bundle()
        .pipe(source("bundle.js"))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .on("error", gutil.log)
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest(paths.dist.js))
        .pipe(refresh());
});

/**
 * Cleans build output.
 */
gulp.task("clean", function () {
    return del(paths.dist.root);
});

/**
 * Compiles SASS and creates source maps.
 */
gulp.task("build-styles", function() {
    return gulp.src(paths.src.styles)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(concat("app.css"))
        .pipe(sourcemaps.write(paths.maps))
        .pipe(gulp.dest(paths.dist.styles))
        .pipe(refresh());
});

/**
 * Populates Angular template cache (prevents loading html templates via separate http requests).
 */
gulp.task("build-templates", function() {
    return gulp.src(paths.src.templates)
        .pipe(templateCache({
            moduleSystem: "Browserify",
            standalone: true
        }))
        .pipe(gulp.dest(paths.src.root));
});

/**
 * Copy index file to dist.
 */
gulp.task("build-index-html", function() {
    return gulp.src(paths.src.indexHtml)
        .pipe(gulp.dest(paths.dist.root))
        .pipe(refresh());
});

/**
 * Lint Javascript.
 */
gulp.task("lint-js", function () {
    var ignoreGeneratedTemplatesPath = "!" + paths.src.generatedTemplates;

    return gulp.src([paths.src.js, ignoreGeneratedTemplatesPath])
        .pipe(cache("lintjs"))
        .pipe(eslint())
        .pipe(eslint.format());
});

/**
 * Lint styles.
 */
gulp.task("lint-styles", function () {
    return gulp.src(paths.src.styles)
        .pipe(cache("lintsass"))
        .pipe(scsslint());
});

/**
 * Full build.
 */
gulp.task("build", ["build-templates", "build-index-html", "lint-js", "lint-styles", "build-styles", "build-js"]);

/**
 * Builds app and starts a local dev server, then watches for changes and builds/reloads.
 */
gulp.task("default", ["build", "webserver"], function() {
    gulp.watch(paths.src.js, ["lint-js", "build-js"]);

    gulp.watch(paths.src.styles, ["lint-styles", "build-styles"]);

    gulp.watch(paths.src.indexHtml, ["build-index-html"]);

    gulp.watch(paths.src.templates, ["build-templates"]);
});
