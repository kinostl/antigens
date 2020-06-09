// Initializes the `chips` service on path `/chips`
const { Chips } = require('./chips.class');
const createModel = require('../../models/chips.model');
const hooks = require('./chips.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/chips', new Chips(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('chips');

  service.hooks(hooks);
};
