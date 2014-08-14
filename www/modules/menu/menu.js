define(['angular'], function (angular) {
	angular.module('Menu', [])
			.config(function ($stateProvider, $urlRouterProvider) {
				$stateProvider
						.state('app', {
							url: "/app",
							abstract: true,
							templateUrl: "modules/menu/templates/menu.html",
							controller: 'Menu.MenuCtrl'
						});
			});
});
