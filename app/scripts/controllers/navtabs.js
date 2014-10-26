'use strict';

/**
 * @ngdoc function
 * @name lastfmdataApp.controller:NavTabsCtrl
 * @description
 * # NavTabsCtrl
 * Controller of the lastfmdataApp
 */
angular.module('lastfmdataApp')
    .controller('NavTabsCtrl', ['$scope', '$location', function($scope, $location) {
        $scope.isActive = function(route) {
            return route === $location.path();
        };
    }]);