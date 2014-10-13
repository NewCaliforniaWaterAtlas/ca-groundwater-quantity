'use strict';

var app = angular.module('app', ['ui.router', 'ui.bootstrap']);

app.config( ['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
	
	$locationProvider.html5Mode(true).hashPrefix('!');

	$stateProvider
		.state('index', {
			url: '/',
			templateUrl: '../views/map.html', 
			controller: 'myModal'
		});

		$urlRouterProvider.otherwise('/');
}]);