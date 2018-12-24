const express = require('express');
const { json } = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const port = process.env.SERVER_PORT || 3001;

const app = express();
app.use(json());

//Connect Massive to Heroku
massive(process.env.DB_CONNECTION)
.then(dbInst => app.set('db', dbInst))
.catch(err => console.log(`Error in massive() - ${err}`));

// point server to the build folder
app.use( express.static( `${__dirname}/../build` ) );


app.listen(port, () => console.log(`Listening for requests on port ${port}`));