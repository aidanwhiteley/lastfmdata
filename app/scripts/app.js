'use strict';

/**
 * @ngdoc overview
 * @name lastfmdataApp
 * @description
 * # lastfmdataApp
 *
 * Main module of the application.
 */
angular
    .module('lastfmdataApp', [
        'ngResource',
        'ngRoute',
        'ui.bootstrap', 
        'ngTable'
    ])
    .constant('appConstants', {
        lastFmUser : 'xxxxxx',                                                    /* Your Last.FM userid */
        lastFmApiKey : '00000000000000000000000000000000',                        /* Your last FM API key */
        lastFmApiUrl : 'http://ws.audioscrobbler.com/2.0/?method=',               /* Last FM API URL - should not need changing */
        cacheExpiryPeriodMs: 30000,                                               /* How long to cache - in JavaScript - the JSON/JSONP responses from Last.FM */
        useBrowserCache: false                                                    /* Cache JSON responses in browser - avoid hitting Last.FM too much during development */
    })
    .config(function ($routeProvider, $logProvider) {

        $logProvider.debugEnabled(false);                                         /* Turn on console log debugging */

        $routeProvider
            .when('/', {
                templateUrl: 'views/top-albums.html',
                controller: 'TopAlbumsCtrl'
            })
            .when('/top-tracks', {
                templateUrl: 'views/top-tracks.html',
                controller: 'TopTracksCtrl'
            })
            .when('/recent-tracks', {
                templateUrl: 'views/recent-tracks.html',
                controller: 'RecentTracksCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
