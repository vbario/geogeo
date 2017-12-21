'use strict'

var load = require('load-script-global')
var Obstruct = require('obstruction')
var pipe = require('value-pipe')
var qs = require('query-string')
var setQuery = require('url-set-query')
var partial = require('ap').partial

module.exports = loadMaps

var base = 'https://maps.googleapis.com/maps/api/js'
var format = Obstruct({
  key: true,
  libraries: Obstruct.optional(concat),
  client: true,
  v: 'version',
  channel: true,
  language: true,
  region: true
})

function loadMaps (options, callback) {
  if (typeof options === 'function') {
    callback = options
    options = {}
  }

  load({
    url: pipe(format, qs.stringify, partial(setQuery, base))(options),
    global: 'google',
    jsonp: true
  }, callback)
}

function concat (list) {
  return list.join(',')
}
