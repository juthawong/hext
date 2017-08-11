// Native Buffer Support for Nativescript and Browser
const Buffer = require('buffer/').Buffer

// Core
let textToHex = function(text) {
  return Buffer.from(text).toString("hex");
}
let hexToText = function(hex) {
  return Buffer.from(hex, "hex").toString();
}

// Verification
let checkText = function(text) {
  if (typeof text === "string") {
    return true;
  } else {
    throw new TypeError("Entered text is not in the string format");
  }
}
let checkHex = function(hex) {
  if (typeof hex === "string") {
    if (/[0-9a-fA-F]+/.test(hex) === true) {
      return true;
    } else {
      throw new Error("Hex can only contain '0123456789ABCDEFabcdef'");
    }
  } else {
    throw new TypeError("Entered hex is not in the string format");
  }
}

// Sync Operations
let toHexSync = function(text) {
  if (checkText(text) === true) {
    return textToHex(text);
  }
}
let toTextSync = function(hex) {
  if (checkHex(hex) === true) {
    return hexToText(hex);
  }
}

// Async Operations with Callbacks
let toHex = function(text, callback) {
  if (callback instanceof Function) {
    try {
      if (checkText(text) === true) {
        callback(null, textToHex(text));
      }
    } catch (err) {
      callback(err, null);
    }
  } else {
    throw new TypeError("Entered callback is not a function");
  }
}
let toText = function(hex, callback) {
  if (callback instanceof Function) {
    try {
      if (checkHex(hex) === true) {
        callback(null, hexToText(hex));
      }
    } catch (err) {
      callback(err, null);
    }
  } else {
    throw new TypeError("Entered callback is not a function");
  }
}

// Async Operations with Promises
let toHexWithPromise = function(text) {
  return new Promise(function(resolve, reject) {
    try {
      if (checkText(text) === true) {
        resolve(textToHex(text));
      }
    } catch (err) {
      reject(err);
    }
  });
}
let toTextWithPromise = function(hex) {
  return new Promise(function(resolve, reject) {
    try {
      if (checkHex(hex) === true) {
        resolve(hexToText(hex));
      }
    } catch (err) {
      reject(err);
    }
  });
}

// Connector Function
let connector = function(options) {
  if (options.callback) {
    if (options.to == "text") {
      toText(options.data, options.callback);
    } else if (options.to == "hex") {
      toHex(options.data, options.callback);
    }
  } else if (options.promise === true) {
    if (options.to == "text") {
      return toTextWithPromise(options.data);
    } else if (options.to == "hex") {
      return toHexWithPromise(options.data);
    }
  } else {
    if (options.to == "text") {
      return toTextSync(options.data);
    } else if (options.to == "hex") {
      return toHexSync(options.data);
    }
  }
}

// Connector Export
module.exports = connector;

// Sync Operation Exports
module.exports.toHexSync = toHexSync;
module.exports.toTextSync = toTextSync;

// Async Operations with Callbacks Exports
module.exports.toHex = toHex;
module.exports.toText = toText;

// Async Operations with Promises Exports
module.exports.toHexWithPromise = toHexWithPromise;
module.exports.toTextWithPromise = toTextWithPromise;
