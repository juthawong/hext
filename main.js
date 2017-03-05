var toTextSync = function(hex) {
  var textForm = "";
  for (var i = 0; i < hex.length; i += 2) {
    textForm += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  }
  return textForm;
}
var toHexSync = function(text) {
  var hexForm = "";
  for (var i = 0; i < text.length; i++) {
    var hexCode = parseInt(text.charCodeAt(i)).toString(16);
    if (hexCode.length < 2) {
      hexCode = "0" + hexCode;
    }
    hexForm += hexCode;
  }
  return hexForm.toUpperCase();
}
var toTextWithCallback = function(hex, callback) {
  try {
    var textForm = "";
    for (var i = 0; i < hex.length; i += 2) {
      textForm += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    callback(null, textForm);
  } catch (err) {
    callback(err, null)
  }
}
var toHexWithCallback = function(text, callback) {
  try {
    var hexForm = "";
    for (var i = 0; i < text.length; i++) {
      hexForm += parseInt(text.charCodeAt(i)).toString(16);
    }
    callback(null, hexForm.toUpperCase());
  } catch (err) {
    callback(err, null)
  }
}
var toTextWithPromise = function(hex) {
  return new Promise(function(resolve, reject) {
    try {
      var textForm = "";
      for (var i = 0; i < hex.length; i += 2) {
        textForm += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
      }
      resolve(textForm);
    } catch (err) {
      reject(err);
    }
  });
}
var toHexWithPromise = function(text) {
  return new Promise(function(resolve, reject) {
    try {
      var hexForm = "";
      for (var i = 0; i < text.length; i++) {
        hexForm += parseInt(text.charCodeAt(i)).toString(16);
      }
      resolve(hexForm.toUpperCase());
    } catch (err) {
      reject(err);
    }
  });
}
var allInOne = function(options) {
  var to = options.to;
  if (options.callback) {
    if (to == "hex") {
      toHexWithCallback(options.data, options.callback);
    } else if (to == "text") {
      toTextWithCallback(options.data, options.callback);
    }
  } else if (options.promise === true) {
    if (to == "hex") {
      return toHexWithPromise(options.data);
    } else if (to == "text") {
      return toTextWithPromise(options.data);
    }
  } else {
    if (to == "hex") {
      return toHexSync(options.data);
    } else if (to == "text") {
      return toTextSync(options.data);
    }
  }
}

module.exports = allInOne;
module.exports.toTextSync = toTextSync;
module.exports.toHexSync = toHexSync;
module.exports.toTextWithCallback = toTextWithCallback;
module.exports.toHexWithCallback = toHexWithCallback;
module.exports.toTextWithPromise = toTextWithPromise;
module.exports.toHexWithPromise = toHexWithPromise;
