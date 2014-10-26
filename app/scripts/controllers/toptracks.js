'use strict';

/**
 * @ngdoc function
 * @name lastfmdataApp.controller:TopTracksCtrl
 * @description
 * # TopTracksCtrl
 * Controller of the lastfmdataApp
 */
angular.module('lastfmdataApp')
    .controller('TopTracksCtrl', ['$scope', 'appConstants', 'lastFmDataService', 'ngTableParams',
        function($scope, appConstants, lastFmDataService, ngTableParams) {

            if (appConstants.lastFmUser.indexOf('xxx') >= 0 || appConstants.lastFmApiKey.indexOf('000') >= 0) {
                $scope.editConstantsError = true;
                return;
            }

            $scope.isLoading = true;

            lastFmDataService.getTopTracks()
                .then(
                    function(data) {
                        $scope.tableParams = new ngTableParams({
                            page: 1,
                            count: 10
                        }, {
                            total: data.toptracks.track.length,
                            getData: function($defer, params) {
                                $defer.resolve(data.toptracks.track.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                                $scope.isLoading = false;
                            }
                        });
                    },
                    function() {
                        $scope.dataRetrievalError = true;
                        $scope.isLoading = false;
                    }
                );

        }
    ]);