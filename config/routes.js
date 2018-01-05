'use strict'

// // all routes created
let root = require('../app/controllers/root');
let example = require('../app/controllers/example');

module.exports = function(router) {

  // **** ROOT ROUTE **** //
  // GET for root
  router.get('/', root.index);

  // **** EXAMPLES ROUTE **** //

  // GET EXAMPLES
  router.get('/examples', example.index);
  
};
