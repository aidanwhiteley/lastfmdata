'use strict';

/**
 * @ngdoc function
 * @name lastfmdataApp.controller:TopTracksCtrl
 * @description
 * # TopTracksCtrl
 * Controller of the lastfmdataApp
 */
angular.module('lastfmdataApp')
    .controller('TopTracksCtrl', ['$scope', 'appConstants', 'lastFmDataService', 'ngTableParams', 'controllerUtils',
        function($scope, appConstants, lastFmDataService, ngTableParams, controllerUtils) {

            $scope.timePeriod = '3month';
            $scope.total = 50;
			$scope.displayPeriod = ' over the last 3 months';

            if (appConstants.lastFmUser.indexOf('xxx') >= 0 || appConstants.lastFmApiKey.indexOf('000') >= 0) {
                $scope.editConstantsError = true;
                return;
            }

            $scope.setPeriod = function(selectedDuration) {
                $scope.timePeriod = selectedDuration;
				$scope.displayPeriod = controllerUtils.getDisplayTimePeriod(selectedDuration);
                $scope.tableParams.reload();
            };

            /*
                Having the getData function call the lastFmDataService.getTopTracks service only
                works from an efficiency point of view because the service caches the responses from
                http calls. If it was making a call to last.fm every time (e.g. every page forward in the table)
                this would be very efficient).
                TO-DO - sort out that the $scope.total is basically hard coded to 50. This will break!
            */
            $scope.tableParams = new ngTableParams({
                page: 1,
                count: 10
            }, {
                total: $scope.total,
                getData: function($defer, params) {
                    $scope.isLoading = true;
                    lastFmDataService.getTopTracks($scope.timePeriod)
                        .then(
                            function(data) {
                                var hasData = (data.toptracks.track != null);
                                if (hasData) {
                                    $scope.total = data.toptracks.track.length;
                                }
                                var page = hasData ? data.toptracks.track.slice((params.page() - 1) * params.count(), params.page() * params.count()) : [];
                                $defer.resolve(page);
                                $scope.isLoading = false;

                            },
                            function() {
                                $scope.dataRetrievalError = true;
                                $scope.isLoading = false;
                            }
                        );

                }
            });
        }
    ]);