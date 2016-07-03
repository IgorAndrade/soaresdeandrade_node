'use strict';

// Declare app level module which depends on filters, and services

angular.module('app', ['ui.router', 'ngRoute', 'restangular', 'ngStorage', 'ngFileUpload', 'ngTable', 'moment-picker'])

    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                views: {
                    'content': {
                        templateUrl: 'views/home.html'
                    }
                }
            })
            .state('noticia', {
                url: '/noticia',
                views: {
                    'content': {
                        templateUrl: 'views/noticias/noticia.html',
                        controller: "noticiaCtr"
                    }
                },
                params: {
                    noticia: null
                }
            })
            .state('noticiaLista', {
                url: '/noticiaLista',
                views: {
                    'content': {
                        templateUrl: 'views/noticias/listaNoticias.html',
                        controller: "noticiaCtr"
                    }
                }
            })

    })
    .run(function ($rootScope) {
        //$rootScope.$on( "$routeChangeStart", function(event, next, current) {
        //	$rootScope.$on('$viewContentLoaded', init);
        //})
    })


    .config(function (RestangularProvider, $windowProvider) {
        var window = $windowProvider.$get();
        RestangularProvider.setBaseUrl("http://" + window.location.host + "/services");
        RestangularProvider.setRestangularFields({
            id: '_id'
        });
    })

    .config(['momentPickerProvider', function (momentPickerProvider) {
        momentPickerProvider.options({
            /* Picker properties */
            locale:        'pt',
            format:        'DD/MM/YYYY',
            minView:       'decade',
            maxView:       'minute',
            startView:     'day',
            today:         true,

            /* Extra: Views properties */
            leftArrow:     '&larr;',
            rightArrow:    '&rarr;',
            yearsFormat:   'YYYY',
            monthsFormat:  'MM',
            daysFormat:    'DD',
            hoursFormat:   'HH:[00]',
            minutesFormat: moment.localeData().longDateFormat('LT').replace(/[aA]/, ''),
            secondsFormat: 'ss',
            minutesStep:   5,
            secondsStep:   1
        });
    }]);


