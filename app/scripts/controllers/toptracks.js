/*global angular: false */
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
        function ($scope, appConstants, lastFmDataService, ngTableParams, controllerUtils) {

            $scope.timePeriod = '3month';
            $scope.displayPeriod = ' over the last 3 months';
            $scope.data = [];
            $scope.initialPageLoad = true;

            if (appConstants.lastFmUser.indexOf('xxx') >= 0 || appConstants.lastFmApiKey.indexOf('000') >= 0) {
                $scope.editConstantsError = true;
                return;
            }

            $scope.setPeriod = function (selectedDuration) {
                $scope.timePeriod = selectedDuration;
                $scope.displayPeriod = controllerUtils.getDisplayTimePeriod(selectedDuration);
                $scope.getTopTracks();
            };

            $scope.tableParams = new ngTableParams({
                page: 1,
                count: 10
            }, {
                total: $scope.data.length,
                getData: function ($defer, params) {
                    var hasData = ($scope.data && $scope.data.toptracks && $scope.data.toptracks.track !== null);
                    if (hasData) {
                        params.total($scope.data.toptracks.track.length);
                    }
                    var page = hasData ? $scope.data.toptracks.track.slice((params.page() - 1) * params.count(), params.page() * params.count()) : [];
                    $defer.resolve(page);
                    $scope.isLoading = false;
                }
            });

            $scope.getTopTracks = function () {
                $scope.isLoading = true;
                $scope.initialPageLoad = false;

                lastFmDataService.getTopTracks($scope.timePeriod)
                    .then(
                        function (data) {
                            $scope.data = data;
                            $scope.tableParams.reload();
                            $scope.tableParams.$params.page = 1;
                        },
                        function () {
                            $scope.dataRetrievalError = true;
                            $scope.isLoading = false;
                        }
                    );
            };

            if ($scope.initialPageLoad) {
                $scope.getTopTracks();
            }
        }
    ]);