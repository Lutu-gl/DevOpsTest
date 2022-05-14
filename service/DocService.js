'use strict';


/**
 * Endpoint to test / get Doc
 *
 * returns String
 **/
exports.docGET = function() {
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

