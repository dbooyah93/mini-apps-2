const Express = require( 'express' );


const app = Express();
const PORT = 3000; // relate to env file later....


app.use( '/', Express.static( '../public') );

app.listen( PORT, () => {
  console.log(`Listening on port ${PORT}. . .`)
})