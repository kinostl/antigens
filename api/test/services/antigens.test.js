const app = require('../../src/app');

describe('\'antigens\' service', () => {
  it('registered the service', () => {
    const service = app.service('antigens');
    expect(service).toBeTruthy();
  });
});
