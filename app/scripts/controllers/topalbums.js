'use strict';

/**
 * @ngdoc function
 * @name lastfmdataApp.controller:TopalbumsCtrl
 * @description
 * # TopalbumsCtrl
 * Controller of the lastfmdataApp
 */
angular.module('lastfmdataApp')
    .controller('TopAlbumsCtrl', ['$scope', 'appConstants', 'lastFmDataService', 'controllerUtils',
		function ($scope, appConstants, lastFmDataService, controllerUtils) {

            $scope.timePeriod = '6month';
            $scope.displayPeriod = ' over the last 6 months';

            if (appConstants.lastFmUser.indexOf('xxx') >= 0 || appConstants.lastFmApiKey.indexOf('000') >= 0) {
                $scope.editConstantsError = true;
                return;
            }

            $scope.setPeriod = function (selectedDuration) {
                $scope.timePeriod = selectedDuration;
                $scope.displayPeriod = controllerUtils.getDisplayTimePeriod(selectedDuration);
                $scope.loadData(selectedDuration);
            };

            $scope.imageSizeOffset = function () {
                var offset = 1;
                // based on screen width, but you can base on height as well http://www.w3schools.com/js/js_window_screen.asp
                if (window.screen.width < 800) {
                    offset += 1;
                }
                return offset;
            };

            $scope.loadData = function (duration) {
                $scope.isLoading = true;

                lastFmDataService.getTopAlbums(duration)
                    .then(
                        function (data) {
                            var albums = data.topalbums.album;
                            var sortedAlbums = albums.sort(function (a, b) {
                                return parseInt(b.playcount) - parseInt(a.playcount);
                            });
                            $scope.albums = sortedAlbums;
                            $scope.isLoading = false;
                        },
                        function () {
                            $scope.dataRetrievalError = true;
                            $scope.isLoading = false;
                        }
                    );
            };

            $scope.loadData($scope.timePeriod);
            $scope.offset = $scope.imageSizeOffset();

        }]);