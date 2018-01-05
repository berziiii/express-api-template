'use strict';

let express = require('express');
let app = express();
let cors = require('cors');
let router = express.Router();
let path = require("path");
let bodyParser = require("body-parser");
let config = require('./config/database.js');
let selectedConfig = config.Development;

/*
 * Config for Production and Development
 */
app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Locate the assets
app.use(express.static(__dirname + '/'));

app.use(router);

require('./config/routes.js')(router);

//Set API port
app.set('port', selectedConfig.port);

//Listen on the port
app.listen(app.get('port'), function() {
    console.log('Node App Started on Port ' +  selectedConfig.port);
});
