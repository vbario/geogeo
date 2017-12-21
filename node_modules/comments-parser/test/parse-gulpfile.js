'use strict';

require('mocha');
require('should');

var fs     = require('fs');
var parser = require('..');


var file = fs.readFileSync(__dirname + '/fixtures/gulpfile.js', 'utf-8');

describe('parser gulpfile example', function() {

  it('should generate correct data', function() {
    var comments = parser(file);
    comments.should.deepEqual([
      {
        start: 1,
        end: 1,
        jsDoc: false,
        lines: [ 'First comment' ],
        tags: []
      },
      {
        start: 2,
        end: 2,
        jsDoc: false,
        lines: [ 'jscs:disable' ],
        tags: []
      },
      {
        start: 6,
        end: 11,
        jsDoc: true,
        lines: [ 'Example of jsdoc comment', '--arg1 Argument 1' ],
        tags: [
          { name: 'verbose', value: true          },
          { name: 'custom',  value: 'Custom data' }
        ]
      },
      {
        start: 13,
        end: 13,
        jsDoc: false,
        lines: [ '...' ],
        tags: []
      },
      {
        start: 16,
        end: 20,
        jsDoc: false,
        lines: [ 'Block with wrong jsdoc' ],
        tags: [
          { name:  'tag1', value: true },
          { name:  'tag2', value: 'Tag2 data' }
        ]
      },
      {
        start: 22,
        end: 22,
        jsDoc: false,
        lines: [ '...' ],
        tags: []
      },
      {
        start: 25,
        end: 25,
        jsDoc: false,
        lines: [ 'Single line comment' ],
        tags: []
      },
      {
        start: 27,
        end: 27,
        jsDoc: false,
        lines: [],
        tags: []
      },
      {
        start: 30,
        end: 30,
        jsDoc: false,
        lines: [ 'Single line block comment' ],
        tags: []
      },
      {
        start: 32,
        end: 32,
        jsDoc: false,
        lines: [],
        tags: []
      },
      {
        start: 35,
        end: 35,
        jsDoc: false,
        lines: [],
        tags: [ { name: 'internal', value: true } ]
      },
      {
        start: 37,
        end: 37,
        jsDoc: false,
        lines: [],
        tags: []
      },
      {
        start: 40,
        end: 46,
        jsDoc: true,
        lines: [ 'Example of jsdoc' ],
        tags: [
          { name: 'param',   value: '{number} arg1' },
          { name: 'param',   value: '{number} arg2' },
          { name: 'returns', value: '{string}'      }
        ]
      },
      {
        start: 51,
        end: 57,
        jsDoc: true,
        lines: [ 'Text 1', '', 'Text 2'],
        tags: []
      }
    ]);
  });

});