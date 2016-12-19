# postcss-rotate-unit
<!-- badge -->
[![travis status](https://img.shields.io/travis/SlimMarten/postcss-rotate-unit.svg)](https://travis-ci.org/SlimMarten/postcss-rotate-unit)
[![GitHub followers](https://img.shields.io/github/followers/SlimMarten.svg?style=social&label=Follow)](https://github.com/SlimMarten)
[![GitHub forks](https://img.shields.io/github/forks/SlimMarten/postcss-rotate-unit.svg?style=social&label=Fork)](https://github.com/SlimMarten/postcss-rotate-unit/fork)
[![GitHub stars](https://img.shields.io/github/stars/SlimMarten/postcss-rotate-unit.svg?style=social&label=Star)](https://github.com/SlimMarten/postcss-rotate-unit)
[![GitHub watchers](https://img.shields.io/github/watchers/SlimMarten/postcss-rotate-unit.svg?style=social&label=Watch)](https://github.com/SlimMarten/postcss-rotate-unit)
[![GitHub issues](https://img.shields.io/github/issues/SlimMarten/postcss-rotate-unit.svg)](https://github.com/SlimMarten/postcss-rotate-unit/issues)
[![npm version](https://img.shields.io/npm/v/postcss-rotate-unit.svg)](https://www.npmjs.com/package/postcss-rotate-unit)
[![npm license](https://img.shields.io/npm/l/postcss-rotate-unit.svg)](https://www.npmjs.com/package/postcss-rotate-unit)
[![npm download](https://img.shields.io/npm/dm/postcss-rotate-unit.svg)](https://www.npmjs.com/package/postcss-rotate-unit)
[![npm download](https://img.shields.io/npm/dt/postcss-rotate-unit.svg)](https://www.npmjs.com/package/postcss-rotate-unit)
<!-- endbadge -->

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
