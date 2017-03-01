# Hext
Simple, javascript based hex to text &amp; text to hex converter.

[Issues](https://github.com/umut-sahin/hext/issues)

[Npm package page](https://www.npmjs.com/package/hext)

## Installation

```
npm install --save hext
```

## Usage

First you should require package in order to use the converter by using:
```javascript
const hext = require("hext");
```

### Convert Hex to Text

```javascript
hext.toText(hex).then(function(textFormat){
  console.log(textFormat);
}).catch(function(err) {
  console.log(err.message);
});
```

For Example:
```javascript
hext.toText("48656C6C6F20576F726C6421").then(function(textFormat){
  console.log(textFormat); // Prints Hello World!
}).catch(function(err) {
  console.log(err.message);
});
```

### Convert Text to Hex

```javascript
hext.toHex(text).then(function(hexFormat){
  console.log(hexFormat);
}).catch(function(err) {
  console.log(err.message);
});
```

For Example:
```javascript
hext.toHex("Hello World!").then(function(hexFormat){
  console.log(hexFormat); // Prints 48656C6C6F20576F726C6421
}).catch(function(err) {
  console.log(err.message);
});
```
