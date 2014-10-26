'use strict';

describe('Controller: TopAlbumsCtrl', function () {

  // load the controller's module
  beforeEach(module('lastfmdataApp'));

  var TopAlbumsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TopAlbumsCtrl = $controller('TopAlbumsCtrl', {
      $scope: scope
    });
  }));

  it('Dummy test - top albums', function () {
    expect(1).toBe(1);
  });
});
