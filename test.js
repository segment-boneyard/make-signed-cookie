var equal = require('assert').equal;
var make = require('./');
var Keygrip = require('keygrip');

describe('make(keys, key, value)', function(){
  it('should create a signed cookie', function(){
    var keys = Keygrip(['secret']);
    var cookie = make(keys, 'foo', 'bar');

    equal(cookie, 'foo=bar;foo.sig=6CpNkQn9Ykm29oboqpPWaOlslAk');
  });
});

