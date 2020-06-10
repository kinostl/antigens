// Initializes the `addons` service on path `/addons`
const { Addons } = require('./addons.class');
const createModel = require('../../models/addons.model');
const hooks = require('./addons.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/addons', new Addons(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('addons');

  service.hooks(hooks);
};
