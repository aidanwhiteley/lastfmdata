/*global angular: false */

'use strict';

/**
 * @ngdoc function
 * @name lastfmdataApp.controller:ModalCtrl
 * @description
 * # ModalCtrl
 * Controller of the lastfmdataApp
 */
angular.module('lastfmdataApp')
    .controller('ModalCtrl', function ($scope, $modal, $log) {

        $scope.open = function (theImage, theArtist, theAlbum) {

            var modalInstance = $modal.open({
                templateUrl: 'views/albumimage.html',
                controller: 'ModalInstanceCtrl',
                resolve: {
                    theImage: function () {
                        return theImage;
                    },
                    theArtist: function () {
                        return theArtist;
                    },
                    theAlbum: function () {
                        return theAlbum;
                    }
                }
            });

            modalInstance.result.then(function () {
                //$scope.selected = selectedItem;
            }, function () {
                $log.debug('Modal dismissed at: ' + new Date());
            });
        };
    });

angular.module('lastfmdataApp').controller('ModalInstanceCtrl', function ($scope, $modalInstance, theImage, theArtist, theAlbum) {

    $scope.theImage = theImage;
    $scope.theArtist = theArtist;
    $scope.theAlbum = theAlbum;

    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});