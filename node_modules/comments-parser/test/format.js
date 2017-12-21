'use strict';

require('mocha');
require('should');

var parser = require('rewire')('..');
var formatLines = parser.__get__('formatLines');


describe('formatLines', function() {

  it('should format single-line comment', function() {
    var single = [' Single string  \t'];
    formatLines(single).should.deepEqual(['Single string']);
    formatLines(single, true).should.deepEqual(['Single string']);
  });

  it('should format jsdoc comment', function() {
    var jsdoc = [
      '*',
      ' * Line 1 ',
      ' * Line 2 ',
      ' '
    ];
    formatLines(jsdoc).should.deepEqual([ 'Line 1', 'Line 2']);
  });

  it('should format void jsdoc comment', function() {
    var jsdoc = [
      '*',
      '  * ',
      '  * Line 2 ',
      '  '
    ];
    formatLines(jsdoc).should.deepEqual([ 'Line 2' ]);
  });

  it('should format multi-line comment', function() {
    var multi = [
      '',
      ' Line 1',
      ' Line 2',
      ''
    ];
    formatLines(multi).should.deepEqual(['Line 1', 'Line 2']);
  });

  it('should format single-line block comment', function() {
    var singleBlock = ['  Test  \t\t\t'];
    formatLines(singleBlock).should.deepEqual([ 'Test' ]);
  });
  
});