const postcss = require( 'postcss' );

module.exports = postcss.plugin( 'postcss-deg-unit', function ( options ) {

	return function ( css ) {

		/*----------  global vars  ----------*/

		options = options || {};

		// default units
		const unit = options.defaultUnit || 'deg';

		// regular expression to filter content of rotate() method
		const regExp = /rotate(x|y|z|3d|)\(([^)]+)\)/i;

		// possible rotate() units
		const rotateUnits = [
			'deg',
			'grad',
			'rad',
			'turn'
		]

		/*----------  global functions  ----------*/
		function getComparedValue(singleVal){
			let hasUnit = false;

			// check if a unit is already given
			for(let i = 0; i < rotateUnits.length; i++){
				let curUnit = rotateUnits[i];

				if(singleVal.indexOf(curUnit) > -1){
					hasUnit = true;
				}
			}

			// return value with or without default unit
			if(!hasUnit){
				const output = singleVal += unit;
				return output;
			}else{
				return singleVal;
			}
		}

		function getValuesWithUnit(vals){


			for(let i = 0; i < vals.length; i++){
				let hasUnit = false;
				let curVal = vals[i];

				let newValue = getComparedValue(curVal);
				vals[i] = newValue;
			}

			return vals;
		}

		function getOperationState(vals){
			switch(vals.length){
				case 0:
					console.warn('Your Rotation is empty bro.');
					return false;
					break;
				case 1:
					return 0;
					break;
				case 2:
					console.log('what axis was it again!?');
					return false;
					break;
				case 3:
					console.log('what axis was it again!?');
					return false;
					break;
				case 4:
					return 1;
					break;
			}
		}

		function getStringFromArray(array){
			let string = '';

			for(let i = 0; i < array.length; i++){
				string += array[i];

				if(i !== array.length){
					string += ' ';
				}
			}

			return string;
		}

		// walk rules
		css.walkRules( function ( rule ) {

			rule.walkDecls( function ( decl ) {
				const property = decl.prop;
				const value = decl.value;

				const rotation = value.match( regExp );
				const rotationDimension = rotation[1];
				const rotationValueString = rotation[2];
				const rotationValues = rotationValueString.split(',');

				const operationState = getOperationState(rotationValues);

				if(operationState == 0){
					const modifiedValues = getValuesWithUnit(rotationValues);
					const output = getStringFromArray(modifiedValues);
					console.log(output);
				}else{
					console.log('something went wrong');
					return;
				}

			} );
		} );
	};
} );