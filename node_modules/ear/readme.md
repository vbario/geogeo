# ear [![Build Status](https://travis-ci.org/bendrucker/ear.svg?branch=master)](https://travis-ci.org/bendrucker/ear)

> Manage and call change listeners

## Install

```
$ npm install --save ear
```

## Usage

```js
var Listeners = require('ear')
var listeners = Listeners()
listeners.add(function (a, b) {
  //=> hello
  //=> world
})
listeners('hello', 'world')
```

## API

#### `Listeners()` -> `function`

Create a new listener group. Returns a `listeners` function that will call all listeners with the provided arguments.

#### `listeners.add(listener)` -> `function`

Adds a new listener. Returns a `remove` function that will remove the new listener when called.

##### listener

*Required*  
Type: `function`

A listener to trigger when the parent function is called.

## License

MIT © [Ben Drucker](http://bendrucker.me)
