const users = require('./users/users.service.js');
const antigens = require('./antigens/antigens.service.js');
const chips = require('./chips/chips.service.js');
const addons = require('./addons/addons.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(antigens);
  app.configure(chips);
  app.configure(addons);
};
