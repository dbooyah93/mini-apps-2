const Express = require( 'express' );


const app = Express();
const PORT = 3000; // relate to env file later....


app.use( '/', Express.static( '../public') );

app.listen( PORT, () => {
  console.log(`Listening on port ${PORT}. . .`)
})

/************ sample endpoints for BTC history
 * Smple request to BTC history data:
 * https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2013-09-05
 *
 * Sample request to 31 day history:
 * https://api.coindesk.com/v1/bpi/historical/close.json
 */