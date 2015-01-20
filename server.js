/**
 * @author Jonnie Spratley, AppMatrix
 * @created 02/26/13
 */
//## Dependencies
var express = require('express'),
	bodyParser = require('body-parser'),
	jsonParser = bodyParser.json();
var path = require('path');


var port = process.env.PORT || 1333;
var host = process.env.VCAP_APP_HOST || "127.0.0.1";

var cloudServices = null;
var dbcreds = null;
var dbconn = null;

//Configuration Object to hold settings for server

//mongodb://admin:admin@ds031611.mongolab.com:31611/passbookmanager
var config = {
	name: 'passbookmanager',
	message: 'Passbook Manager API Server',
	version: 'v1',
	security: {
		salt: 'a58e325c6df628d07a18b673a3420986'
	},
	server: {
		host: host,
		port: port
	},
	db: {
		username: 'demouser',
		password: 'demopassword',
		host: 'ds031611.mongolab.com',
		port: 31611,

		url: 'mongodb://localhost:27017'
	},
	collections: ['devices', 'passes', 'notifications', 'settings'],
	staticDir: './app',
	publicDir: __dirname + path.sep + 'www',
	uploadsTmpDir: __dirname + path.sep + '.tmp',
	uploadsDestDir: __dirname + path.sep + 'www'
};


//Initialize the REST resource server with our configuration object.
var RestResource = require(__dirname + path.sep + 'routes/rest-resource');
var signpass = require(__dirname + path.sep + 'routes/jps-passbook');
var rest = new RestResource(config);
var app = express();

require(__dirname + path.sep + 'routes/jps-passbook-routes')(config, app);



// * REST METHODS:
// *
// * HTTP     METHOD          URL
// * ======|==============|==============================================
// * GET      findAll         http://localhost:4040/passbookmanager
// * GET      findById        http://localhost:4040/passbookmanager/passes/:id
// * POST     add             http://localhost:4040/passbookmanager/passes
// * PUT      update          http://localhost:4040/passbookmanager/passes/:id
// * DELETE   destroy         http://localhost:4040/passbookmanager/passes/:id
app.get('/api/' + config.version + '/' + config.name, rest.collections);
app.get('/api/' + config.version + '/:db/:collection/:id?', rest.findAll);
app.get('/api/' + config.version + '/:db/:collection/:id?', rest.findById);
app.post('/api/' + config.version + '/:db/:collection', bodyParser.json(), rest.add);
app.put('/api/' + config.version + '/:db/:collection/:id', bodyParser.json(), rest.edit);
app.delete('/api/' + config.version + '/:db/:collection/:id', rest.destroy);

//Start the server
app.listen(config.server.port, function () {
	console.log(config.message + ' running @: ' + config.server.host + ':' + config.server.port);
});
