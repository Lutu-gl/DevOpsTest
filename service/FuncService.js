'use strict';


/**
 * Sends last messages
 *
 * count Integer number / quantity of messages that will be returned
 * returns List
 **/
exports.get_msgCountGET = function(count) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "Luca",
  "message" : "Hallo Welt!"
}, {
  "name" : "Luca",
  "message" : "Hallo Welt!"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Sends message to api
 *
 * body Modell  (optional)
 * returns String
 **/
exports.put_msgPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "Worked";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

