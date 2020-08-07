'use strict';
module.exports = function(app) {
  var controller = require('../controllers/Controller');


  // controller Routes
  app.route('/trial/:id')
    .get(controller.getTrial)

  app.route('/info/:drug/:condition')
    .get(controller.getInfo)

  app.route('/getDiseases/:condition')
    .get(controller.getDiseases)
    
};