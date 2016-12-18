# postcss-rotate-unit
[![Build Status](https://travis-ci.org/SlimMarten/postcss-rotate-unit.svg?branch=master)](https://travis-ci.org/SlimMarten/postcss-rotate-unit) [![GitHub issues](https://img.shields.io/github/issues/SlimMarten/postcss-rotate-unit.svg)](https://github.com/SlimMarten/postcss-rotate-unit/issues)

> [PostCSS](https://github.com/postcss/postcss) plugin to add a default unit to your `rotate()` values.

## Installation

```console
$ npm i postcss-rotate-unit -D
```

## Examples

`Input`

```css
.foo{
   transform: rotate(45);
}
```

`Output`

```css
.foo{
   transform: rotate(45deg);
}
```

## Options

By default the unit which will be added is `deg`.
You can also define a custom unit:

```javascript
var postcssRotateUnit = require('postcss-random');

var postcssProcessors = [
   postcssRotateUnit({
      default: 'turn'
   })
]
```

## [License](https://github.com/SlimMarten/postcss-rotate-unit/blob/master/LICENSE)
## [Changelog](https://github.com/SlimMarten/postcss-rotate-unit/blob/master/CHANGELOG.md)
