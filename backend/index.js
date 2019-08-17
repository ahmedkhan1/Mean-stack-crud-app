const http = require('http');
const logger = require('morgan');
const express= require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('./db');
const cors = require('cors');

const port = process.env.PORT || 8000;
const app = express();

const appRoutes = require('./routes/appRoutes'); 

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(logger('dev'));

app.use('/',appRoutes);

// Connect to Server
http.createServer(app).listen(port,()=>{
    console.log('Server connected at ',port);
});

module.exports = app;  