# Hext
Simple, javascript based hex to text &amp; text to hex converter.

[Issues](https://github.com/umut-sahin/hext/issues)

[Npm package page](https://www.npmjs.com/package/hext)

## Installation

```
npm install --save hext
```

## Pre Usage

First you should require package in order to use the converter by using:
```javascript
const hext = require("hext");
```

## All in One usage

You can directly use the library with options without separated functions.

### All in One sync

```javascript
try {
  var textFormat = hext({to: "text", data: "48656C6C6F20576F726C6421"});
  console.log(textFormat); //Prints Hello World!
} catch (err) {
  console.log(err.message);
}
```
```javascript
try {
  var hexFormat = hext({to: "hex", data: "Hello World!"});
  console.log(hexFormat); //Prints 48656C6C6F20576F726C6421
} catch (err) {
  console.log(err.message);
}
```
### All in One async with callbacks

```javascript
hext({to: "text", data: "48656C6C6F20576F726C6421", callback: function(err,textFormat){
  if (err) {
    console.log(err.message);
  } else {
    console.log(textFormat); //Prints Hello World!
  }
}});
```
```javascript
hext({to: "hex", data: "Hello World!", callback: function(err,hexFormat){
  if (err) {
    console.log(err.message);
  } else {
    console.log(hexFormat); //Prints 48656C6C6F20576F726C6421
  }
}});
```

### All in One async with promises

```javascript
hext({to: "text", data: "48656C6C6F20576F726C6421", promise: true}).then(function(textFormat){
  console.log(textFormat); //Prints Hello World!
}).catch(function (err){
  console.log(err.message);
});
```
```javascript
hext({to: "hex", data: "Hello World!", promise: true}).then(function(hexFormat){
  console.log(hexFormat); //Prints 48656C6C6F20576F726C6421
}).catch(function (err){
  console.log(err.message);
});
```

## Sync usage

### Convert Hex to Text

```javascript
try {
  var textFormat = hext.toTextSync(hexFormat);
  console.log(textFormat);
} catch (err) {
  console.log(err.message);
}
```

For Example:
```javascript
try {
  var textFormat = hext.toTextSync("48656C6C6F20576F726C6421");
  console.log(textFormat); //Prints Hello World!
} catch (err) {
  console.log(err.message);
}
```

### Convert Text to Hex

```javascript
try {
  var hexFormat = hext.toHexSync(textFormat);
  console.log(hexFormat);
} catch (err) {
  console.log(err.message);
}
```

For Example:
```javascript
try {
  var hexFormat = hext.toHexSync("Hello World!");
  console.log(hexFormat); //Prints 48656C6C6F20576F726C6421
} catch (err) {
  console.log(err.message);
}
```

## Async usage with callbacks

### Convert Hex to Text

```javascript
hext.toTextWithCallback(hexFormat, function(err, textFormat) {
  if (err) {
    console.log(err.message);
  } else {
    console.log(textFormat);
  }
});
```

For Example:
```javascript
hext.toTextWithCallback("48656C6C6F20576F726C6421", function(err, textFormat) {
  if (err) {
    console.log(err.message);
  } else {
    console.log(textFormat); //Prints Hello World!
  }
});
```

### Convert Text to Hex

```javascript
hext.toHexWithCallback(textFormat, function(err, hexFormat) {
  if (err) {
    console.log(err.message);
  } else {
    console.log(hexFormat);
  }
});
```

For Example:
```javascript
hext.toHexWithCallback("Hello World!", function(err, hexFormat) {
  if (err) {
    console.log(err.message);
  } else {
    console.log(hexFormat); //Prints 48656C6C6F20576F726C6421
  }
});
```

## Async usage with promises

### Convert Hex to Text

```javascript
hext.toTextWithPromise(hexFormat).then(function(textFormat){
  console.log(textFormat);
}).catch(function (err){
  console.log(err.message);
});
```

For Example:
```javascript
hext.toTextWithPromise("48656C6C6F20576F726C6421").then(function(textFormat){
  console.log(textFormat); //Prints Hello World!
}).catch(function (err){
  console.log(err.message);
});
```

### Convert Text to Hex

```javascript
hext.toHexWithPromise(textFormat).then(function(hexFormat){
  console.log(hexFormat);
}).catch(function (err){
  console.log(err.message);
});
```

For Example:
```javascript
hext.toHexWithPromise("Hello World!").then(function(hexFormat){
  console.log(hexFormat); //Prints Hello World!
}).catch(function (err){
  console.log(err.message);
});
```
