'use strict';

const examples = require('../procedures/examples');
const rp = require('request-promise');

const RP = function(url, method, data) {
  const requestObject = {
    method: method,
    url: url,
    body: data,
    json: true
  };

  return rp(requestObject);
};

// *** STANDARD HTTP REQUESTS *** //
const index = function(req, res) {
  return examples.getAllExamples(req, res);
};

const show = function(req, res) {
};

const create = function(req, res) {
};

const update = function(req, res) {
};

const destroy = function(req, res) {
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy
};
