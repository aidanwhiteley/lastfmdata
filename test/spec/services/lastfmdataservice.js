'use strict';

describe('Service: lastFmDataService', function () {

  // load the service's module
  beforeEach(module('lastfmdataApp'));

  // instantiate service
  var lastFmDataService;
  beforeEach(inject(function (_lastFmDataService_) {
    lastFmDataService = _lastFmDataService_;
  }));

  it('should do something', function () {
    expect(!!lastFmDataService).toBe(true);
  });

});
