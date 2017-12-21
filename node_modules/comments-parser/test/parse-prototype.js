'use strict';

require('mocha');
require('should');

var fs     = require('fs');
var parser = require('..');


var file = fs.readFileSync(__dirname + '/fixtures/prototype.js', 'utf-8');

describe('parser prototype example', function() {

  it('should generate correct data', function() {
    var comments = parser(file);
    comments.should.deepEqual([
      {
        start: 3,
        end: 7,
        jsDoc: true,
        lines: [ 'Class description' ],
        tags: [
          { name: 'class',       value: 'Test' },
          { name: 'constructor', value: true   }
        ]
      },
      {
        start: 13,
        end: 16,
        jsDoc: true,
        lines: [],
        tags: [
          { name: 'param', value: '{string} text' }
        ]
      }
    ]);

    var comments2 = parser(file, {
      parseJsDocTags: false
    });
    comments2.should.deepEqual([
      {
        start: 3,
        end: 7,
        jsDoc: true,
        lines: [ 'Class description', '@class Test', '@constructor' ],
        tags: []
      },
      {
        start: 13,
        end: 16,
        jsDoc: true,
        lines: [ '@param {string} text' ],
        tags: []
      }
    ]);
  });
  
});