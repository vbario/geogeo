'use strict';

require('mocha');
require('should');

var parser = require('..');


describe('parser', function() {

  it('should parse single line', function() {
    var result = [{
      start: 1,
      end:   1,
      jsDoc: false,
      lines: [ 'Single' ],
      tags:  []
    }];

    parser('// Single').should.deepEqual(result);
    parser(' // Single').should.deepEqual(result);
  });

  it('should parse void single line block comment', function() {
    var result = [{
      start: 1,
      end:   1,
      jsDoc: false,
      lines: [ ],
      tags:  []
    }];

    parser('/**/').should.deepEqual(result);
    parser('/* */').should.deepEqual(result);
  });
  
  it('should parse comment with whitespaces', function() {
    parser([
      '/**',
      ' * Example of jsdoc',
      ' *',
      ' * @param {number} arg1',
      ' * @param {number} arg2',
      ' * @returns {string}',
      ' */'].join('\n')
    ).should.deepEqual([{
      start: 1,
      end: 7,
      jsDoc: true,
      lines: [ 'Example of jsdoc' ],
      tags: [
        { name: 'param',   value: '{number} arg1' },
        { name: 'param',   value: '{number} arg2' },
        { name: 'returns', value: '{string}'      }
      ]
    }]);
  });

});