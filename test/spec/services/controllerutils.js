'use strict';

describe('Service: controllerUtils', function () {

  // load the service's module
  beforeEach(module('lastfmdataApp'));

  // instantiate service
  var controllerUtils;
  beforeEach(inject(function (_controllerUtils_) {
    controllerUtils = _controllerUtils_;
  }));

  it('should do something', function () {
    expect(!!controllerUtils).toBe(true);
  });

});
