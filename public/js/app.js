'use strict';

// Declare app level module which depends on filters, and services

angular.module('app', ['ui.router','ngRoute','restangular','ngStorage','ngFileUpload'])

.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');
	$stateProvider
		.state('home', {
	      url: '/home',
	      views: {
	        'content': {
	          templateUrl: 'views/home.html',
	          controller: 'HomeController'
	        }
	      }
	     
		})
		
})
.run(function($rootScope){
	//$rootScope.$on( "$routeChangeStart", function(event, next, current) {
	//	$rootScope.$on('$viewContentLoaded', init);
	//})
})


.config(function(RestangularProvider,$windowProvider) {
	var window = $windowProvider.$get();
	RestangularProvider.setBaseUrl("http://"+window.location.host+"/services");
    RestangularProvider.setRestangularFields({
        id: '_id'
      });
    })


