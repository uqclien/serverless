(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var AWS = __webpack_require__(1);

	//const dynamoDb = new AWS.DynamoDB.DocumentClient();

	module.exports.get = function (event, context, callback) {
	  /*const params = {
	    TableName: 'fez_news',
	    Key: {
	      id: event.pathParameters.id,
	    },
	  };
	   // fetch all todos from the database
	  dynamoDb.get(params, (error, result) => {
	    // handle potential errors
	    if (error) {
	      console.error(error); // eslint-disable-line no-console
	      callback(new Error('Couldn\'t fetch the todo item.'));
	      return;
	    }
	     // create a resonse
	    const response = {
	      statusCode: 200,
	      body: JSON.stringify(result.Item),
	    };
	    callback(null, response);
	  });*/

	  // create a response
	  var response = {
	    statusCode: 200,
	    body: { message: 'get data from db' }
	  };
	  callback(null, response);
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("aws-sdk");

/***/ }
/******/ ])));