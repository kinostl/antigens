const app = require('../../src/app');

describe('\'addons\' service', () => {
  it('registered the service', () => {
    const service = app.service('addons');
    expect(service).toBeTruthy();
  });
});
