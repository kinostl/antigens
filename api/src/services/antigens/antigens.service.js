// Initializes the `antigens` service on path `/antigens`
const { Antigens } = require('./antigens.class');
const createModel = require('../../models/antigens.model');
const hooks = require('./antigens.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/antigens', new Antigens(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('antigens');

  service.hooks(hooks);
};
