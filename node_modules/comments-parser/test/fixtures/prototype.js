'use strict';

/**
 * Class description
 * @class Test
 * @constructor
 */
function Test() {
  
}

Test.prototype = {
  /**
   * 
   * @param {string} text
   */
  log: function(text) {
    console.log(text);
  }
};

module.exports = Test;