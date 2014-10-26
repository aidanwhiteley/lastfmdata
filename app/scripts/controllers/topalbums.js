'use strict';

/**
 * @ngdoc function
 * @name lastfmdataApp.controller:TopalbumsCtrl
 * @description
 * # TopalbumsCtrl
 * Controller of the lastfmdataApp
 */
angular.module('lastfmdataApp')
    .controller('TopAlbumsCtrl', ['$scope', 'appConstants', 'lastFmDataService', function($scope, appConstants, lastFmDataService) {

        if (appConstants.lastFmUser.indexOf('xxx') >= 0 || appConstants.lastFmApiKey.indexOf('000') >= 0) {
            $scope.editConstantsError = true;
            return;
        }

        $scope.isLoading = true;

        lastFmDataService.getTopAlbums()
            .then(
                function(data) {
                    $scope.albums = data.topalbums.album;
                    $scope.isLoading = false;
                },
                function() {
                    $scope.dataRetrievalError = true;
                    $scope.isLoading = false;
                }
            );
    }]);