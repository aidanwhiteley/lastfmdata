'use strict';

/**
 * @ngdoc service
 * @name lastfmdataApp.lastFmDataService
 * @description
 * # lastFmDataService
 * Service in the lastfmdataApp.
 */
angular.module('lastfmdataApp')
    .service('lastFmDataService', ['$cacheFactory', 'appConstants', '$http', '$q', '$log',
        function lastFmDataService($cacheFactory, appConstants, $http, $q, $log) {

            var self = this;
            self.lastFmDataCache = $cacheFactory('lastFmData');

            this.getTopAlbums = function(period) {
                var limit = 20;
                var jsonpUrl = appConstants.lastFmApiUrl + 'user.gettopalbums&limit=' + limit + '&period=' + period + '&user=' +
                    appConstants.lastFmUser + '&api_key=' + appConstants.lastFmApiKey + '&format=json';

                return this.getLastFmData(jsonpUrl);
            };

            this.getRecentTracks = function() {
                var limit = 50;
                var jsonpUrl = appConstants.lastFmApiUrl + 'user.getRecentTracks&limit=' + limit + '&user=' + appConstants.lastFmUser +
                    '&api_key=' + appConstants.lastFmApiKey + '&format=json';

                return this.getLastFmData(jsonpUrl);
            };

            this.getTopTracks = function(period) {
                var limit = 50;
                var jsonpUrl = appConstants.lastFmApiUrl + 'user.gettoptracks&limit=' + limit + '&period=' + period + '&user=' +
                    appConstants.lastFmUser + '&api_key=' + appConstants.lastFmApiKey + '&format=json';

                return this.getLastFmData(jsonpUrl);
            };

            // Use of promises,q and http based on article at http://www.dwmkerr.com/promises-in-angularjs-the-definitive-guide/
            this.getLastFmData = function(url) {

				$log.debug('About to retrieve data for: ' + url);
                var cachedData = self.lastFmDataCache.get(url);

                var deferred = $q.defer();

                var cacheBust = '';
                if (!appConstants.useBrowserCache) {
                    cacheBust = '&cb=' + Math.random();
                }

                if ((!cachedData) || (cachedData.timestamp <= (new Date()).getTime() - appConstants.cacheExpiryPeriodMs)) {

                    var aPromise;
                    if (corsCapable()) {
                        $log.debug('CORS is supported by the browser');
                        aPromise = $http.get(url + cacheBust, {
                            cache: appConstants.useBrowserCache
                        });
                    } else {
                        $log.debug('CORS is not supported by the browser - using JSONP');
                        aPromise = $http.jsonp(url + '&callback=JSON_CALLBACK' + cacheBust, {
                            // Angular http cache parameter does not work reliably for JSONP so not used here
                        });
                    }

                    aPromise.success(function(data) {
                        $log.debug('Cache miss - data retrieved OK by http');
                        self.lastFmDataCache.put(url, {
                            timestamp: (new Date()).getTime(),
                            theData: data
                        });
                        deferred.resolve(data);
                    }).error(function(response) {
                        $log.debug('Cache miss - failed to retrieve data by http');
                        deferred.reject(response);
                    });
                } else {
                    $log.debug('Cache hit - data returned from cache');
                    deferred.resolve(cachedData.theData);
                }

                return deferred.promise;
            };

            function corsCapable() {
                var browserSupportsCors = false;
                if ('withCredentials' in new XMLHttpRequest()) {
                    browserSupportsCors = true;
                } else if (typeof XDomainRequest !== "undefined") {
                    // Could use IE8/9 specific "CORS" code with XDR but will just say "no"
                } else {
                    // No CORS support at all
                }
                return browserSupportsCors;
            };

        }
    ]);