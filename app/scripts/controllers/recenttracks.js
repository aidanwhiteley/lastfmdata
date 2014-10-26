'use strict';

/**
 * @ngdoc function
 * @name lastfmdataApp.controller:RecentTracksCtrl
 * @description
 * # RecentTracksCtrl
 * Controller of the lastfmdataApp
 */
angular.module('lastfmdataApp')
    .controller('RecentTracksCtrl', ['$scope', 'appConstants', 'lastFmDataService', 'ngTableParams',
        function($scope, appConstants, lastFmDataService, ngTableParams) {

            if (appConstants.lastFmUser.indexOf('xxx') >= 0 || appConstants.lastFmApiKey.indexOf('000') >= 0) {
                $scope.editConstantsError = true;
                return;
            }

            $scope.isLoading = true;

            lastFmDataService.getRecentTracks()
                .then(
                    function(data) {
                        $scope.tableParams = new ngTableParams({
                                    page: 1,
                                    count: 10
                                }, {
                                    total: data.recenttracks.track.length,
                                    getData: function($defer, params) {
                                        $defer.resolve(data.recenttracks.track.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                                        $scope.isLoading = false;
                                    }
                                });
                            },
                            function() {
                                $scope.dataRetrievalError = true;
                                $scope.isLoading = false;
                            }
                    );

                }]);