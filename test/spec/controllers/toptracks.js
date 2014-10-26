'use strict';

describe('Controller: TopTracksCtrl', function () {

  // load the controller's module
  beforeEach(module('lastfmdataApp'));

  var TopTracksCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TopTracksCtrl = $controller('TopTracksCtrl', {
      $scope: scope
    });
  }));

  it('Dummy test - top tracks', function () {
    expect(1).toBe(1);
  });
});
