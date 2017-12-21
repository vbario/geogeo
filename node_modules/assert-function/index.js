'use strict'

module.exports = function assertFunction (value) {
  if (typeof value !== 'function') {
    throw new TypeError('Expected function, got: ' + value)
  }
}
