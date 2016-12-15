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

			for(let i = 0; i < rotateUnits.length; i++){
				let curUnit = rotateUnits[i];
				console.log(singleVal);

				if(singleVal.indexOf(curUnit) > -1){
					return singleVal;
				}else{
					return singleVal += unit;
				};
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

		function checkValueCount(vals){
			switch(vals.length){
				case 0:
					console.warn('Your Rotation is empty bro.');
					break;
				case 1:
					console.log('congrats you can rotate');
					break;
				case 2:
					console.log('what axis was it again!?');
					break;
				case 3:
					console.log('what axis was it again!?');
					break;
				case 4:
					console.log('congrats you can rotate');
					break;
			}
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

				checkValueCount(rotationValues);
				const modifiedValues = getValuesWithUnit(rotationValues);
				console.log(modifiedValues);

			} );
		} );
	};
} );