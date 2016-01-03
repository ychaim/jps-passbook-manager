/**
 * Created by jps on 12/17/15.
 */
var assert = require('assert'),
	path = require('path'),
	fs = require('fs-extra'),
	os = require('os');


//Test vars
var testPassName = 'Test_Pass_';
var testPassDir = path.resolve(__dirname, '../../.tmp/');
var config = fs.readJsonSync(path.resolve(__dirname, '../../config.json'));


// TODO: Program
var program = require(path.resolve(__dirname, '../../lib/program.js'))(config);

var db = program.db;
//Test Instances
var mocks = require(path.resolve(__dirname, '../helpers/mocks'));
var mockDevice = mocks.mockDevice;
var mockPass = mocks.mockPass;

describe('db', function () {
	it('should be defined', function () {
		assert(db);
		console.log(db);
	});

	it('should create file with id', function (done) {
		db.put(mockPass).then(function (resp) {
			assert(resp);
			done();
		});
	});

	it('should get file with id', function (done) {
		db.get(mockPass._id).then(function (resp) {
			assert(resp);
			done();
		});
	});

	xit('should remove file with id', function (done) {
		db.remove(mockPass._id).then(function (resp) {
			assert(resp);
			//db.get(mockPass._id).then()
			done();
		});
	});

});
