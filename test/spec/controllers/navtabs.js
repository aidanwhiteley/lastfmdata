'use strict';

describe('Controller: NavTabsCtrl', function () {

  // load the controller's module
  beforeEach(module('lastfmdataApp'));

  var NavTabsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NavTabsCtrl = $controller('NavTabsCtrl', {
      $scope: scope
    });
  }));

  it('Dummy test for nav tabs', function () {
    expect(1).toBe(1);
  });
});
