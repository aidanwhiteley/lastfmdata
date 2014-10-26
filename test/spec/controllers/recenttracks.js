'use strict';

describe('Controller: RecentTracksCtrl', function () {

  // load the controller's module
  beforeEach(module('lastfmdataApp'));

  var RecentTracksCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecentTracksCtrl = $controller('RecentTracksCtrl', {
      $scope: scope
    });
  }));

  it('Dummy test - recent tracks', function () {
    expect(1).toBe(1);
  });
});
