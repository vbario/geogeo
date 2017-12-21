# load-google-maps [![Build Status](https://travis-ci.org/bendrucker/load-google-maps.svg?branch=master)](https://travis-ci.org/bendrucker/load-google-maps)

> Load the Google Maps JS API


## Install

```
$ npm install --save load-google-maps
```


## Usage

```js
var Google = require('load-google-maps')

Google({libraries: ['places']}, function (err, google) {
  //=> google.maps...  
})
```

## API

#### `Google([options], callback)` -> `undefined`

##### options

Type: `object`  
Default: `{}`

All supported Google options, including:

* key
* libraries (array)
* client
* version
* channel
* language
* region

##### callback

*Required*  
Type: `function`  
Arguments: `err, google`

A callback called with the Google Maps library once loaded.


## License

MIT © [Ben Drucker](http://bendrucker.me)
