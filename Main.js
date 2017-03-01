var toTextFunction = function toText(hex) {
  return new Promise(function(success, fail) {
    try {
      var textForm = "";
      for (var i = 0; i < hex.length; i += 2) {
        textForm += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
      }
      success(textForm);
    } catch (err) {
      fail(err);
    }
  });
}
var toHexFunction = function toHex(text) {
  return new Promise(function(success, fail) {
    try {
      var hexForm = "";
      for (var i = 0; i < text.length; i++) {
        hexForm += parseInt(text.charCodeAt(i)).toString(16);
      }
      success(hexForm);
    } catch (err) {
      fail(err);
    }
  });
}

module.exports.toText = toTextFunction;
module.exports.toHex = toHexFunction;
