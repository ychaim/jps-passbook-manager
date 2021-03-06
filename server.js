/**
 * @author Jonnie Spratley, AppMatrix
 * @created 02/26/13
 */
'use strict';
const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

const config = require(path.resolve(__dirname, './config.js'));
const port = process.env.PORT || config.server.port || null;
const host = process.env.VCAP_APP_HOST || process.env.IP || config.server.hostname || '127.0.0.1';


var program = require('./lib/program')(config);
var logger = program.getLogger('server');


logger('initialized');
logger('env', process.env);



// configure Express
var app = express();


app.use('/public', serveStatic(path.resolve(__dirname, './public')));
app.use('/public', serveStatic(path.resolve(__dirname, './app/bower_components')));
app.use('/public', serveStatic(path.resolve(__dirname, config.publicDir)));
app.use('/', serveStatic(path.resolve(__dirname, config.staticDir)));

app.locals.config = config;
//app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');
//app.engine('html', require('ejs').renderFile);
app.use(require('connect-flash')());
program.app = app;

var middleware = [
	//path.resolve(__dirname, './routes/jps-middleware-auth'),
	path.resolve(__dirname, './routes/jps-passbook-routes')
];

middleware.forEach(function(m) {
	logger('use middleware', m);
	require(m)(program, app);
});

app.listen(port, host, function() {

	logger('Express Host', app.get('host'));
	logger('Express Port', app.get('port'));
	logger('listening on', host + ':' + port);
});
