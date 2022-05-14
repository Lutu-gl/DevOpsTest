'use strict';

var utils = require('../utils/writer.js');
var Doc = require('../service/DocService');

module.exports.docGET = function docGET (req, res, next) {
  Doc.docGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
