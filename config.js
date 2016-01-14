'use strict';
const path = require('path');
//TODO - Change to your values
const APPLE_TEAM_IDENTIFIER = 'USE9YUYDFH';
const APPLE_PASS_TYPE_IDENTIFIER = 'pass.passbookmanager.io';
const APPLE_WEB_SERVICE_URL = 'https://passbook-manager.run.aws-usw02-pr.ice.predix.io/api';

var VCAP_SERVICES = {
	"logstash-4": [{
		"name": "my_logstash_instance",
		"label": "logstash-4",
		"tags": ["logstash14", "logstash", "syslog"],
		"plan": "free",
		"credentials": {
			"hostname": "10.72.6.64",
			"ports": {
				"514/tcp": "32786",
				"9200/tcp": "32787",
				"9300/tcp": "32788"
			}
		},
		"syslog_drain_url": "syslog://10.72.6.64:32786"
	}],
	"redis-1": [{
		"name": "my_redis_instance",
		"label": "redis-1",
		"tags": ["pivotal", "redis"],
		"plan": "shared-vm",
		"credentials": {
			"host": "10.72.6.22",
			"password": "b11324e2-2460-45e5-9d2d-c8d971649656",
			"port": 34198
		}
	}]
};

var config = {
	"name": "passbookmanager",
	debug: true,
	baseUrl: 'http://localhost:5984/passbookmanager',
	"message": "Passbook Manager API Server",
	"dataPath": path.resolve(__dirname, "./data"),
	"version": "v1",
	database: {
		name: 'passbookmanager',
		"dataPath": path.resolve(__dirname, "./data")
	},
	"passkit": {
		"version": "v1",
		"teamIdentifier": APPLE_TEAM_IDENTIFIER,
		"passTypeIdentifier": APPLE_PASS_TYPE_IDENTIFIER,
		"webServiceURL": APPLE_WEB_SERVICE_URL
	},
	"security": {
		"salt": "a58e325c6df628d07a18b673a3420986"
	},
	"server": {
		"host": "localhost",
		"port": 5001
	},
	"db": {
		"local": "passbookmanager",
		"remote": "http://localhost:5984/passbookmanager"
	},
	"collections": [
		"devices",
		"passes",
		"notifications",
		"settings"
	],
	"staticDir": "./app",
	"publicDir": "./www",
	"uploadsTmpDir": "./.tmp",
	"uploadsDestDir": "./www"
};

module.exports = config;
