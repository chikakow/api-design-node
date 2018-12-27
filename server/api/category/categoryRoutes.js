var router = require('express').Router();
var logger = require('../../util/logger');
var controller = require('./categoryController');

// setup boilerplate route jsut to satisfy a request
// for building
router.param('id', controller.params);

router.route('/')
  .get(controller.get);

  router.route('/:id')
  .get(controller.getOne);

  router.route('/:id')
  .put(controller.put);

  router.route('/')
  .post(controller.post);

  router.route('/:id')
  .delete(controller.delete);

module.exports = router;
