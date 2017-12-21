'use strict';

require('mocha');
require('should');

var parser = require('rewire')('..');
var arrayTrim = parser.__get__('arrayTrim');


describe('arrayTrim', function() {

  it('should remove empty items from both sides of array', function() {
    var array1 = [0, 0, 0, 10, 0, 8, 0, 0];
    arrayTrim(array1).should.deepEqual([10, 0, 8]);
    
    var array2 = [10, 0, 5, 0];
    arrayTrim(array2).should.deepEqual([10, 0, 5]);

    var array3 = [10, 0, 5, 4];
    arrayTrim(array3).should.deepEqual([10, 0, 5, 4]);

    var array4 = [0, 0, 0, 0];
    arrayTrim(array4).should.deepEqual([]);

    var array5 = [];
    arrayTrim(array5).should.deepEqual([]);

    var array6;
    arrayTrim(array6).should.deepEqual([]);
  });

});