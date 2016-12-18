const postcss = require('postcss');
module.exports = postcss.plugin('postcss-rotate-unit', function(options) {
	return function(css) {
		/*----------  global vars  ----------*/
		options = options || {};
		// default unit
		const unit = options.defaultUnit || 'deg';
		// regular expression to filter content of rotate() method
		const regExp = /rotate(x|y|z|3d|)\(([^)]+)\)/i;
		// possible rotate() units
		const rotateUnits = ['deg', 'grad', 'rad', 'turn'];
		/*----------  global functions  ----------*/
		// check if targetValue already has a unit
		function getUnitState(value) {
			let hasUnit = false;
			for (let i = 0; i < rotateUnits.length; i++) {
				let curUnit = rotateUnits[i];
				if (value.indexOf(curUnit) > -1) {
					hasUnit = true;
				}
			}
			// returns true or flase
			return hasUnit;
		}
		// return the index of the value which needs a unit
		function getTargetValue(vals, decl) {
			switch (vals.length) {
			case 0:
				console.log('Your Rotation is empty bro.');
				break;
			case 1:
				return 0;
			case 2:
				throw decl.error('please provide 1 or 4 values');
			case 3:
				throw decl.error('please provide 1 or 4 values');
			case 4:
				return 3;
			default:
				throw decl.error('please provide 1 or 4 values');
			}
		}
		// creates a string from a given array of strings
		function getStringFromArray(array) {
			let string = '';
			for (let i = 0; i < array.length; i++) {
				string += array[i];
				if (i !== array.length - 1) {
					string += ', ';
				}
			}
			return string;
		}
		// get modified rotation
		function getModifiedRotation(values, target) {
			let output = values;
			output[target] += unit;
			return output;
		}
		// walk rules
		css.walkRules(function(rule) {
			rule.walkDecls(function(decl) {
				// define necessary variables
				const value = decl.value;
				// check if value contains rotate method
				if (value.indexOf('rotate') >= 0) {
					const rotation = value.match(regExp);
					const rotationDimension = rotation[1];
					const rotationValueString = rotation[2];
					const rotationValues = rotationValueString.split(',');
					const targetValue = getTargetValue(rotationValues, decl);
					// check if targetValue is unitless. In case not, add a unit and replace the value
					const hasUnit = getUnitState(rotationValues[targetValue]);
					if (hasUnit) {
						return;
					} else {
						const modifiedValues = getModifiedRotation(rotationValues, targetValue);
						const output = getStringFromArray(modifiedValues);
						decl.value = value.replace(regExp, `rotate${rotationDimension}(${output})`);
					}
				} else {
					return;
				}
			});
		});
	};
});