'use strict';

var utils = require('../utils/writer.js');
var Func = require('../service/FuncService');

module.exports.get_msgCountGET = function get_msgCountGET (req, res, next, count) {
  Func.get_msgCountGET(count)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.put_msgPOST = function put_msgPOST (req, res, next, body) {
  Func.put_msgPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
