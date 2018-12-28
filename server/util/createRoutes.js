module.exports = (controller, router) => {
  // setup boilerplate route jsut to satisfy a request
  // for building
  router.param('id', controller.params);

  router
    .route('/')
    .get(controller.get)
    .post(controller.post);

  router
    .route('/:id')
    .get(controller.getOne)
    .put(controller.put)
    .delete(controller.delete);
};
