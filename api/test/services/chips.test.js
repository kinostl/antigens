const app = require('../../src/app');

describe('\'chips\' service', () => {
  it('registered the service', () => {
    const service = app.service('chips');
    expect(service).toBeTruthy();
  });
});
