var router = require('express').Router();
var logger = require('../../util/logger');

// setup boilerplate route jsut to satisfy a request
// for building
router.route('/')
  .get(function(req, res, next){
    logger.log('Hey from user!!');
    return next(new Error('testing error handling from user!!'));
    res.send({ok: true});
  });

module.exports = router;
