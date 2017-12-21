// First comment
'use strict'; // jscs:disable

var gulp = require('gulp-task-doc');

/**
 * Example of jsdoc comment
 * --arg1 Argument 1
 * @verbose
 * @custom Custom data
 */
gulp.task('jsdoc-comment', function() {
  //...
});

/*
 * Block with wrong jsdoc
 * @tag1
 * @tag2 Tag2 data
 */
gulp.task('block-comment', function() {
  //...
});

// Single line comment
gulp.task('single-line', function() {
  /* */
});

/* Single line block comment */
gulp.task('single-line-block', function() {
  /* */
});

// @internal
gulp.task('internal', function() {
  /* */
});

/**
 * Example of jsdoc
 * 
 * @param {number} arg1
 * @param {number} arg2
 * @returns {string}
 */
function exampleFunction(arg1, arg2) {
  return arg1 + '+' + arg2;
}

/**
 * 
 * Text 1
 * 
 * Text 2
 * 
 */