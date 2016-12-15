var postcss = require( 'postcss' );

module.exports = postcss.plugin( 'postcss-deg-unit', function ( options ) {

	return function ( css ) {

		/*----------  global vars  ----------*/

		options = options || {};

		/*----------  global functions  ----------*/

		// misc
		function misc(){

		}

		// walk rules
		css.walkRules( function ( rule ) {

			rule.walkDecls( function ( decl ) {



			} );
		} );
	};
} );