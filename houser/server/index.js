const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const massive = require( 'massive' );
const controller = require( './controller' );
require( 'dotenv' ).config();

const app = express();
app.use( bodyParser.json() );

massive( process.env.CONNECTION_STRING ).then( database => {
    app.set( 'db', database );
});


const port = 9000;
app.listen( port, console.log( `This port is over ${ port }!!!` ) );