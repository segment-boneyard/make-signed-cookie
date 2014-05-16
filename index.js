
module.exports = function(keys, key, value){
  var raw = key + '=' + value;
  var signed = key + '.sig=' + keys.sign(raw);
  return raw + ';' + signed;
};

