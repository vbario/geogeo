'use strict';

require('mocha');
require('should');

var parser = require('rewire')('..');
var applyJsDocTags = parser.__get__('applyJsDocTags');


describe('applyJsDocTags', function() {

  it('should extract boolean tags', function() {
    var comment1 = createComment('Name', '@internal', '@verbose');
    applyJsDocTags(comment1);
    comment1.should.deepEqual({
      lines: [ 'Name' ],
      tags:  [
        { name: 'internal', value: true },
        { name: 'verbose',  value: true }
      ]
    });

    var comment2 = createComment('Name', '@internal', '@verbose');
    applyJsDocTags(comment2, false);
    comment2.should.deepEqual({
      lines: [ 'Name', '@internal', '@verbose' ],
      tags:  [
        { name: 'internal', value: true },
        { name: 'verbose',  value: true }
      ]
    });
  });

  it('should extract complex tags', function() {
    var comment1 = createComment('Name', '@param {string} 1', '@example @link');
    applyJsDocTags(comment1);
    comment1.should.deepEqual({
      lines: [ 'Name' ],
      tags:  [
        { name: 'param',   value: '{string} 1' },
        { name: 'example', value: '@link' }
      ]
    });

    var comment2 = createComment('Name', '@param {string} 1 ', '@example @link');
    applyJsDocTags(comment2, false);
    comment2.should.deepEqual({
      lines: [ 'Name', '@param {string} 1 ', '@example @link' ],
      tags:  [
        { name: 'param',   value: '{string} 1' },
        { name: 'example', value: '@link' }
      ]
    });
  });

  it('should extract tags from a single line', function() {
    var comment1 = createComment('@internal ');
    applyJsDocTags(comment1);
    comment1.should.deepEqual({
      lines: [],
      tags:  [ { name: 'internal', value: true } ]
    });

    var comment2 = createComment('@internal ');
    applyJsDocTags(comment2, false);
    comment2.should.deepEqual({
      lines: [ '@internal ' ],
      tags:  [ { name: 'internal', value: true } ]
    });
  });
});

function createComment() {
  return {
    lines: Array.prototype.slice.call(arguments)
  };
}