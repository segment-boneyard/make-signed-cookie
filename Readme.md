
# make-signed-cookie

  Create a [keygrip](http://npm.im/keygrip) signed cookie.

  [![Build Status](https://circleci.com/gh/segmentio/make-signed-cookie.png?circle-token=8429c45f3085aeb3f7cdeacd078579033cecbd52)](https://circleci.com/gh/segmentio/make-signed-cookie)

## Example

```js
var makeCookie = require('make-signed-cookie');
var Keygrip = require('keygrip');
var keys = Keygrip(['secret']);

var cookie = makeCookie(keys, 'foo', 'bar');
// => 'foo=bar;foo.sig=6CpNkQn9Ykm29oboqpPWaOlslAk'
```

## Installation

```bash
$ npm install make-signed-cookie
```

## API

### makeCookie(keys, key, value)

  Given an instance of keygrip `keys`, return a signed cookie string for `key` and `value`.

## License

  MIT

