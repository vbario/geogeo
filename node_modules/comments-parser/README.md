# node-comments-parser

## Description

This scripts extracts comments from JavaScript code. It's built on 
[esprima](https://github.com/jquery/esprima).

## Example

Transform the following example.js: 

```javascript
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
```

to Object:

```javascript
[
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
]
```

## Installation

Install with [npm](https://npmjs.org/package/comments-parser):

`npm install comments-parser`

## Usage

```javascript
var fs     = require('fs');
var parser = require('comments-parser');

var source = fs.readFileSync(__dirname + '/example.js', 'utf-8');
var comments = parser(source);

// Test parsed data
expect(comments[0].lines).to.equal([ 'Class description' ]);
```

## Options

parser(options:Object):

 Name           | Default | Description 
----------------|---------|-----------------------------------------------------------
 addEsprimaInfo | false   | Add esprima parser data to a comment
 parseJsDocTags | true    | If false jsdoc tags processed as text
 hideJsDocTags  | true    | If parseJsDocTags is true remove tags from lines property
 trim           | true    | Trim lines, values: true, false, 'right'

## License

Licensed under MIT.
