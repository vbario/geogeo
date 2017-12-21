'use strict'

var assertFn = require('assert-function')

module.exports = Ear

function Ear () {
  var callbacks = []

  function listeners () {
    var args = arguments
    var i = 0
    var length = callbacks.length
    for (; i < length; i++) {
      var callback = callbacks[i]
      callback.apply(null, args)
    }
  }

  listeners.add = function (listener) {
    assertFn(listener)
    callbacks.push(listener)
    return function remove () {
      var i = 0
      var length = callbacks.length
      for (; i < length; i++) {
        if (callbacks[i] === listener) {
          callbacks.splice(i, 1)
          return
        }
      }
    }
  }

  return listeners
}
