var Twitter = require( 'twitter' );
require( 'dotenv' ).config();
var client = new Twitter( {
	consumer_key: process.env.CONSUMER_KEY,
	consumer_secret: process.env.CONSUMER_SECRET,
	access_token_key: process.env.ACCESS_TOKEN_KEY,
	access_token_secret: process.env.ACCESS_TOKEN_SECRET
} );

client.post( 'statuses/update' ), {
		status: 'Test from Blouk Bot'
	},
	function ( error, tweet, response ) {
		if ( !error ) {
			console.log( tweet );
		}
	}
