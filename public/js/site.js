'use strict';

// Declare app level module which depends on filters, and services

angular.module('app')

    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                views: {
                    'content': {
                        templateUrl: '/views/site/home.html'
                    }
                }
            })
            .state('quemSomos', {
                url: '/quemSomos',
                views: {
                    'content': {
                        templateUrl: '/views/site/quemSomos.html'
                    }
                }
            })
            .state('areaAtuacao', {
                url: '/areaAtuacao',
                views: {
                    'content': {
                        templateUrl: '/views/site/areaAtuacao.html'
                    }
                }
            })
            .state('fundadora-do-escritorio', {
                url: '/fundadora-do-escritorio',
                views: {
                    'content': {
                        templateUrl: '/views/site/fundadora-do-escritorio.html'
                    }
                }
            })
            .state('equipe', {
                url: '/equipe',
                views: {
                    'content': {
                        templateUrl: '/views/site/equipe.html'
                    }
                }
            })

    })



