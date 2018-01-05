'use strict';

const root = require('../procedures/root');
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

// GET for /
const index = (req, res) => {
  return root.getIndexContent(req, res)
};

module.exports = {
  index,
}