'use strict';

var utils = require('../utils/writer.js');
var Dok = require('../service/DokService');

module.exports.docGET = function docGET (req, res, next) {
  Dok.docGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
