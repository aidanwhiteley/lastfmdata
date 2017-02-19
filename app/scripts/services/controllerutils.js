/*global angular: false */
'use strict';

/**
 * @ngdoc service
 * @name lastfmdataApp.controllerUtils
 * @description
 * # controllerUtils
 * Service in the lastfmdataApp.
 */
angular.module('lastfmdataApp')
    .service('controllerUtils', function controllerUtils() {
        return {
            // Hard coded logic for displaying selected time period
            getDisplayTimePeriod: function (timePeriod) {
                var toDisplay = '';
                if (timePeriod === '7day') {
                    toDisplay = ' over the last 7 days';
                } else if (timePeriod === '1month') {
                    toDisplay = ' over the last month';
                } else if (timePeriod === '6month') {
                    toDisplay = ' over the last 6 months';
                } else if (timePeriod === '12month') {
                    toDisplay = ' over the last 12 months';
                } else if (timePeriod === 'overall') {
                    toDisplay = ' overall';
                }
                return toDisplay;
            },
            doSomethingElse: function () {
                // Place holder
            }
        };
    });